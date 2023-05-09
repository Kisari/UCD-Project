import React from 'react'
import { Paper, Typography, Avatar, Box, Grid, Button } from '@mui/material'
import Header from '../Header/Header'
import Detail from './Detail/Detail'
import Footer from '../Footer/Footer'
import cuteRobot from '../../images/cute-robot-colour.png'
import des1 from '../../images/des1.png'
import des2 from '../../images/des2.png'
import des3 from '../../images/des3.png'
import des4 from '../../images/des4.png'

const Home = () => {
    return (
        <>
            <Header ></Header>
            <Box sx={{
                '@media (min-width: 800px)': {
                    padding: "56px",
                },
            }}>
                <Paper variant="outlined" sx={{ position: "relative" }}>
                    <Grid container sx={{
                        background: 'linear-gradient(180deg, #001834 0%, rgba(0, 24, 52, 0.85) 100%)',
                        borderRadius: '8px',
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#FFFFFF",
                        fontFamily: 'Inter',

                    }}>
                        <Grid item p={2} sx={{
                            '@media (max-width: 660px)': {
                                "& > *": {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            },
                        }}>
                            <Typography variant="h4" component="div">
                                Meet Our
                            </Typography>
                            <Typography variant="h4" component="div">
                                AI Purchase Assistant
                            </Typography>
                            <Typography variant="subtitle1" component="div" sx={{ marginY: '32px' }}>
                                Lorem ipsum
                            </Typography>
                            <Button
                                size='large'
                                variant='contained' href='/AI/assistant/1' sx={{ background: '#2D67FF', "&:hover": { backgroundColor: '#4277ff', borderColor: "#2D67FF", color: "#FFFFFF" } }}>
                                Click now!
                            </Button>
                        </Grid>
                        <Grid item>
                            <img src={cuteRobot} alt="cute robot" style={{
                                width: "100%",
                                maxWidth: "15rem",
                                height: "auto",
                            }} />
                        </Grid>
                    </Grid>
                    <Grid container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{
                            bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', width: '100%',
                            '@media (min-width: 800px)': {
                                position: 'absolute',
                            },
                        }}>
                        <Grid item
                            xs={4} sm={4} md={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '18px'
                            }}>
                            <Avatar sx={{ background: '#F1F5FB' }}>
                                <img src={des1} alt="icon1" style={{ width: '25px', height: '25px' }} />
                            </Avatar>
                            <Box component='div' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginX: '16px'
                            }}>
                                <Typography sx={{
                                    color: '#0A2540',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    marginBottom: '0.5rem'
                                }}>Kæmpe produkt sortiment</Typography>
                                <Typography sx={{
                                    color: '#425466',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                }}>25.000 varer i vores basissortimentet 8.000 varer på lager</Typography>
                            </Box>
                        </Grid>
                        <Grid item
                            xs={4} sm={4} md={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '18px'
                            }}>
                            <Avatar sx={{ background: '#F1F5FB' }}>
                                <img src={des2} alt="icon1" style={{ width: '25px', height: '25px' }} />
                            </Avatar>
                            <Box component='div' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginX: '16px'
                            }}>
                                <Typography sx={{
                                    color: '#0A2540',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    marginBottom: '0.5rem'
                                }}>Hurtig levering</Typography>
                                <Typography sx={{
                                    color: '#425466',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                }}><span>Bestil inden <b style={{ color: "#425466" }}>09:06:14</b> på lagervarer, og forvent at få din ordre afsendt i dag.</span></Typography>
                            </Box>
                        </Grid>
                        <Grid item
                            xs={4} sm={4} md={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '18px'
                            }}>
                            <Avatar sx={{ background: '#F1F5FB' }}>
                                <img src={des3} alt="icon1" style={{ width: '25px', height: '25px' }} />
                            </Avatar>
                            <Box component='div' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginX: '16px'
                            }}>
                                <Typography sx={{
                                    color: '#0A2540',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    marginBottom: '0.5rem'
                                }}>Vi har danmarks bedste kunder</Typography>
                                <Typography sx={{
                                    color: '#425466',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                }}><span>Vores kunders tilfredshed er i højsædet hos os. <span style={{ color: '#425466' }}>Bare se vores</span> <b style={{ color: '#00B67A', textDecoration: 'underline' }}>Trustscore 4.5</b></span></Typography>
                            </Box>
                        </Grid>
                        <Grid item
                            xs={4} sm={4} md={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '18px'
                            }}>
                            <Avatar sx={{ background: '#F1F5FB' }}>
                                <img src={des4} alt="icon1" style={{ width: '25px', height: '25px' }} />
                            </Avatar>
                            <Box component='div' sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginX: '16px'
                            }}>
                                <Typography sx={{
                                    color: '#0A2540',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    marginBottom: '0.5rem'
                                }}>Kundeservice 9-17</Typography>
                                <Typography sx={{
                                    color: '#425466',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                }}><span>Kundeservice er live på chatten man-fre fra 9-17</span></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Detail></Detail>
            <Footer></Footer>
        </>
    )
}

export default Home