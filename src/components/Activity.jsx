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
  Text,
  ResponsiveContainer,
} from 'recharts';

function Activity({ userId }) {
  const activityData = useFetch(userId, 'activity', false);
  const chartData = activityData.data.chartData;
  return (
    <>
      {chartData && (
        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            width={730}
            height={250}
            barGap={10}
            margin={(5, 0, 5, 0)}
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="key"
              tickLine={false}
              padding={{ left: -37, right: -37 }}
            />
            <YAxis orientation="right" axisLine={false} tickLine={false} />
            <Tooltip />
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
              name="Poids (kg)"
              dataKey="kg"
              barSize={10}
              radius={[5, 5, 0, 0]}
              fill="#282D30"
            />
            <Bar
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
