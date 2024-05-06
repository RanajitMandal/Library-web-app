
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SideMenu from '../src/Components/SideMenu';
import AddBook from '../src/Components/addBook';

export default function Booklist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const navigate = useNavigate();

    const fetchUsers = async () => {

        try {
            const response = await axios.get('http://localhost:3000/book/all-book');
            // Assuming response.data is an array of users
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const deleteForlist = () => {

    }

    // const addUser = () => {
    //     navigate("/AddUser");
    // };

    return (
        <div>
            <SideMenu />
            <div className="p-4 sm:ml-64">
                <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        {/* <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={addUser}
                        >
                            Add User
                        </button> */}
                        <div className="relative overflow-x-auto" >
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-3,px-6 py-3">
                                            id
                                        </th>
                                        <th scope="col" className=" px-3,px-6 py-3">
                                            name
                                        </th>
                                        <th scope="col" className=" px-3,px-6 py-3">
                                            author
                                        </th>
                                        <th scope="col" className="px-3,px-6 py-3">
                                            stnumber
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index + 1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {user.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.author}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.stnumber}
                                            </td>
                                            
                                            <td>
                                                <button
                                                    type="button"
                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    onClick={deleteForlist}
                                                > Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
