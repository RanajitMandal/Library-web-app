
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../../pages/Adminlogin";
import DashBoard from "../../pages/DashBoard";
import UserList from "../../pages/UserList";
import AddBook from "../Components/addBook";
import AddUser from "../Components/AddUser";
import PageLayout from "./PageLayout";
import Booklist from "../../pages/Booklist";

const UserLayoutFunc = (comp) => {
    return <PageLayout>{comp}</PageLayout>;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLogin />
    },

    {
        path: '/dashboard',
        element: UserLayoutFunc(<DashBoard />)
    },
    {
        path: '/userlist',
        element: UserLayoutFunc(<UserList />)
    },
    {
        path: '/adduser',
        element: UserLayoutFunc(<AddUser />)
    },
    {
        path: '/booklist',
        element: UserLayoutFunc(<Booklist />)
    },
    {
        path: '/addbook',
        element: UserLayoutFunc(<AddBook />)
    }

]);

export default router;