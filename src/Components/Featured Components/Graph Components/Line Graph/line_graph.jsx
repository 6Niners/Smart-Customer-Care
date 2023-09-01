import "./line_graph.css"
import { LineChart, 
         Line, 
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         Legend, 
         ResponsiveContainer } from 'recharts'

const LineGraph = ({ data, xAxis, yAxis }) => {

  return (
  
  <div id="line-graph">
    <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yAxis} stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
  </div>
  )
}


export default LineGraph