import React from 'react';
import useFetch from '../../hooks/useFetch';
import { UserContext, DataContext } from '../../App';
import { useContext } from 'react';
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

function Sessions() {
  const userId = useContext(UserContext);
  const useMock = useContext(DataContext);
  const sessionsData = useFetch(userId, 'average-sessions', useMock);
  const chartData = sessionsData.data.chartData;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="sessions__tooltip">
          <div>
            {payload.map((pld, index) => (
              <div
                key={index}
                style={{ display: 'block', fontSize: 12, padding: 10 }}
              >
                <div style={{ color: 'black' }}>{pld.value} min</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

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
              <YAxis hide={true} dataKey="time" domain={[0, 'dataMax + 30']} />
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
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: '#d80303', strokeWidth: 150 }}
                viewBox={{ x: 0, y: 0, width: 400, height: 400 }}
              />
              <Line
                dataKey="time"
                type="bumpX"
                dot={false}
                activeDot={{
                  stroke: '#f2f2f294',
                  strokeWidth: 10,
                  r: 5,
                  fill: 'white',
                }}
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
