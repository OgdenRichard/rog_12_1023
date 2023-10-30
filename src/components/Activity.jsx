import React from 'react';
import useFetch from '../hooks/useFetch';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

function Activity() {
  const activityData = useFetch(18, 'activity', false);
  const chartData = activityData.data.chartData;
  console.log(chartData);
  return (
    <>
      <div>
        {chartData && (
          <BarChart width={730} height={250} barGap={10} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="key" />
            <YAxis orientation="right" />
            <Tooltip />
            <Bar
              dataKey="kg"
              barSize={10}
              radius={[5, 5, 0, 0]}
              fill="#282D30"
            />
            <Bar
              dataKey="cal"
              barSize={10}
              radius={[5, 5, 0, 0]}
              fill="#E60000"
            />
          </BarChart>
        )}
      </div>
    </>
  );
}

export default Activity;
