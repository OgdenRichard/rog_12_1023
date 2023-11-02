import React from 'react';
import useFetch from '../hooks/useFetch';
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

function Sessions({ userId }) {
  const sessionsData = useFetch(userId, 'average-sessions', false);
  const chartData = sessionsData.data.chartData;

  return (
    <>
      <div className="square_chart_wrapper sessions_chart">
        {chartData && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={300}
              height={250}
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="weekday"
                axisLine={false}
                tickLine={false}
                minTickGap={2}
                interval="preserveStartEnd"
                tick={{
                  fontSize: 12,
                  fill: 'white',
                }}
              />
              <Tooltip cursor={{ stroke: 'red', strokeWidth: 100 }} />
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
