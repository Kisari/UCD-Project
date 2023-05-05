import React from 'react'
import { Container, Grid, Typography, Link } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
import computer from '../../images/computer_mockup.png'
import laptop from '../../images/laptop_mockup.png'

const AIProgess1 = () => {
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
                    spacing={2}
                >
                    <Grid item >
                        <Link href="/AI/assistant/2" underline="none">
                            <img src={computer} alt="cute robot" style={{
                                maxWidth: '450px',
                                maxHeight: '300px',
                                background: 'radial-gradient(74.66% 74.66% at 19.32% 17.18%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>
                    <Grid item href='/AI/assistant/2'>
                        <Link href="/AI/assistant/2" underline="none">
                            <img src={laptop} alt="cute robot" style={{
                                maxWidth: '450px',
                                maxHeight: '300px',
                                background: 'radial-gradient(81.12% 81.12% at 80.45% 13.78%, #2D67FF 35.05%, #2DA7FF 100%)',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
                                borderRadius: '8px',
                            }} />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default AIProgess1