import React from 'react';
import useFetch from '../hooks/useFetch';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

function Performance() {
  const performanceData = useFetch(18, 'performance', false);
  const chartData = performanceData.data.chartData;
  console.log(chartData);
  return (
    <>
      <div>
        {chartData && (
          <RadarChart
            outerRadius={90}
            width={730}
            height={250}
            data={chartData}
          >
            <PolarGrid polarAngles={0} />
            <PolarAngleAxis dataKey="type" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tickCount={1} />
            <Radar
              name="Tryout"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        )}
      </div>
    </>
  );
}

export default Performance;
