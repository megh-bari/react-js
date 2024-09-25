import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout, Login } from "./components/index.js";
import SignUp from "./pages/Signup";
import React from "react";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost"
import Post from "./pages/Post"
import AllPost from "./pages/AllPost.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary><App /></ErrorBoundary>,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <ErrorBoundary><Home /></ErrorBoundary>,
      },
      {
        path: "/login",
        element: (
          <ErrorBoundary>
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          </ErrorBoundary>
        ),
      },
      {
        path: "/signup",
        element: (
          <ErrorBoundary>
            <AuthLayout authentication={false}>
              <SignUp />
            </AuthLayout>
          </ErrorBoundary>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <ErrorBoundary>
            <AuthLayout authentication>
              <AllPost />
            </AuthLayout>
          </ErrorBoundary>
        ),
      },
      {
        path: "/add-post",
        element: (
          <ErrorBoundary>
            <AuthLayout authentication>
              <AddPost />
            </AuthLayout>
          </ErrorBoundary>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <ErrorBoundary>
            <AuthLayout authentication>
              <EditPost/>
            </AuthLayout>
          </ErrorBoundary>
        )
      },
      {
        path: "/post/:slug",
        element: <ErrorBoundary><Post/></ErrorBoundary>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);