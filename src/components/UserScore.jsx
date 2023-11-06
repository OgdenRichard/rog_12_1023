import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function UserScore({ chartData }) {
  return (
    <>
      <div className="square_chart_wrapper score__chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="5%"
            outerRadius="120%"
            data={chartData}
            startAngle={190}
            endAngle={-190}
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
