import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

/* modificar el componente OrdenCompra en la seccion de los botones */

const ListaPedidos = (props) => {
    const classes = useStyles();

    /* creo el metodo verDetalle */
    const verDetalle = () => {
        /* en una constante id pasar un id autogenerado */
        const id = "476751c9-3891-4a02-b8da-ac4e69b16df8"
        /* y navego hacia la orden de compra y le paso el parametro id */
        props.history.push("/ordenCompra/" + id);
    }
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>476751c9-3891-4a02-b8da-ac4e69b16df8</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>2020-12-22</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2020-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>{/*  */}
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>6dae8950-0c59-409f-980a-2966a0be597e</TableCell>
                            <TableCell>Ricardo Mendez</TableCell>
                            <TableCell>2020-12-20</TableCell>
                            <TableCell>$150.40</TableCell>
                            <TableCell>2020-12-23</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={verDetalle}>{/*  */}
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;