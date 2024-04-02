import Users from '../components/Dashboard/Users';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'

import React, { useContext } from 'react'
import withAuth from '../guards/withAuth';


function schedules() {
  // const {data:session , status} = useSession({required:true});


  return (
    <DashboardPageLayout headerText={"Schedules"}>
  
    <div className='flex justify-center text-3xl'> Schedules</div>
    </DashboardPageLayout>
  )
}

export default withAuth(schedules);