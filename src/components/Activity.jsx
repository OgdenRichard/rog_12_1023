import React from 'react';
import useFetch from '../hooks/useFetch';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';

function Activity({ userId }) {
  const activityData = useFetch(userId, 'activity', false);
  const chartData = activityData.data.chartData;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity-tooltip">
          <div>
            {payload.map((pld, index) => (
              <div
                key={index}
                style={{ display: 'block', fontSize: 14, padding: 10 }}
              >
                <div style={{ color: 'white' }}>
                  {pld.value}
                  {pld.dataKey === 'kg' ? 'kg' : 'Kcal'}
                </div>
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
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={100}
            barGap={10}
            margin={{ top: 20, right: 5, bottom: 5, left: 5 }}
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="key" tickLine={false} />
            <YAxis
              yAxisId="right-axis"
              orientation="right"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left-axis"
              orientation="left"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#C4C4C4' }} />
            <Legend
              align="right"
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{ top: 0, right: 25 }}
              formatter={(value, entry, index) => (
                <span className="activity_chart__legend">{value}</span>
              )}
            />
            <Bar
              yAxisId="right-axis"
              name="Poids (kg)"
              dataKey="kg"
              barSize={10}
              radius={[5, 5, 0, 0]}
              fill="#282D30"
            />
            <Bar
              yAxisId="left-axis"
              name="Calories brûlées (kCal)"
              dataKey="cal"
              barSize={10}
              radius={[5, 5, 0, 0]}
              fill="#E60000"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default Activity;
