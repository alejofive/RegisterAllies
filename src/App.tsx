import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";

import Login1 from "./Pages/Login1";
import Login2 from "./Pages/Login2";
import Login3 from "./Pages/Login3";
import Login4 from "./Pages/Login4";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Login1 /> },
    { path: "/login2", element: <Login2 /> },
    { path: "/login3", element: <Login3 /> },
    { path: "/login4", element: <Login4 /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient m-auto flex justify-center items-center">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
