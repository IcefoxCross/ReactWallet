import React from 'react'
import { Container, Button, Paper, TableContainer } from "@material-ui/core";
import useStyles from './HeaderButtonsStyles'
import { useHistory } from 'react-router';

export default function HeaderButtonsComponent({text, sendTo}) {
    const classes = useStyles();
    const history = useHistory()

    const handleClick = () => {
        history.push(sendTo);
    }

    return (
        <Container>
            <TableContainer component={Paper} className={classes.TableContainer}>
                <Button
                    variant="text"
                    color="default"
                    className={classes.button}
                    onClick={handleClick}
                >
                    {text}
                </Button>
            </TableContainer>
        </Container>
    );
}
