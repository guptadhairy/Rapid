import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const VerticalStackedBarChart = () => {
  useEffect(() => {
    // Data for the vertical stacked bar chart with 3 categories
    const data = {
      labels: [
        '20', '', '25', '',
        '30', '', '35', '', '40', '', '60',
        '', '65'
      ],
      datasets: [
        {
          label: 'Employer: K 73,500',
          backgroundColor: Array(13).fill('rgba(17, 0, 158, 1)'),
          data: [10, 10, 10, 13, 14, 17, 20, 25, 28, 55, 60, 65, 70],
        },
        {
          label: 'Employee: K 52,500',
          backgroundColor: Array(13).fill('rgba(73, 66, 228, 1)'),
          data: [10, 12, 14, 16, 18, 20, 23, 25, 28, 30, 35, 40, 45],
        },
        {
          label: 'Total Interest: K 244,313',
          backgroundColor: Array(13).fill('rgba(76, 185, 231, 1)'),
          data: [10, 15, 18, 20, 23, 25, 27, 30, 33, 15, 20, 25, 30],
        },
      ],
    };

    // Options for the vertical stacked bar chart
    const options = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          
          ticks: {
            callback: (value) => {
              return [0, 100, 200, 300].includes(value) ? value : ''; // Show only specific values
            },
          },
        },
      },
    };

    // Get the chart canvas element
    const ctx = document.getElementById('verticalStackedBarChart').getContext('2d');

    // Create the vertical stacked bar chart
    const verticalStackedBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      verticalStackedBarChart.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas id="verticalStackedBarChart" className='chart'></canvas>
    </div>
  );
};

export default VerticalStackedBarChart;