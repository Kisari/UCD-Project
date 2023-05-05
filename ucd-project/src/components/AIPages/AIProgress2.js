import React from 'react'
import { Container, Grid, Typography, Link, Button } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
import purpose1 from '../../images/gaming.jpg'
import purpose2 from '../../images/office.jpg'
import purpose3 from '../../images/designer 2d.jpg'
import purpose4 from '../../images/programming.jpg'

const AIProgess2 = () => {
    return (
        <>
            <Header></Header>
            <AIsubtitle></AIsubtitle>
            <Container component='main' disableGutters maxWidth='xl' sx={{ background: '#FAFBFE', display: 'flex', flexDirection: 'column', marginBottom: '15rem' }}>
                <Typography component='div' sx={{
                    color: '#000000',
                    fontWeight: '700',
                    fontSize: '48px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    marginBottom: '36px'
                }}>Are you looking for a PC or a Laptop?</Typography>

                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={4}
                >
                    <Grid item >
                        <Link href="/AI/assistant/3" underline="none">
                            <img src={purpose1} alt="cute robot" style={{
                                maxWidth: '400px',
                                maxHeight: '250px',
                                background: 'radial-gradient(74.66% 74.66% at 19.32% 17.18%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/AI/assistant/3" underline="none">
                            <img src={purpose2} alt="cute robot" style={{
                                maxWidth: '400px',
                                maxHeight: '250px',
                                background: 'radial-gradient(74.66% 74.66% at 19.32% 17.18%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>
                    <Grid item>

                        <Link href="/AI/assistant/3" underline="none">
                            <img src={purpose3} alt="cute robot" style={{
                                maxWidth: '400px',
                                maxHeight: '250px',
                                background: 'radial-gradient(74.66% 74.66% at 19.32% 17.18%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/AI/assistant/3" underline="none">
                            <img src={purpose4} alt="cute robot" style={{
                                maxWidth: '400px',
                                maxHeight: '250px',
                                background: 'radial-gradient(74.66% 74.66% at 19.32% 17.18%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>

                </Grid>
                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'>
                    <Link href="/AI/assistant/1" underline="none">
                        <Button variant='outline' sx={{
                            color: '#001834', background: '#FFFFFF',
                            border: '1px solid #001834',
                            borderRadius: '4px',
                            marginTop: '16px'
                        }}>Back</Button>

                    </Link>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default AIProgess2