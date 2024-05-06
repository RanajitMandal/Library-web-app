import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Adminlogin from '../pages/Adminlogin';
import Dashboard from '../pages/DashBoard';
import UserList from "../pages/UserList";
import AddUser from "./Components/AddUser";
import Booklist from "../pages/Booklist";
import AddBook from "./Components/addBook";


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
    {
      path: '/adduser',
      element: <AddUser/>
    },
    {
      path:'/booklist',
      element:<Booklist/>
    },
    {
      path:'/addbook',
      element:<AddBook/>
    }
   
   
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;