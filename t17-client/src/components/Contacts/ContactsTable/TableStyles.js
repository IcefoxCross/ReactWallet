import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableTitle: {
    fontWeight: "bolder",
    fontSize: 22
  },
  spacer: {
    flex: "none",
  },
  root: {
    justifyContent: "flexStart",
  },
  columnTitle: {
    fontWeight: "bold",
  }
});

export default useStyles;