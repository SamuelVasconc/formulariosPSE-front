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


export default class Trabalhou extends PureComponent {

  render() {
    return (
        <MDBCol>
                <MDBCard style={{ width: "28rem" }}>
      <PieChart width={800} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={230}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      <MDBCardBody>
                <MDBCardTitle>Já Trabalhou</MDBCardTitle>
            </MDBCardBody>
      </MDBCard>
            </MDBCol>
    );
  }
}