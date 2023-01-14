import { apiUpload, apiWithoutToken } from "./api";
import nookies from "nookies";
import Router from "next/router";
import { useUser } from "../hooks/query/loginUser";

export const login = async (formData, setError) => {
  try {
    const resp = await apiUpload().post("/auth/login", formData);
    nookies.set(null, "token", resp.data.token, {
      httpOnly: false,
      maxAge: 60 * 60 * 60,
      path: "/",
      secure: true,
    });
    Router.reload();
    return resp;
  } catch (err) {
    Object.entries(err.response.data).forEach(([key, value]) => {
      setError((prev) => ({ ...prev, [key]: value }));
    });
    throw err;
  }
};

export const register = async (FormData, setError) => {
  try {
    const resp = await apiUpload().post("/auth/register", FormData);
    Router.push("/auth/verification");
    return resp;
  } catch (err) {
    Object.entries(err.response.data).forEach(([key, value]) => {
      setError((prev) => ({ ...prev, [key]: value }));
    });
    throw err;
  }
};

export const logout = async ({ id }) => {
  nookies.destroy(null, "token");
  Router.reload();
};
