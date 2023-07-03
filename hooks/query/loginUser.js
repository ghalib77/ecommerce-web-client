import { useQuery } from "@tanstack/react-query";
import { apiWithToken } from "../../utils/api";

export const fetchLoginUser = async (token) => {
  const resp = await apiWithToken(token).get(`/user/${token}`);
  return resp;
};

export const useLoginUser = (token) => {
  return useQuery({
    queryKey: ["loginUser"],
    queryFn: () => fetchUser(token),
  });
};
