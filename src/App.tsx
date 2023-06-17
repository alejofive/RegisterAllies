import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";

import Register from "./Pages/Register";


const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Register /> },

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
