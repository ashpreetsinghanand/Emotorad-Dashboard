import Dashboard from '../components/Dashboard/Dashboard';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'
import React, { useContext } from 'react'
import withAuth from '../guards/withAuth';


function dashboard() {

  return (
    <DashboardPageLayout headerText={"Dashboard"}>
      <Dashboard />
    </DashboardPageLayout>
  )
}

export default withAuth(dashboard);