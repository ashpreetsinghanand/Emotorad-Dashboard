import Dashboard from '../components/Dashboard/Dashboard';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'
//import { withAuth } from '@/guards/withAuth';
import React, { useContext } from 'react'


function dashboard() {
  // const {data:session , status} = useSession({required:true});


  return (
    <DashboardPageLayout headerText={"Dashboard"}>
      <Dashboard />
    </DashboardPageLayout>
  )
}

export default dashboard;