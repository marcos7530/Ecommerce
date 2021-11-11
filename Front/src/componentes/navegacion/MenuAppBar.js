import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';
import MenuPublico from './desktop/MenuPublico';
import MenuMovilPublico from './movil/MenuMovilPublico';

const MenuAppBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const openToggle = () => {
        setOpen(true);
    }

    const closeToggle = () => {
        setOpen(false);
    }
    
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                <Toolbar >
                    <div className={classes.sectionMobile}>
                    <IconButton color="inherit" onClick={openToggle}>
                        <Icon fontSize="large">menu</Icon>
                    </IconButton>
                    </div>
                    <Drawer 
                    open={open}
                    onClose={closeToggle}
                    >   {/* eliminar el onClick de este div */}
                        <div className={classes.list}>
                            <List>
                                {/* <ListItem button onClick={closeToggle} className={classes.listItem}>
                                    <Link className={classes.linkAppBarMobile} to="/login">
                                        <ListItemIcon className={classes.listItemIcon}>
                                            <Icon>person</Icon>
                                        </ListItemIcon>
                                        <ListItemText>Login</ListItemText>
                                    </Link>
                                </ListItem> */}
                                {/* agregar este MenuMovilPublico */}
                                {/* tendra una propiedad llamada clickHandler que ejecutara
                                mi metodo closeToggle */}
                                {/* <MenuMovilPublico clickHandler={closeToggle}/> */}
                                <MenuMovil clickHandler={closeToggle}/>
                            </List>
                        </div>
                    </Drawer>

                    <div className={classes.grow}>
                        <Link className={classes.linkAppBarLogo} to="/">
                            <Icon fontSize="large" className={classes.mr}>store</Icon>
                            <Typography variant="h5" >DECO-HOGAR</Typography>
                        </Link>
                    </div>

                    <div className={classes.sectionDesktop}>
                        {/* <MenuPublico /> */}
                        <MenuCliente/>
                        <MenuAdmin />
                    </div>
                </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;