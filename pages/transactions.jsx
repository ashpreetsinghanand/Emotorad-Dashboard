import Users from '../components/Dashboard/Users';
import DashboardPageLayout from '../components/Dashboard/DashboardPageLayout'

import React, { useContext } from 'react'
import withAuth from '../guards/withAuth';


function transactions() {
  // const {data:session , status} = useSession({required:true});


  return (
    <DashboardPageLayout headerText={"Transactions"}>
  
    <div className='flex justify-center text-3xl'>Transactions</div>
    </DashboardPageLayout>
  )
}

export default withAuth(transactions);