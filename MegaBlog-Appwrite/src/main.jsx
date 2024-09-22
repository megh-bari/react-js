import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login, Post } from "./components/index.js";
import SignUp from "./components/Signup.jsx";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {""}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element:(
          <AuthLayout authentication>
            {""}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element: <Post/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>
);
