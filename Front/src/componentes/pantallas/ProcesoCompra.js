import { Button, CardMedia, Container, Divider, FormControl, FormControlLabel, FormLabel, 
    Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, 
    TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';

const ProcesoCompra = (props) => {
    const [activeStep, setActiveStep] = useState(1);

    const continuarProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
    const retrocederProceso = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const realizarPedido = () => {
        const idCompra = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
        props.history.push("/ordenCompra/"+ idCompra);
    }

    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>              
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Envio</StepLabel>
                </Step>
                
                <Step>
                    <StepLabel>Metodo de Pago</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>
            </Stepper>
        
            { activeStep === 1 ? (
                <Grid md={6} xs={12} className={classes.gridPC}>
                <Typography variant="h6" className={classes.text_title}>
                ENVIO DEL PRODUCTO
                </Typography>
                <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                            label="Direccion"
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true, 
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            label="Ciudad"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Grid>


                       
                         
                        <Grid item xs={12}>
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={continuarProceso}
                            >
                                CONTINUAR
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                </Grid>
            ) : activeStep === 2 ? (
                <Grid md={3} xs={12} className={classes.gridPC}>
                    <Typography variant="h6" className={classes.text_title}>
                        METODO DE PAGO
                    </Typography>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <FormLabel>
                                        Seleccione Metodo
                                    </FormLabel>
                                    <RadioGroup>
                                        <FormControlLabel 
                                        value="Tarjeta" 
                                        control={<Radio color="primary"/>}
                                        label="Tarjeta"/> 
                                    </RadioGroup>
                                    <RadioGroup>
                                        <FormControlLabel 
                                        value="Efectivo" 
                                        control={<Radio color="primary"/>}
                                        label="Efectivo"/> 
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonAnterior}
                            onClick={retrocederProceso}
                            >
                                ANTERIOR
                            </Button>
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={continuarProceso}
                            >
                                CONTINUAR
                            </Button>
                            </Grid>
                        </Grid>
                </Grid>
            ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item md={8} xs={12} className={classes.gridLR}>
                        <Typography variant="h6" className={classes.text_title}>
                            ENVIO
                        </Typography>
                        <Typography >
                            Direccion: R9 km 1269 Mancopa, leales
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            METODO DE PAGO
                        </Typography>
                        <Typography>
                            Metodo: Tarjeta
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            PRODUCTOS
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                        <CardMedia 
                                        className={classes.imgProductoPC}
                                        image="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                                        title="Imagen en Carrito"
                                        />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                            Butaca matera c/apoyabrazo
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                2 x $13000 = $26000
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={retrocederProceso}
                        >
                            ANTERIOR
                        </Button>
                    </Grid>

                    <Grid item md={4} xs={12} >
                        <TableContainer component={Paper} square>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography variant="h6" className={classes.text_title}>
                                                RESUMEN DEL PEDIDO
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>
                                                Productos
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                $26000
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>
                                                Envio
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                $1000
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography className={classes.text_title}>
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle}>
                                                $27000
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={realizarPedido}>
                                                REALIZAR PEDIDO
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : null}
            
        </Container>
    );
};

export default ProcesoCompra;