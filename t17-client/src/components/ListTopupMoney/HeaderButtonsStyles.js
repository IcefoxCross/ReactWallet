import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    TableContainer:{
        display: "flex",
        flexDirection: "row-reverse"
    }
}));

export default useStyles;