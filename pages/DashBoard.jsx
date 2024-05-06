import React from 'react'
import SideMenu from '../src/Components/SideMenu'

export default function DashBoard() {
  return (
    <div>

      <SideMenu />

      <div class="  p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1  id="dashbord" >Dashboard</h1>
        </div>
      </div>

    </div>
  )
}
