import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Adminlogin from './Components/Adminlogin';
import Dashboard from './Components/Dashboard';


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
   
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;