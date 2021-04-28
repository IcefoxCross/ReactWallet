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

export default function ListCashOutComponent() {
    const classes = useStyles();
    const [cashOutList, setCashOutList] = useState([])
    useEffect(() => {
        //Usar endpoint para traer egresos de dinero
        setCashOutList(cashOutList);
    }, []);
    return (
        <Container maxWidth="sm">
            <TableComponent list={cashOutList}></TableComponent>
        </Container>
    )
}
