import React from 'react';
import useFetch from '../hooks/useFetch';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from 'recharts';

function Sessions() {
  const sessionsData = useFetch(18, 'average-sessions', false);
  const chartData = sessionsData.data.chartData;
  console.log(chartData);

  return (
    <>
      <div>
        <LineChart
          width={300}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="weekday" axisLine={false} tickLine={false} />
          {/* <YAxis /> */}
          <Tooltip />
          <Line
            dataKey="length"
            type="monotone"
            dot={false}
            strokeWidth={2}
            stroke="#8884d8"
          />
        </LineChart>
      </div>
    </>
  );
}

export default Sessions;
