import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import SidebarItemComponent from './SidebarItemComponent';

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
    {name: "Ingresos", component: AttachMoneyIcon, path: "/"},
    {name: "Egresos", component: MoneyOffIcon, path: "/"},
    {name: "Enviar Dinero", component: MonetizationOnIcon, path: "/"},
    {name: "Plazos Fijos", component: AccountBalanceIcon, path: "/"},
    {name: "Contactos", component: ContactsIcon, path: "/"},
    {name: "Perfil", component: AccountBoxIcon, path: "/"},
    {name: "Billeteras", component: AccountBalanceWalletIcon, path: "/"},
];

export default function SidebarComponent() {
    const classes = useStyles();

    return (
        <Drawer
          className={classes.drawer} variant="permanent" anchor="left"
          classes={{paper: classes.drawerPaper}}>
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <SidebarItemComponent IconComponent={HomeIcon} name="Home" path={"/home"} />
                </List>
                <Divider />
                <List>
                    {userOptions.map(option => (
                        <SidebarItemComponent key={option.name}
                            IconComponent={option.component} name={option.name} path={option.path} />
                    ))}
                </List>
                <Divider />
                <List>
                <SidebarItemComponent IconComponent={VpnKeyIcon} name="Login" path={"/login"} />
                </List>
            </div>
        </Drawer>
    )
}