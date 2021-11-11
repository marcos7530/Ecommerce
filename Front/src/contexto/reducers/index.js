import openSnackbarReducer from "./openSnackbarReducer"
import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer"
import sesionUsuarioReducer from "./sesionUsuarioReducer"

export const mainReducer = (  {sesionUsuario, sesionCarritoCompra, openSnackbar}, action  ) => {
    return {
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        sesionCarritoCompra: sesionCarritoCompraReducer(sesionCarritoCompra, action),
        openSnackbar: openSnackbarReducer(openSnackbar, action)
    }
}