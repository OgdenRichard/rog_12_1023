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
        <h3 className="sessions__title">
          Durée moyenne des<br></br> sessions
        </h3>
        {chartData && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={100}
              height={100}
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <YAxis
                hide={true}
                dataKey="length"
                domain={['dataMin', 'dataMax +20']}
              />
              <XAxis
                dataKey="weekday"
                axisLine={false}
                tickLine={false}
                interval={0}
                tick={{
                  dx: 0,
                  fontSize: 12,
                  fill: '#ff8181',
                }}
                tickMargin={5}
                padding={{ left: 10, right: 10 }}
              />
              <Tooltip cursor={{ stroke: 'red', strokeWidth: 150 }} />
              <Line
                dataKey="length"
                type="bumpX"
                dot={false}
                strokeWidth={2}
                stroke="#ff8181"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}

export default Sessions;
