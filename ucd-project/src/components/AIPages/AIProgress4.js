import React from 'react'
import { Container, Grid, Typography, Link, Button, Box, Stack } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
const AIProgess4 = () => {
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
                }}>Your results!</Typography>

                <Grid container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        marginY: '3.5rem'
                    }}
                    spacing={1}
                >
                    <Grid item>
                        <Box sx={{ display: 'flex', padding: '12px' }}>
                            <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                ASUS ROG Strix Scar III (G531)
                            </Typography>
                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                <Button variant='contained' size='small'>See details</Button>
                                <Button variant='contained' size='small' color='success'>Buy now</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', padding: '12px' }}>
                            <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                ASUS ROG Zephyrus S GX701
                            </Typography>
                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                <Button variant='contained' size='small'>See details</Button>
                                <Button variant='contained' size='small' color='success'>Buy now</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', padding: '12px' }}>
                            <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                ASUS ROG Zephyrus G14
                            </Typography>
                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                <Button variant='contained' size='small'>See details</Button>
                                <Button variant='contained' size='small' color='success'>Buy now</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', padding: '12px' }}>
                            <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                ASUS ROG Strix G17 (G712)
                            </Typography>
                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                <Button variant='contained' size='small'>See details</Button>
                                <Button variant='contained' size='small' color='success'>Buy now</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', padding: '12px' }}>
                            <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                ASUS ROG Zephyrus Duo 15 (GX550)
                            </Typography>
                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                <Button variant='contained' size='small'>See details</Button>
                                <Button variant='contained' size='small' color='success'>Buy now</Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'>
                    <Grid item>
                        <Link href="/AI/assistant/3" underline="none">
                            <Button variant='outline' sx={{
                                color: '#001834', background: '#FFFFFF',
                                border: '1px solid #001834',
                                borderRadius: '4px',
                                marginTop: '16px'
                            }}>Back</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default AIProgess4