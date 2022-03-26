import "./chart.css"
import "../FeaturedInfo/featuredInfo.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";



const Chart = () => {

    let data = [

        {
            name: "Jan",
            "Solved Customer Issues": 4000
        },
        {
            name: "Feb",
            "Solved Customer Issues": 3000
        },
        {
            name: "Mar",
            "Solved Customer Issues": 5000
        },
        {
            name: "Apr",
            "Solved Customer Issues": 4000
        },
        {
            name: "May",
            "Solved Customer Issues": 3000
        },
        {
            name: "June",
            "Solved Customer Issues": 2000
        },
        {
            name: "July",
            "Solved Customer Issues": 4000
        },
        {
            name: "Aug",
            "Solved Customer Issues": 3000
        },
        {
            name: "Sep",
            "Solved Customer Issues": 4000
        },
        {
            name: "Oct",
            "Solved Customer Issues": 1000
        },
        {
            name: "Nov",
            "Solved Customer Issues": 4000
        },
        {
            name: "Dec",
            "Solved Customer Issues": 3000
        },


    ]


    return (
        <div id="chart-showcase" className="featured-item">
            <h3 id="chart-title">Analytics</h3>

            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Solved Customer Issues" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default Chart