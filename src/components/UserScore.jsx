import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function UserScore({ chartData }) {
  console.log(chartData);
  return (
    <>
      <div className="square_chart_wrapper">
        {chartData && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={250} height={250}>
              <Pie
                data={chartData}
                dataKey="score"
                cx="50%"
                cy="50%"
                startAngle={220}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}

export default UserScore;
