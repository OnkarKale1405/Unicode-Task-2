import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";

// Layou
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index path="/" element={<Login />} />
    <Route path="/Unicode-Task-2" element={<Login />} />
    <Route path="/Unicode-Task-2/login" element={<Login />} />
    <Route path="/Unicode-Task-2/register" element={<Register />} />
  </>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
