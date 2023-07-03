import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import TextInput from "../../components/textInput";
import { registerForm, loginForm } from "../../constant/formField";
import { login, register } from "../../utils/authHandler";
import nookies from "nookies";

export default function Authentication() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const form = isRegister ? registerForm : loginForm;

  const handleOnSubmit = async (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    setIsLoading(true);
    setError({});

    (isRegister ? register(formData, setError) : login(formData, setError))
      .then((resp) => setFormData({}))
      .catch((err) => {})
      .finally(() => setIsLoading(false));
  };

  const handleOnChangeForm = (isRegister) => {
    setError({});
    setIsRegister(isRegister);
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="min-h-screen hero bg-base-300">
      <div className="flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            {isRegister ? "Register" : "Login"}
          </h1>
          <p className="py-6 w-full max-w-[400px]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <div
            className={classnames(
              "w-full tabs tabs-boxed relative before:transition-all before:duration-300 before:contents-[''] before:tab before:absolute before:w-1/2 before:my-auto before:top-0 before:bottom-0 before:bg-primary before:rounded-lg",
              isRegister ? "before:right-0" : "before:right-1/2"
            )}
          >
            <div
              className={classnames(
                "flex-auto tab",
                !isRegister && "text-white"
              )}
              onClick={() => handleOnChangeForm(false)}
            >
              Login
            </div>
            <div
              className={classnames(
                "flex-auto tab",
                isRegister && "text-white"
              )}
              onClick={() => handleOnChangeForm(true)}
            >
              Register
            </div>
          </div>

          <form className="card-body" onSubmit={handleOnSubmit}>
            {form.map(({name, type}, index) => (
              <TextInput
                error={error}
                name={name}
                placeholder={name}
                type={type}
                key={index}
              />
            ))}
            {!isRegister ? (
              <div className="flex flex-row items-center w-full">
                <div className="form-control w-fit">
                  <label className="label">
                    <input
                      type="checkbox"
                      className="cursor-pointer toggle toggle-primary toggle-sm"
                    />
                    <span className="ml-2 text-xs label-text">Remember me</span>
                  </label>
                </div>
                <span className="ml-auto text-xs cursor-pointer text-primary">
                  forgot password?
                </span>
              </div>
            ) : null}
            <div className="mt-6 form-control">
              <button
                className={classnames(
                  "btn btn-primary bg-primary hover:bg-primary/70",
                  isLoading ? "loading" : null
                )}
                type="submit"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
