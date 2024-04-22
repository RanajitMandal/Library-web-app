import React, { useEffect, useState } from 'react'
// import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SideMenu from '../src/Components/SideMenu';
export default function UserList() {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        fechUsers()
    }, []);

    const navigate = useNavigate();
    function detailUser(id) {
        navigate(`/UserDetails/${id}`);
    }

    const fechUsers = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://reqres.in/api/users?page=2',
            headers: {}
        };


        try {
            const response = await axios.request(config);
            setUsers(response.data);
        }

        catch (error) {
            console.log(error);
        };

    }
    return (
        <div>

            <SideMenu />

            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                    <div>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-3,px-6 py-3">
                                            FirstName
                                        </th>
                                        <th scope="col" className=" px-3,px-6 py-3">
                                            LastName
                                        </th>
                                        <th scope="col" className=" px-3,px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3,px-6 py-3">
                                            Avatar
                                        </th>
                                        <th scope="col" className="px-3,px-6 py-3">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.data?.map((user, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {user.first_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {user.last_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4" >
                                                    <img src={user.avatar} alt="" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                                                        detailUser(user.id)
                                                    }}>view</button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </div>

        </div>





    )
}
