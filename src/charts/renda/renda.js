import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { MDBCard, MDBCol, MDBCardBody, MDBCardTitle } from 'mdbreact';

const data = [
  { name: 'Menos de 1 salário mínimos', value: 3 },
  { name: 'Até 2 salários mínimos', value: 17 },
  { name: 'Entre 2 e 4 salários mínimos', value: 26 },
  { name: 'Entre 4 e 10 salários mínimos', value: 18 },
  { name: 'Entre 10 e 20 salários mínimos', value: 1 },
  { name: 'Acima de 20 salários mínimos', value: 3 },
  { name: 'Não sei/Prefiro não responder', value: 4 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, name,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.value}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Renda extends PureComponent {
  
  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
        <MDBCol>
                <MDBCard style={{ width: "28rem" }}>
      <PieChart width={800} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={230}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
      <MDBCardBody>
                <MDBCardTitle>Qual sua renda familiar</MDBCardTitle>
            </MDBCardBody>
                </MDBCard>
            </MDBCol>
    );
  }
}