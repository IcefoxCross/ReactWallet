import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function SidebarItemComponent({IconComponent, name, path}) {
    const history = useHistory();
    const onClick = () => {
        history.push(path);
    };

    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon><IconComponent /></ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
}