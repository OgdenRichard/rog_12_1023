import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function UserScore({ chartData }) {
  return (
    <>
      <div className="square_chart_wrapper score__chart">
        {chartData && (
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
              <text
                x={55}
                y={50}
                className="score__title"
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="18">Score</tspan>
              </text>
              <text
                x={170}
                y={150}
                className="score__title"
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="32">{chartData[1].score * 100}%</tspan>
              </text>
              <text
                x={162}
                y={190}
                fill="#74798C"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="16">de votre objectif</tspan>
              </text>
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
        )}
      </div>
    </>
  );
}

export default UserScore;
