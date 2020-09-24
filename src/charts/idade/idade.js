import React, { PureComponent } from 'react';
import { MDBCard, MDBCol, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: '17-18', uv: 21, pv: 2400, fill: '#8884d8',
  },
  {
    name: '19-21', uv: 15, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '22-25', uv: 14, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '26-30', uv: 8, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '31-39', uv: 7, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '40+', uv: 4, pv: 4800, fill: '#d0ed57',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};


export default class Idade extends PureComponent {

  render() {
    return (
        <MDBCol>
                <MDBCard style={{ width: "28rem" }}>
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
      <MDBCardBody>
                <MDBCardTitle>Idade</MDBCardTitle>
            </MDBCardBody>
      </MDBCard>
            </MDBCol>
    );
  }
}
