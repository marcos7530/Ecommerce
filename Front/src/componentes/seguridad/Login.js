import React, { useState } from "react"; //escribir rsc para crear la estructura de un componente hooks
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";
import { accesoUsuario } from "../../data/usuarios";
import { loginUsuario } from "../../actions/UsuarioAction";
import { useStateValue } from "../../contexto/store";

const clearUsuario = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginEventoUsuario = () => {
    loginUsuario(usuario, dispatch).then((response) => {
      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token);/////////
        props.history.push("/");
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            mensaje: "El password o el email son incorrectos",
          },
        });
      }
    });
  };

  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justify="center">
        <Grid item lg={5} md={6}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <Icon className={classes.icon}>person</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Ingrese su Usuario
            </Typography>
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.gridmb}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} className={classes.gridmb}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={usuario.password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} className={classes.gridmb}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    type="submit"
                    onClick={loginEventoUsuario}
                  >
                    Ingresar
                  </Button>
                </Grid>
              </Grid>

              {/* <Link 
                    
                    variant="body1"
                    className={classes.link}>
                    ¿Olvidaste tu cuenta?, Ingresa Aqui
                    </Link> */}

              <Link to="/registrar" className={classes.link}>
                ¿No tienes cuenta?, Registrate
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
