import React from 'react'
import './DukaanDashboard.css'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import DashboardActivity from '../Components/DashboardActivity'

const DukaanDashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar className='side_bar' />
      <div className='dashboard_content'>
      <Navbar />
      <div className='dukaan_dashboard'>
        <DashboardActivity />
      </div>
      </div>
    </div>
  )
}

export default DukaanDashboard;