import React from 'react'
import { Container, Grid, Typography, Link, Button, TextField, InputAdornment, Avatar } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
import money from '../../images/money.png'
const AIProgess3 = () => {
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
                }}>What is your budget?</Typography>

                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        marginY: '3.5rem'
                    }}
                >
                    <TextField
                        label="1,250.00$"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ background: '#E2E8F0' }}>
                                    <Avatar src={money} alt='dollars currency' sx={{ width: '24px', height: '24px' }}></Avatar>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"></TextField>
                </Grid>
                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={3}>
                    <Grid item>
                        <Link href="/AI/assistant/2" underline="none">
                            <Button variant='outline' sx={{
                                color: '#001834', background: '#FFFFFF',
                                border: '1px solid #001834',
                                borderRadius: '4px',
                                marginTop: '16px'
                            }}>Back</Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/AI/assistant/4" underline="none">
                            <Button variant='contained' sx={{
                                color: '#FFFFFF', background: '#001834',
                                border: '1px solid #001834',
                                borderRadius: '4px',
                                marginTop: '16px'
                            }}>FINISH AND SUBMIT</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default AIProgess3