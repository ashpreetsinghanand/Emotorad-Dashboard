import React from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

const BarChart = ({data}) => {
  const options = {
    plugins: {
      legend: {
        display: false,
       
      },
    },

    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0)', // Set grid color to transparent
          borderColor: 'rgba(0, 0, 0, 0)', // Set border color to transparent
          drawTicks: false, // Disable drawing ticks
          // offset: true, 
         
        },
        categorySpacing:40,
        ticks: {
          // Set padding between each label (week)
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    indexAxis: 'x', // Set index axis to 'x' for horizontal bar chart
    
    barCategoryGap: '30%'
  };

  return (<div className="chart-container" style={{ }}>

   <Bar data={data} options={options} />
  </div>
   );
};

export default BarChart;
