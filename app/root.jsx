import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header-footer/Navbar";
import AppStyle from "./styles/App.css";
import NavBarStyle from "./styles/Navbar.css";
import FooterStyle from "./styles/Footer.css";
import Footer from "./components/header-footer/Footer";
import pagesStyle from "./styles/Pages.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const links = () => [
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        { rel: "stylesheet", href: FooterStyle },
        { rel: "stylesheet", href: AppStyle },
        { rel: "stylesheet", href: NavBarStyle },
        { rel: "stylesheet", href: pagesStyle },
      ]
    : []),
];

export default function App() {

  useEffect(() => {
    !function (e, t, n) { function a() { var e = t.getElementsByTagName("script")[0], n = t.createElement("script"); n.type = "text/javascript", n.async = !0, n.src = "https://beacon-v2.helpscout.net", e.parentNode.insertBefore(n, e) } if (e.Beacon = n = function (t, n, a) { e.Beacon.readyQueue.push({ method: t, options: n, data: a }) }, n.readyQueue = [], "complete" === t.readyState) return a(); e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1) }(window, document, window.Beacon || function () { });


    window.Beacon('init', '790e12c1-fee9-45ed-b008-8c5054db2f4d')
  }, [])
  

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
