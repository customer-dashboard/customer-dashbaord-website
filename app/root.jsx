// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header-footer/Navbar';
import AppStyle from './styles/App.css';
import NavBarStyle from './styles/Navbar.css';
import FooterStyle from './styles/Footer.css';
// import Footer from "./components/Footer";
import Footer from './components/header-footer/Footer'
import pagesStyle from './styles/Pages.css';
import TabReuseStyle from './styles/TabReuse.css';


import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import 'aos/dist/aos.css';

export const links = () => [
  ...(cssBundleHref ? [
     { rel: "stylesheet", href: cssBundleHref },
     {rel: "stylesheet", href: FooterStyle},
     {rel: "stylesheet", href: AppStyle},
     {rel: "stylesheet", href: NavBarStyle},
     {rel:"stylesheet", href:pagesStyle}
] : []),
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links/>
      </head>
      <body>
        <Navbar/>
        <Outlet />
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
