import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import BarChart from './BarChart';
import DoughnutChart from './DoughtChart';

const Dashboard = () => {
  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  // Sample data for bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex flex-col mx-16'>
      <div className='flex gap-x-5 w-full'>
        <div className='w-1/4'>
          <div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Revenues</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$2,129,430</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+2.15%</div>
            </div>
          </div>
        </div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Transactions</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>$1,520</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.75%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+1.4%</div>
            </div>
          </div></div>
        <div className='w-1/4'><div className='flex flex-col bg-slate-50 rounded-xl shadow-lg border-gray-200 border px-5 py-3 '>
            <div>🟢</div>
            <div className='font-[500] text-md'>Total Likes</div>
            <div className='flex justify-between'>
              <div className='text-xl font-[500]'>9721</div>
              <div className='text-green-500 bg-green-100 p-2 rounded-3xl text-sm'>+4.2%</div>
            </div>
          </div></div>
      </div>
      <div>  <BarChart data={barData} />;</div>
      <div className='flex w-full gap-x-10'>
        <div className='w-1/2'>
              <div>
              <DoughnutChart data={doughnutData} />;
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </div>
        <div className='w-1/2'>
            <button>Add User</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;