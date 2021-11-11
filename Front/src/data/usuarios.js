

export const usuariosArray = [];
let key = 0;

export const nuevoUsuario = (usuario) => {
    let dataUsuario = usuario;
    key++;
    dataUsuario.key = key;
    usuariosArray.push(dataUsuario);
    return usuariosArray;
}

export const accesoUsuario = (usuario) => {
    let valida = false;
    let dataUsuario = {};
    usuariosArray.forEach(usuarioMap => {
        if(usuario.email === usuarioMap.email && usuario.password === usuarioMap.password){
            valida = true;
            dataUsuario = usuarioMap
        }
    })
    
    
    return {status : valida, miUsuario : dataUsuario};
}


