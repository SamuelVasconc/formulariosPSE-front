import React, { PureComponent } from 'react';
import { MDBCard, MDBCol, MDBCardBody, MDBCardTitle } from 'mdbreact';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const data = [
  { name: 'Sim', value: 59 },
  { name: 'Não', value: 12 },
];

const COLORS = ['#00C49F', '#FF8042'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Trabalhou extends PureComponent {
  
  render() {
    return (
      <MDBCol>
                <MDBCard style={{ width: "28rem" }}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      <MDBCardBody>
                <MDBCardTitle>Ja Trabalhou</MDBCardTitle>
            </MDBCardBody>
      </MDBCard>
            </MDBCol>
    );
  }
}