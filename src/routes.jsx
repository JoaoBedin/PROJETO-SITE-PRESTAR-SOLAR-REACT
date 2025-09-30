

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/SobreNos",
    element: <AboutUs />,
  },

    {
    path: "/Projetos",
    element: <Projects />,
  }

]);


export default router