import React from 'react'
import { Container } from '@mui/material'
import footer from '../../images/footer.png'

const Footer = () => {
    return (
        <Container component='main' disableGutters={true} maxWidth='xl' sx={{
            backgroundImage: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: "120vh"
        }}>
            {/* <img src={footer} alt="footer section" /> */}
        </Container>
    )
}

export default Footer