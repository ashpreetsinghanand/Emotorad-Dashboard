import React from 'react'
import { useContext, useEffect, useRef, useState } from "react";
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Modal from './Modal';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const doughnutData = {
    labels: ['Red', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [14, 31, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  // Sample data for bar chart
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4',],
    datasets: [
      {
        label: 'Guest',
        data: [500, 450, 200, 400],
        backgroundColor: 'green',
       
        borderWidth: 1,
      },
      {
         label: 'User',
        data: [400, 350, 300, 350],
        backgroundColor: 'rgba(255, 99, 132, 1)',
      
        borderWidth: 1,
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function closeShowModal(e) {
    e.preventDefault();
    setShowModal(false);
  }

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  function redirectUser(){
    router.push("/users");
  }

  return (
    <div className='flex flex-col gap-y-2 mx-16 '>
      <div className='flex gap-x-5 w-full'>
        <div className='w-1/4'>
          <div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-xs'>Total Revenues</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$2,129,430</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+2.15%</div>
            </div>
          </div>
        </div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-xs'>Total Transactions</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$1,520</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.75%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-xs'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.4%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-xs'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+4.2%</div>
            </div>
          </div></div>
      </div>
      <div className='flex space-x-5'>

      
          <div className='flex flex-col w-1/2 bg-slate-50 rounded-xl shadow-lg border-gray-200 border p-5'>
              <div className='font-[500] text-xl'>Activites</div>
              <div className='flex justify-between pb-2'>
                <div className="text-gray-600">May - June 2021</div>
                <div className='flex gap-x-5'>
                  <div className='font-[500]'>Guest</div>
                  <div className='font-[500]'>User</div>
                </div>
              </div>
              <div className=' w-[100%] flex justify-center '><BarChart data={barData} className="w-full"/></div>
          </div> 
          <div className='w-1/2 p-5  bg-slate-50 rounded-xl shadow-lg border-gray-200 border'>
              <div className='flex justify-between'>
                <div className='font-[500] text-xl'>Top Products</div>
                <div className="text-gray-400"> May-June 2021</div>
              </div>
              <div className='flex h-full '>
                <div className='w-1/2 justify-center flex flex-col'>
                  <DoughnutChart data={doughnutData} />
                </div>
              <div className='flex flex-col justify-center gap-y-2'>
               <div> <div className='font-[500]'> Basic Trees</div>
                <div>55%</div>
                </div>
                <div> <div className='font-[500]'> Custom Short pants</div>
                <div>31%</div>
                </div>
                <div> <div className='font-[500]'> Super Hodies</div>
                <div>14%</div>
                </div>
              </div>
              </div>
        </div>
      </div>
      {/* nft modal conditional rendering */}
      {showModal && (
                <Modal
                  setShowModal={setShowModal}
                  closeShowModal={closeShowModal}
                />
              )}
      <div className='flex w-full gap-x-10'>
        
        <div className='w-1/2 bg-slate-50 rounded-xl h-60 shadow-lg border-gray-200 border p-5 flex flex-col justify-center align-middle '>
          <div className='flex flex-col gap-y-4'>
            <div className='flex justify-center'>
            <button className='rounded-full w-fit bg-gray-200  py-1 px-5 text-[48px] text-gray-700' onClick={toggleShowModal}>
            +
            </button>
            </div>
            <button className='text-gray-400' onClick={toggleShowModal}>Add Profile</button>

          </div>
        </div>
        <div className='w-1/2 bg-slate-50 rounded-xl h-60 shadow-lg border-gray-200 border p-5 flex flex-col justify-center align-middle '>
          <div className='flex flex-col gap-y-4'>
            <div className='flex justify-center'>
            <button className='rounded-full w-fit bg-gray-200  py-1 px-5 text-[48px] text-gray-700' onClick={redirectUser}>
            +
            </button>
            </div>
            <button className='text-gray-400' onClick={redirectUser}>Users Profile</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;