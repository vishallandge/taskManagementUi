import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Card } from '@material-ui/core';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import OrderData from '../OrderData.js'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { getSelectedData } from '../redux/selector';
import home from './home.css';
import img from '../assets/img.jpeg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import profile from "../assets/profile.jpeg"
import { selectedData } from '../redux/action';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        position: "relative",
        border: "1px solid transparent",
        padding: theme.spacing(1, 2),
        width: "80%",
        margin: theme.spacing(1.3),
        borderRadius: "10px",
        height: "38%"
    },
    title: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0)
    },
    persentage: {
        padding: theme.spacing(1),
        // border: "1px solid #000",
        margin: theme.spacing(1)
    },
    detail: {
        padding: theme.spacing(1),
        margin: theme.spacing(2, 0, 2, 0)
        // border: "1px solid #000",
    },

    boxicon: {
        height: "100px",
        width: "100px",
        display: "flex",
        position: "absolute",
        zIndex: 1,
        // top: -20,
        top: 42,
        left: 12,

        // color: "#ff0000",
        // background:"linear-gradient(90deg, rgba(40,214,0,1) 0%, rgba(93,170,67,1) 88%)",
        // border: "2px solid #745223",
        borderRadius: "25%",
        justifyContent: "center",
        alignItems: "center"
    },
    icons: {
        minWidth: 60,
        minHeight: 60,
        color: "#ffffff"
    }
}));

const Home = () => {
    const [data, setData] = useState();
    const classes = useStyles();

    const dispatch = useDispatch();

    const allData = useSelector(getSelectedData);
    // console.log(allData[0].results[0].hours)

    // let res = allData.reduce((acc, { time, hours }) => {
    //     allData[0].results[0][1].find("price") && acc.push({ time, hours });
    //     return acc;
    // }, []);




    useEffect(() => {
        dispatch(selectedData(OrderData));
    }, [])
    return (
        // <div className="containerHome">
        <>


            <Grid container spacing={2} >
                <Grid item xs={1} >

                </Grid>
                <Grid item xs={10}  >
                    <Grid container spacing={24}>

                        <Grid item md={3} className="container" >
                            <div className="column" style={{ margin: "5px", height: "600px" }}>


                                <span className="taskColumn">{allData[0].stage}</span>
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[0].results[0].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusNw" >{allData[0].results[0].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[0].results[0].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[0].results[0].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[0].results[0].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                        orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>




                                    </Grid>



                                </Paper>


                                {/* 02 */}

                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[0].results[1].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusNw" >{allData[0].results[1].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[0].results[1].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[0].results[1].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[0].results[1].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>




                                    </Grid>



                                </Paper>
                            </div>




                        </Grid>


                        {/* 2nd column */}
                        <Grid item md={3} className="container" >
                            <div className="column" style={{ margin: "5px", height: "600px" }}>


                                <span className="taskColumn">{allData[1].stage}</span>
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[1].results[0].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusIP" >{allData[1].results[0].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[1].results[0].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[0].results[1].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[1].results[0].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>




                                    </Grid>



                                </Paper>


                                {/* 2nd line column 01 */}
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[1].results[1].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusIP" >{allData[1].results[1].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[1].results[1].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[1].results[1].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[1].results[1].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>




                                    </Grid>



                                </Paper>
                            </div>



                        </Grid>

                        {/* 3rd column */}
                        <Grid item md={3} className="container" >
                            <div className="column" style={{ margin: "5px", height: "600px" }}>


                                <span className="taskColumn">{allData[2].stage}</span>
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[2].results[0].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusWB" >{allData[2].results[0].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[2].results[0].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[2].results[0].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[0].results[0].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>



                                    </Grid>



                                </Paper>

                            </div>
                        </Grid>


                        <Grid item md={3} className="container" >
                            <div className="column" style={{ margin: "5px", height: "800px" }}>


                                <span className="taskColumn">{allData[3].stage}</span>
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[3].results[0].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusComplete" >{allData[3].results[0].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[3].results[0].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[3].results[0].hours}</span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[3].results[0].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                          orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>

                                    </Grid>
                                </Paper>
                                {/* 4 column 01 */}
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[3].results[1].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusComplete" >{allData[3].results[1].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[3].results[1].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[3].results[1].hours}</span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[3].results[1].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                          orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>

                                    </Grid>
                                </Paper>
                                {/* 4 column 02 */}
                                <Paper className={classes.card}>
                                    {/* <Card className="cardColor"> */}
                                    <Grid container>
                                        <h2 only="sm">
                                            <Grid className={classes.boxicon}  >
                                                {/* <IconPerformance className={classes.icons} /> */}
                                                <img src={img} className="imageFile" alt={allData[3].results[2].image} height="100%" width="100%"></img>                               </Grid>
                                        </h2>
                                        <Grid
                                            container
                                            className="dotClass"
                                            justifyContent="flex-end"
                                        >
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </Grid>

                                        <Grid
                                            container
                                            className={classes.persentage}
                                            justifyContent="flex-end"
                                        >

                                            {/* <Typography variant="h4" className="statusNw"></Typography> */}
                                            <button className="statusCanc" >{allData[3].results[2].status}</button>

                                        </Grid>

                                        <Grid
                                            container
                                            justifyContent="flex-end"
                                        >

                                            <div ><AccessTimeIcon style={{ margin: "-5px", marginLeft: "5px" }} /><span className="timeInDays" > {allData[3].results[2].time}</span></div>

                                        </Grid>


                                    </Grid>
                                    <Grid container>
                                        <Grid container justifyContent="flex-end" className={classes.detail}>

                                            <div ><span className="hours" >{allData[3].results[2].hours}</span><span className="vl"></span><span style={{ marginLeft: "5px", fontWeight: "bold" }} > {allData[3].results[2].price}</span></div>

                                        </Grid>
                                    </Grid>

                                    <Divider style={{ color: "#000" }} />

                                    <Grid container xs justify="flex-start" className={classes.title}>
                                        <Typography>
                                            <span className="
                                          orderDetails">View Order</span>
                                        </Typography>


                                        <Typography>
                                            <span style={{ marginLeft: "35px", padding: "4px", width: "150px" }}
                                            >
                                                <ChatBubbleOutlineRoundedIcon style={{ borderRadius: "50px", height: "1.4em" }} />

                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span style={{ marginRight: "5px", width: "150px" }}
                                            >
                                                <img src={profile} className="main-profile-img" />

                                            </span>
                                        </Typography>

                                    </Grid>
                                </Paper>


                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={1}>

                </Grid>

            </Grid>


        </>

    )
}

export default Home