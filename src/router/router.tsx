import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Registration from "../components/Registration/Registration";
import Login from "../components/Registration/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widget from "../components/Widget/Widget";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/sign_up",
        element: <Registration />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/app",
        element: (
          <>
            <Header />
            <Main>
              <Sidebar />
              <Feed />
              <Widget />
            </Main>
          </>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
