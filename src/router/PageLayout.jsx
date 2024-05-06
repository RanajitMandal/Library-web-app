import React from 'react'
import SideMenu from '../Components/SideMenu'

const PageLayout = ({ children }) => {
    console.log(children);
    return (
        <div>
            <SideMenu />
            <div className="p-4 sm:ml-64">
                <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <div className="relative overflow-x-auto" >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLayout