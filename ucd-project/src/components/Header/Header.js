import React from 'react'
import { Grid, Container, TextField, InputAdornment, ButtonGroup, Button, Badge, Stack, Link, Box } from '@mui/material'
import searchIcon from '../../images/searchIcon.png'
import logo from '../../images/techtropolis 2.png'
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
            <Container component='main' disableGutters={true} maxWidth='xl'
                sx={{
                    marginLeft: '40px',
                    marginRight: '40px',
                }}>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={12} md={3}>
                        <Link href="/" underline="none">
                            <img src={logo} alt="Techtropolis" style={{
                                width: '50%',
                                height: '50%',
                                padding: "0",
                                margin: "0",
                                objectFit: 'contain'
                            }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", paddingY: "16px" }}>
                        <TextField
                            sx={{
                                "& fieldset": { border: 'none' },
                                backgroundColor: '#FAFBFE',
                                color: '#5E7790'
                            }}
                            placeholder='Search'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={searchIcon} alt="searchIcon" style={{ width: '24px', height: '24px' }} />
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
                    <Grid item xs={12} sm={6} md={5} sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingY: "16px",
                    }}>
                        <Button variant='outlined' sx={{
                            background: "#FFFFFF",
                            color: "#001834",
                            borderColor: "#001834",
                            "&:hover": { backgroundColor: '#2D67FF', borderColor: "#2D67FF", color: "#FFFFFF" },
                            height: '48px',
                            width: '100px',
                            marginRight: '16px'
                        }}>Register</Button>
                        <Button sx={{
                            background: "#001834",
                            color: "#FFFFFF",
                            border: 'none',
                            height: '48px',
                            width: '80px',
                            "&:hover": { backgroundColor: "#2D67FF", border: 'none' },
                            marginRight: '42px'
                        }}>Login</Button>
                        <Badge badgeContent={1} color="primary">
                            <Box sx={{ width: 48, height: 48, backgroundColor: "#F1F5FB", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>
                                <img src={deleteIcon} alt="deleteIcon" style={{ width: '24px', height: '24px' }} />
                            </Box>

                        </Badge>
                    </Grid>
                </Grid>
                <Stack direction={{ xs: 'column', md: 'row' }}
                    justifyContent="start"
                    alignItems="center"
                    useFlexGap
                    flexWrap="wrap"
                    spacing={{ xs: 3, md: 2 }}
                    sx={{
                        paddingY: "16px",
                        '& > button': {
                            border: 'none'
                        },
                    }}
                >
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px', "&:hover": { backgroundColor: "#F1F5FB", border: 'none' } }}
                        startIcon={<img src={allProducts} alt="deleteIcon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />}>
                        All Products
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px', "&:hover": { backgroundColor: "#F1F5FB", border: 'none' } }} startIcon={<img src={promotions} alt="deleteIcon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />}>
                        Promotions
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px', "&:hover": { backgroundColor: "#F1F5FB", border: 'none' } }} startIcon={<img src={laptops} alt="deleteIcon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />}>
                        Laptops
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px', "&:hover": { backgroundColor: "#F1F5FB", border: 'none' } }} startIcon={<img src={desktops} alt="deleteIcon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />}>
                        Desktops
                    </Button>
                    <Button variant="outlined" sx={{ textTransform: 'none', color: '#0A2540', fontSize: '14px', "&:hover": { backgroundColor: "#F1F5FB", border: 'none' } }} startIcon={<img src={smartphones} alt="deleteIcon" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />}>
                        Smartphones
                    </Button>
                    <Button variant="outlined" href="/AI/assistant/1" sx={{
                        textTransform: 'none', color: '#FFFFFF', background: '#0A2540', fontSize: '14px', border: 'none',
                        "&:hover": {
                            backgroundColor: "#2D68FF", border: 'none',
                        }
                    }} startIcon={<img src={aiPurchase} alt="deleteIcon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />}>
                        AI Purchase Assistant
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