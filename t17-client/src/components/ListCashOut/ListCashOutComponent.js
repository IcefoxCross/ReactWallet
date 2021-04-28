import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
    TableFooter,
    TablePagination,
} from "@material-ui/core";
import useStyles from "./ListCashOutStyles";

const userId = 1
const accountId = 1;

const dataCashOutList = [
    {
        id: 1,
        amount: "1200",
        concept:"Egreso numero 1",
        type: "payment",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
    {
        id: 2,
        amount: "100",
        concept: "Egreso numero 2",
        type: "payment",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
    {
        id: 3,
        amount: "1000",
        concept: "Egreso numero 3",
        type: "payment",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
];

export default function ListCashOutComponent() {
    const classes = useStyles();
    const [cashOutList, setCashOutList] = useState([])
    useEffect(() => {
        // const fetchAPI = async () => {
        //     const dataCashOutList = await httpGetOne("cashOut",userId)
        //     setTopupMoneyList(dataCashOutList.data);
        // }
        // fetchAPI();
        setCashOutList(dataCashOutList);
    }, []);
    return (
        <Container maxWidth="sm">
            <TableComponent data={cashOutList} title="Egresos"></TableComponent>
        </Container>
    )
}
