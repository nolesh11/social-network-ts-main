import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReagistrationPage } from "./pages/ReagistrationPage/ReagistrationPage";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
import { PostPage } from "./pages/PostPage/PostPage";

const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/registration',
    element: <ReagistrationPage />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />
  },
  {
    path: '/posts/:postId',
    element: <PostPage />
  },
])

const App: React.FC = () => {
  return (  
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
