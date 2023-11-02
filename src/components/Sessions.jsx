import React from 'react';
import useFetch from '../hooks/useFetch';
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

function Sessions({ userId }) {
  const sessionsData = useFetch(userId, 'average-sessions', false);
  const chartData = sessionsData.data.chartData;

  return (
    <>
      {chartData && (
        <ResponsiveContainer width="50%" height="100%">
          <LineChart
            width={300}
            height={250}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="weekday" axisLine={false} tickLine={false} />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 100 }} />
            <Line
              dataKey="length"
              type="bumpX"
              dot={false}
              strokeWidth={2}
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default Sessions;
