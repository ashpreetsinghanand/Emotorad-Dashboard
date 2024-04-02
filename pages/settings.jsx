import Users from '../components/Dashboard/Users';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'

import React, { useContext } from 'react'
import withAuth from '../guards/withAuth';


function settings() {
  // const {data:session , status} = useSession({required:true});


  return (
    <DashboardPageLayout headerText={"Settings"}>
  
    <div className='flex justify-center text-3xl'> Setting</div>
    </DashboardPageLayout>
  )
}

export default withAuth(settings);