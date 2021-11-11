import { createMuiTheme, makeStyles } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
    card : {
        padding: 30
    },
    form : {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link : {
        display: 'block',
        marginTop: 8,
        fontSize: "1.1rem",
        fontFamily: "Roboto",
        lineHeight: 1.5,
        color: theme.palette.primary.main,
        textDecoration: "none"
    }, 
    avatar : {
        backgroundColor: '#0f80aa',  //0f80aa
        width: 80,
        height: 80
    },
    icon : {
        fontSize: 60
    },
    containermt : {
        marginTop: 30
    },
    grow : {
        flexGrow: 0,
        [theme.breakpoints.up('md')]: {
            flexGrow: 1
        }
    },
    appBar : {
        paddingTop: 8,
        paddingBottom: 8
    },
    buttonIcon : {
        fontSize: '14px',
        padding: 0
    },
    linkAppBarDesktop : {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none",
        padding: "6px 16px"
    },
    linkAppBarMobile : {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none",
        width: "100%",
        padding: "8px 16px 8px 16px"
    },
    listItem : {
        padding: 0
    },
    linkAppBarLogo : {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none",
    },
    mr : {
        marginRight: 3
    },
    sectionDesktop : {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile : {
        display: 'flex',
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    list : {
        width: 250
    },
    listItemIcon : {
        minWidth: 35
    },
    media : {  
        height: 250,  
        backgroundColor: "#F2F2F2", 
        margin: "15px 15px 0 15px" 
    },
    text_card : {
        fontWeight: "bold", 
        color: "#656565",   
        marginBottom: 8    
    },
    price_card : {
        fontWeight: "bold",  
        marginBottom: 5  
    },
    PaperImg : {
        backgroundColor: "#F2F2F2",
    },
    mediaDetalle : {   
        width: 300, /* cambiar de tamaño */
        height: 380,
        margin: "auto",
    },
    text_title : {
        fontWeight: 600, 
        color: "#494949",   
        marginBottom: 10
    },
    price : {
        float: "right",
        padding: "0 20px 0 20px", 
        backgroundColor: "#0f80aa"
    },
    /* text_title_detalle : {
        fontWeight: 600, 
        color: "#494949",   
        marginBottom: 10
    }, */
    text_detalle : {
        fontWeight: 500, 
        color: "#494949",   
        marginBottom: 5
    },
    
    imgProductoCC : {
        backgroundColor: "#F2F2F2",
        width: 80,
        height: 70
    },
    paperPadding : {
        padding: 20
    },
   
    imgProductoPC : {
        backgroundColor: "#F2F2F2", 
        width: 50, 
        height: 40 
    },
    gridPC : {
        margin: "auto", 
        marginTop: 20 
    },
    divider : {
        marginTop: 12,
        marginBottom: 12 
    },
    buttonAnterior : {
        marginRight: 8  
    },
    formControl : {
        /*margin: 12,*/
        margin: theme.spacing(1),
        minWidth: 120   
    },
    gridLR : {
        paddingLeft: 30,  
        paddingRight: 30, 
        paddingBottom: 20 
    },
    
    text_envio : {
        lineHeight: 3 
    },
    alertDelivered : {
        marginTop: 5, 
        padding: "15px 15px 5px 15px", 
        marginBottom: 20, 
        backgroundColor: "#d6f5d6"  
    },
    alertNotDelivered : {
        marginTop: 5, 
        padding: "15px 15px 5px 15px", 
        marginBottom: 20, 
        backgroundColor: "#ffcccc"  
    },
    /*  */
    table : {
        border: "1px solid #e0e0e0" 
    },
    iconNotDelivered : {
        color: "red", 
        fontWeight: 900 
    },
    iconDelivered : {
        color: "green", 
        fontWeight: 900 
    },
    avatarPefil : { 
        width: 130,
        height: 130,
        backgroundColor: "#0f80aa"
    },
    imageUploader : { 
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    /* ------ */
    linkMenu : {
        display: "inline-flex", 
        alignItems: "center", 
        color: "inherit", 
        textDecoration: "none", 
        padding: "6px 15px 6px 0", 
        
    },
    mrIcon: {
        marginRight: 10 
    },
    avatarPerfilAppBar : {
        marginRight: 8,   
        backgroundColor: "#F2F2F2" 
    },
    
     listSubItem : {
        padding: "0 0 0 30px" 
    },
    
    checkbox : {
        display: "block", 
        padding: 0, 
        marginTop: 5, 
        marginBottom: 5 
    },
    
    buttonAgregar : {
        float : "right"
    },
   
    avatarProducto : {
        width: 175, 
        height: 175,
        backgroundColor: "#F2F2F2" 
    },

})

export default useStyles;