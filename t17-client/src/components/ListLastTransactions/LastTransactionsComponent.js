import React, { useEffect, useState } from 'react'
import { Container } from "@material-ui/core";
import { httpGetAll } from "../../services/httpServices";
import { connect } from "react-redux";
import TableComponent from '../Table/TableComponent';

const LastTransactionsComponent = ({user}) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        httpGetAll(`transaction/byUser/${user.user.id}`)
            .then(result => {
                let data = result.data.map(t => {
                    if (t.type === "payment") {
                        return {...t, amount: t.amount * -1};
                    } else {
                        return t;
                    }
                });
                setTransactions(data);
            });
    }, [user]);

    return (
        <Container>
            <TableComponent data={transactions} title="Ultimas Transacciones" />
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(LastTransactionsComponent);