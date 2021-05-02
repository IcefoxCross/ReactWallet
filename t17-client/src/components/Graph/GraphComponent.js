import React from 'react';
import {
    BarChart, Bar,
    CartesianGrid, XAxis, YAxis,
    Tooltip
} from 'recharts';
import {
    Container,
    Paper,
} from "@material-ui/core";

const GraphComponent = () => {
    const data = [
        {name: 'ARS', Ingresos: 4000, Egresos: 2400},
        {name: 'USD', Ingresos: -3000, Egresos: 1398}
    ];

    return (
        <Container maxWidth="sm">
        <Paper>
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
            <Bar dataKey="Ingresos" fill="#82ca9d" />
			<Bar dataKey="Egresos" fill="#FF3232" />
        </BarChart>
        </Paper>
        </Container>
    )
};

export default GraphComponent;