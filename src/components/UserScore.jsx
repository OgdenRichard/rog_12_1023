import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function UserScore({ chartData }) {
  console.log(chartData);
  return (
    <>
      <div className="square_chart_wrapper">
        {chartData && (
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
                minAngle={5}
                label={false}
                background={false}
                clockWise={true}
                cornerRadius={5}
              />

              {/*  <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip /> */}
            </RadialBarChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
}

export default UserScore;
