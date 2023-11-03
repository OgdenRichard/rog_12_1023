import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function UserScore({ chartData }) {
  return (
    <>
      <div className="square_chart_wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="0%"
            outerRadius="100%"
            data={chartData}
            startAngle={200}
            endAngle={-360}
            barSize={12}
          >
            <RadialBar
              dataKey="score"
              minAngle={15}
              label={false}
              background={false}
              clockWise={true}
              cornerRadius={5}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default UserScore;
