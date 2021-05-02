import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SidebarItemComponent from './SidebarItemComponent';
import { ConfirmAlertComponent } from '../Alerts/AlertsComponent';
import { MESSAGE_LOGOUT_CONFIRM } from '../../constants/constants';
import updateUser from "../../store/user/action";
import updateIsAuth from "../../store/isAuth/action";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    }
}));

const userOptions = [
    { name: "Ingresos", component: AttachMoneyIcon, path: "/listTopupMoney" },
    { name: "Egresos", component: MoneyOffIcon, path: "/listCashOut" },
    { name: "Enviar Dinero", component: MonetizationOnIcon, path: "/construction" },
    { name: "Plazos Fijos", component: AccountBalanceIcon, path: "/ftd" },
    { name: "Contactos", component: ContactsIcon, path: "/construction" },
    { name: "Perfil", component: AccountBoxIcon, path: "/profile" },
    { name: "Billeteras", component: AccountBalanceWalletIcon, path: "/billeteras" },
];

const SidebarComponent = (props) => {
    const classes = useStyles();

    const onLogout = () => {
        ConfirmAlertComponent(MESSAGE_LOGOUT_CONFIRM)
            .then((result) => {
                if (result.isConfirmed) {
                    props.updateIsAuth(false);
                    props.updateUser([]);
                    window.localStorage.removeItem('token');
                }
            });
    };

    return (
        <Drawer
            className={classes.drawer} variant="permanent" anchor="left"
            classes={{ paper: classes.drawerPaper }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <SidebarItemComponent IconComponent={HomeIcon} name="Home" path={"/home"} />
                </List>
                {/* Si esta logeado, mostrar Divider y List */}
                {props.isAuth.isAuth && (
                    <>
                        <Divider />
                        <List>
                            {userOptions.map(option => (
                                <SidebarItemComponent key={option.name}
                                    IconComponent={option.component} name={option.name} path={option.path} />
                            ))}
                        </List>
                    </>
                )}
                <Divider />
                <List>
                    {/* Si esta logeado, mostrar Logout, sino Login */}
                    {props.isAuth.isAuth ? (
                        <>
                            <ListItem button onClick={onLogout}>
                                <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
                                <ListItemText primary={"Logout"} />
                            </ListItem>
                        </>
                    ) : (
                        <SidebarItemComponent IconComponent={VpnKeyIcon} name="Login" path={"/login"} />
                    )}
                </List>
            </div>
        </Drawer>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        isAuth: state.isAuth,
    }
}

export default connect(mapStateToProps, { updateUser, updateIsAuth })(SidebarComponent);