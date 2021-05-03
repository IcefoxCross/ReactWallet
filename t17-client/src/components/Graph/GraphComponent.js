import React, { useEffect, useState } from 'react';
import {
    LineChart, Line, Legend,
    CartesianGrid, XAxis, YAxis,
    Tooltip, ResponsiveContainer
} from 'recharts';
import {
    Container,
    Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { httpGetAll } from "../../services/httpServices";
import { processTransactions } from './GraphHelper';

const GraphComponent = ({user}) => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        httpGetAll(`transaction/byUser/${user.user.id}`)
            .then(result => {
                const transactions = result.data;
                let data = processTransactions(transactions);
                setGraphData(data);
            });
    }, [user]);

    return (
        <Container maxWidth="auto">
            <Paper>
                <ResponsiveContainer width='100%' height={350}>
                <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="IngresosARS" strokeWidth stroke="#82ca9d" />
                    <Line type="monotone" dataKey="EgresosARS" stroke="#FF3250" />
                    <Line type="monotone" dataKey="IngresosUSD" stroke="#82ca0a" />
                    <Line type="monotone" dataKey="EgresosUSD" stroke="#FF3210" />
                </LineChart>
                </ResponsiveContainer>
            </Paper>
        </Container>
    )
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(GraphComponent);