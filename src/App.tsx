import React from "react";
// import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReagistrationPage } from "./pages/ReagistrationPage/ReagistrationPage";

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
    path: '/reagistration',
    element: <ReagistrationPage />
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
