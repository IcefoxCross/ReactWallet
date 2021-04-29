import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

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