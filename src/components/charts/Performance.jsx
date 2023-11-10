import React from 'react';
import useFetch from '../../hooks/useFetch';
import FetchError from '../atoms/FetchError';
import { ApiContext } from '../../App';
import { useContext } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

function Performance() {
  const api = useContext(ApiContext);
  const performanceData = useFetch(api.userId, 'performance', api.useMock);
  const chartData = performanceData.data.chartData;
  return (
    <>
      <div className="square_chart_wrapper performance_chart">
        {chartData ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              outerRadius={120}
              width={100}
              height={100}
              data={chartData}
            >
              <PolarGrid
                polarRadius={[40, 60, 80, 100, 120]}
                radialLines={false}
              />
              <PolarAngleAxis
                dataKey="type"
                tick={{ fontSize: 12, fill: 'white' }}
              />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#E60000"
                fill="#E60000"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          performanceData.error && <FetchError />
        )}
      </div>
    </>
  );
}

export default Performance;
