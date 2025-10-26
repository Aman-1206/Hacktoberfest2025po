
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// a layout to include Navbar on every page
const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div style={{padding:"1rem"}}>{children}</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    )
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
export default App;
