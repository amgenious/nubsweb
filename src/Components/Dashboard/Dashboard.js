import React from 'react'
import { DashboardNav } from './DashboardNav'
import { DashboardContent } from './DashboardContent'

export const Dashboard = () => {
  return (
    <div className='container-fluid dashboard'>
        <div className='row'>
            <div className='col-md-12'>
            <div>
            <DashboardNav />
            </div>
            <div>
            <DashboardContent />
            </div>
            </div>
        </div>

    </div>
  )
}
