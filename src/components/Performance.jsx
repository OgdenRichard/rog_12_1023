import React from 'react';
import useFetch from '../hooks/useFetch';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

function Performance({ userId }) {
  const performanceData = useFetch(userId, 'performance', false);
  const chartData = performanceData.data.chartData;
  return (
    <>
      {chartData && (
        <ResponsiveContainer width="50%" height="100%">
          <RadarChart
            outerRadius={100}
            width={730}
            height={250}
            data={chartData}
          >
            <PolarGrid
              polarRadius={[20, 40, 60, 80, 100]}
              radialLines={false}
            />
            <PolarAngleAxis dataKey="type" tick={true} />
            <Radar
              name="Tryout"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default Performance;
