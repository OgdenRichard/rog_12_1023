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
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <text
                x={100}
                y={50}
                className="score__title"
                fill="#ff8181"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="18">Durée moyenne des</tspan>
              </text>
              <text
                x={53}
                y={75}
                className="score__title"
                fill="#ff8181"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="18">sessions</tspan>
              </text>
              <YAxis
                hide={true}
                dataKey="length"
                domain={['dataMin', 'dataMax +20']}
              />
              <XAxis
                className="fuck"
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
                padding={{ left: 10, right: 10 }}
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
