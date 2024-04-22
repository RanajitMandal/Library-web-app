import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Adminlogin from '../pages/Adminlogin';
import Dashboard from '../pages/DashBoard';
import UserList from "../pages/UserList";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Adminlogin />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/userlist',
      element: <UserList />
    },
   
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;