import React from 'react';
import useFetch from '../hooks/useFetch';
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

function Sessions({ userId }) {
  const sessionsData = useFetch(userId, 'average-sessions', false);
  const chartData = sessionsData.data.chartData;

  return (
    <>
      <div className="square_chart_wrapper sessions_chart">
        {chartData && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={100}
              height={100}
              data={chartData}
              margin={{ top: 0, right: 0, left: -60, bottom: 0 }}
            >
              <YAxis
                orientation="left"
                domain={['dataMin', 'dataMax +20']}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <XAxis
                dataKey="weekday"
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
                tick={{
                  dx: 0,
                  fontSize: 12,
                  fill: 'white',
                }}
                tickMargin={5}
                padding={{ left: 0, right: 0 }}
              />
              <Tooltip cursor={{ stroke: 'red', strokeWidth: 150 }} />
              <Line
                dataKey="length"
                type="bumpX"
                dot={false}
                strokeWidth={2}
                stroke="#FFFFFF"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}

export default Sessions;
