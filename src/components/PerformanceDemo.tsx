'use client'
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PerformanceDemo() {
  const [loadTimes, setLoadTimes] = useState({ optimized: 0, unoptimized: 0 });

  const simulateLoad = (optimized) => {
    const startTime = performance.now();
    setTimeout(() => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      setLoadTimes(prev => ({
        ...prev,
        [optimized ? 'optimized' : 'unoptimized']: loadTime
      }));
    }, optimized ? 100 : 1000); // Simulating different load times
  };

  const chartData = {
    labels: ['Optimized', 'Unoptimized'],
    datasets: [
      {
        label: 'Load Time (ms)',
        data: [loadTimes.optimized, loadTimes.unoptimized],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className="card">
      <h2>Performance Demo</h2>
      <button onClick={() => simulateLoad(true)}>Load Optimized Version</button>
      <button onClick={() => simulateLoad(false)}>Load Unoptimized Version</button>
      <Bar data={chartData} />
    </div>
  );
}