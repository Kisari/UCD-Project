import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import cuteRobot from '../../images/cute-robot-colour.png'

const AIsubtitle = () => {
    return (
        <>
            <Container component='main' disableGutters={true} maxWidth='xl' sx={{ background: "#FFFFFF", marginY: '5rem' }}>
                <Grid container direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={3}>
                    <Grid item>
                        <img src={cuteRobot} alt="cute robot" style={{
                            maxWidth: '150px',
                            maxHeight: '140px'

                        }} />
                    </Grid>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography component='div' variant='h4' sx={{ color: '#0A2540', fontSize: '52px', lineHeight: '63px', fontWeight: '700', fontFamily: 'Inter' }}>AI Purchase Assistant</Typography>
                        <Typography component='div' variant='span' sx={{ color: '#425466', fontSize: '32px', lineHeight: '39px', fontWeight: '400', fontFamily: 'Inter' }}>Find your perfect machine!</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AIsubtitle