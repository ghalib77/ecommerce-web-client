import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect, useState } from "react";
import nookies from "nookies";
import { useAtom } from "jotai";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  Hydrate,
} from "@tanstack/react-query";

import { fetchLoginUser } from "../hooks/query/loginUser";
import { loginUserAtom } from "../hooks/atom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [user, dispatch] = useAtom(loginUserAtom);
  const token = nookies.get().token || null;

  useEffect(() => {
    if (token) {
      (async () => {
        const resp = await queryClient.fetchQuery({
          queryKey: ["loginUser"],
          queryFn: () => fetchLoginUser(token),
        });
        dispatch({ type: "load_login_user", payload: resp.data.data });
      })();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </Hydrate>
    </QueryClientProvider>
  );
}
