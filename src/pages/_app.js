import Layout from "@/components/layout";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ToastContainer } from "react-toastify";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const noLayoutRoutes = ["/login", "/signup"];

  const shouldShowLayout = !noLayoutRoutes.includes(pathname);

  return (
    <Provider store={store}>
      {shouldShowLayout ? (
        <Layout>
          <Component {...pageProps} />
          <ProgressBar
            height="4px"
            color="#845adf"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <ToastContainer style={{ zIndex: 9999 }} />
        </Layout>
      ) : (
        <>
          <Component {...pageProps} />
          <ProgressBar
            height="4px"
            color="#845adf"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <ToastContainer style={{ zIndex: 9999 }} />
        </>
      )}
    </Provider>
  );
}
