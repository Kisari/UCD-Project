import React from 'react'
import { Grid, Container, TextField, InputAdornment, ButtonGroup, Button, Badge, Stack, Link } from '@mui/material'
import searchIcon from '../../images/searchIcon.png'
import logo from '../../images/techtropolis.png'
import deleteIcon from '../../images/deleteIcon.png'
import allProducts from '../../images/icon1.png'
import promotions from '../../images/icon2.png'
import laptops from '../../images/icon3.png'
import desktops from '../../images/icon4.png'
import smartphones from '../../images/icon5.png'
import aiPurchase from '../../images/icon6.png'
const Header = () => {

    return (
        <>
            <Container component='main' disableGutters={true} maxWidth='xl'>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", paddingY: "16px" }}>
                        <Link href="/" underline="none">
                            <img src={logo} alt="Techtropolis" style={{
                                maxWidth: "100%",
                                height: "auto",
                                padding: "0",
                                margin: "0",
                            }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", paddingY: "16px" }}>
                        <TextField
                            value="asdasd"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={searchIcon} alt="searchIcon" style={{ width: '32px', height: '32px' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end" sx={{
                                        display: 'flex',
                                        '& > *': {
                                            m: 0.5,
                                        },
                                    }}>
                                        <Button sx={{ background: "#F1F5FB", color: "#5E7790" }}>Ctlr</Button>
                                        <Button sx={{ background: "#F1F5FB", color: "#5E7790", marginLeft: "6px" }}>K</Button>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{
                        float: 'right',
                        display: "flex",
                        justifyContent: "center",
                        paddingY: "16px"
                    }}>
                        <ButtonGroup
                            disableElevation
                            aria-label="Disabled elevation buttons"
                            spacing={3}
                        >
                            <Button sx={{
                                background: "#FFFFFF",
                                color: "#001834",

                            }}>Register</Button>
                            <Button sx={{
                                background: "#001834",
                                color: "#FFFFFF",
                                "&:hover": { backgroundColor: "#1976d2" }
                            }}>Login</Button>
                        </ButtonGroup>
                        <Badge badgeContent={1} color="primary">
                            <img src={deleteIcon} alt="deleteIcon" style={{ width: '32px', height: '32px' }} />
                        </Badge>
                    </Grid>
                </Grid>
                <Stack direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    useFlexGap
                    flexWrap="wrap"
                    spacing={{ xs: 3, md: 2 }}
                    sx={{
                        paddingY: "16px",
                        '& > button': {
                            border: 'none'
                        },
                        '& > button:hover': {
                            backgroundColor: "#1976d2",
                            color: '#FFFFFF',
                            border: 'none'
                        },
                    }}
                >
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px' }} startIcon={<img src={allProducts} alt="deleteIcon" />}>
                        All Products
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px' }} startIcon={<img src={promotions} alt="deleteIcon" />}>
                        Promotions
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px' }} startIcon={<img src={laptops} alt="deleteIcon" />}>
                        Laptops
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px' }} startIcon={<img src={desktops} alt="deleteIcon" />}>
                        Desktops
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px' }} startIcon={<img src={smartphones} alt="deleteIcon" />}>
                        Smartphones
                    </Button>
                    <Button variant="outlined" sx={{
                        textTransform: 'none', color: '#FFFFFF', background: '#0A2540', fontSize: '14px',
                        "&:hover": { backgroundColor: "#1976d2" }
                    }} startIcon={<img src={aiPurchase} alt="deleteIcon" />}>
                        AI Purchase Assistant - Find your perfect machine!
                    </Button>
                    <Button variant="contained" disableElevation sx={{ color: '#FFFFFF', background: '#2D68FF', fontSize: '14px' }}>
                        Free shipping for orders over $100
                    </Button>
                </Stack>
            </Container>
        </>
    )
}

export default Header