'use client';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from 'recharts';

const CustomAreaChart = ({ data, color = '#F6B85C' }) => {
  const gradientId = 'custom-gradient';

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={1} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Y Axis with LVL labels */}
        <YAxis
          ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          domain={[1, 10]}
          tickFormatter={(value) => `LVL ${value}`}
          tick={{
            fontFamily: 'Urbanist',
            fontWeight: 800,
            fontSize: 12,
            fill: '#C9C7C5',
            textTransform: 'uppercase'
          }}
          axisLine={false}
        />

        {/* Empty X Axis */}
        <XAxis dataKey="name" tick={false} axisLine={false} />

        {/* Dashed horizontal lines */}
        <CartesianGrid
          stroke="#C9C7C5"
          strokeDasharray="4 4"
          horizontal={true}
          vertical={false}
        />

        {/* Tooltip */}
        <Tooltip />

        {/* Area line and fill */}
        <Area
          type="stepAfter"
          dataKey="uv"
          stroke={color}
          strokeWidth={4.36}
          fill={`url(#${gradientId})`}
          strokeLinejoin="round"  // This rounds corner joins
          strokeLinecap="round"   // This rounds line ends
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
