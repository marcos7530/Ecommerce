import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, {useEffect, useState} from 'react';
import { addItem } from '../../actions/CarritoCompraAction';
import { getProductos } from '../../actions/ProductoAction';
import { productoArray } from '../../data/dataPrueba';
import useStyles from '../../theme/useStyles';
import {useStateValue} from '../../contexto/store';


const Productos = (props) => {

    const [ {sesionCarritoCompra}, dispatch ] = useStateValue();

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 4,
        search: ''
    });


    const [paginadorProductos, setPaginadorProductos] = useState({
        count : 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    
    const handleChange = (event, value) => {

        setRequestProductos(  (anterior) => ({
           ...anterior,
           pageIndex : value
        }));
    }



    useEffect(() =>{

        const getListaProductos = async () =>{
            const response = await getProductos(requestProductos);
            console.log(response);
            setPaginadorProductos(response.data);
        }

       getListaProductos();
    }, [requestProductos]);


    const verProducto = async (item) => {
       
        //await addItem(sesionCarritoCompra, item, dispatch);
        
        props.history.push("/detalleProducto/" + item.id);
    }

   
    const miArray = productoArray; 
    const classes = useStyles();

    if(!paginadorProductos.data){
        return null;
    }


    return (
        
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>Productos</Typography>
            <Grid container spacing={4}>
                {  paginadorProductos.data.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia
                        className={classes.media}
                        image= {data.imagen ? data.imagen : "https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"} 
                        title="mi producto"
                        >
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography  className={classes.text_card}>
                                {data.nombre}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data)}
                            >
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                )) }
            </Grid>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange} />
        </Container>
    );
};

export default Productos;