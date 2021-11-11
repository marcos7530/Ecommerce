import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useStateValue } from '../../../contexto/store';
import useStyles from '../../../theme/useStyles';

const MenuCliente = (props) => {
    const imagenDefault = "https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000";
    const [ {sesionUsuario}, dispatch ] = useStateValue();

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const salirSesion = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "SALIR_SESION",
            nuevoUsuario: null,
            autenticado: false
        });

        props.history.push("/login");
    }



    return (
        <>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to="/carrito">
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button>
            <div>
                <Button color="inherit" className={classes.buttonIcon}
                onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Avatar alt="Mi Imagen" className={classes.avatarPerfilAppBar}
                            src = {
                               sesionUsuario
                               ? (sesionUsuario.usuario.imagen ? sesionUsuario.usuario.imagen : imagenDefault)
                               : imagenDefault
                            }
                        />
                        { sesionUsuario 
                        ?  (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' '+ sesionUsuario.usuario.apellido : "No sesion")  
                        : "No sesion"}
                        <Icon>keyboard_arrow_down</Icon>
                    </div>
                </Button>
                <Menu
                elevation={2}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>

                            <ListItem button onClick={salirSesion}>
                                <ListItemText>Cerrar Sesion</ListItemText>
                            </ListItem>
                            

                            
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default   withRouter(MenuCliente);