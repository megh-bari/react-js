import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error("Error getting current user:", error);
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white justify-around items-center">
      <Header />
      <ErrorBoundary>
        <main>
          <Outlet />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  ) : null;
}

export default App;