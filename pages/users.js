import Users from '../components/Dashboard/Users';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'
import withAuth from '../guards/withAuth';
import React, { useContext } from 'react'


function users() {
  // const {data:session , status} = useSession({required:true});


  return (
    <DashboardPageLayout headerText={"Users"}>
      <Users />
    </DashboardPageLayout>
  )
}

export default withAuth(users);