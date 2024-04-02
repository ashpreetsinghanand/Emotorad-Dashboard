// components/DoughnutChart.js
import React from 'react';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend)

const DoughnutChart = ({ data }) => {
    const options = {
      plugins: {
        legend: {
          display: false,
         
        },
      },
      cutout: '80%', // Adjust the size of the hole in the center to make it look like a ring
    };
  
  return    <div style={{ height: '150px', width: '150px' }}> {/* Set height and width here */}
  <Doughnut data={data} options={options} />
</div>
;
};

export default DoughnutChart;
