import React from 'react'
import { Container, Typography, Box, Grid, Stack, Button } from '@mui/material'
import ProductCard from '../../ProductCard/ProductCard'
import product1 from '../../../images/product1.png'
import product2 from '../../../images/product2.png'
import product3 from '../../../images/product3.png'
import product4 from '../../../images/product4.png'
import product5 from '../../../images/product5.png'
import product6 from '../../../images/product6.png'
import product7 from '../../../images/product7.png'
import product8 from '../../../images/product8.png'
import product9 from '../../../images/product9.png'
import product10 from '../../../images/product10.png'
import product11 from '../../../images/product11.png'
import product12 from '../../../images/product12.png'
import product13 from '../../../images/product13.png'
import product14 from '../../../images/product14.png'
import product15 from '../../../images/product15.png'
import brand from '../../../images/brands.png'
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import banner4 from '../../../images/banner4.png'
const Detail = () => {
    const productList1 = [{
        image: product1,
        title1: "Apple",
        title2: "EAN 0190199320246",
        name: "Apple Airtag Bluetooth 4-Pack",
        description: "Apple AirTag - Anti-tab Bluetooth-tag for mobiltelefon, tablet (pakke med 4)",
        discount: "200,-",
        price: "216,-",
        other: "172.80, excluding VAT"

    }, {
        image: product2,
        title1: "Google",
        title2: "EAN 193575007342",
        name: "Google Chromecast and Google TV",
        description: "Connect your Chromecast with Google TV and turn your TV into a real smart TV!",
        price: "551,-",
        other: "440.80, excluding VAT"
    },
    {
        image: product3,
        title1: "ZTE",
        title2: "EAN 6902176053337",
        name: "HyperBox 5G MC801A Router Desktop",
        description: "WWAN - 2-port switch - 802.11a/b/g/n/ac/ax - Dual Band - 3G, 4G, 5G",
        price: "1.957,-",
        other: "1.565, excluding VAT"
    },
    {
        image: product4,
        title1: "Gigabyte",
        title2: "EAN 4719331309480",
        name: "GeForce RTX 3080 VISION OC 10G (rev. 2.0) 10GB",
        description: "10 GB GDDR6X - PCIe 4.0 x16 - 2 x HDMI, 3 x DisplayPort",
        price: "8.774,-",
        other: "7.019, excluding VAT"
    },
    {
        image: product5,
        title1: "Ubiquiti",
        title2: "EAN 817882027373",
        name: "Unifi Dream Machine Pro",
        description: "Network controller - GigE - 1U - rack mountable",
        price: "3.039,-",
        other: "2.431, excluding VAT"
    },
    ]
    const productList2 = [
        {
            image: product6,
            title1: "Apple",
            title2: "EAN 0194252056165",
            name: "MacBook Air Retina display 13.3",
            description: "M1 - M1 8-core GPU - 8 GB RAM - 512 GB SSD - 13.3",
            price: "9.530,-",
            other: "7.624, excluding VAT"
        },
        {
            image: product7,
            title1: "ASUS",
            title2: "EAN 4718017587723",
            name: "C434TA-E10001 14",
            description: `Core m3 8100Y / 1.1 GHz, 8 GB RAM, 64 GB eMMC, 14" berøringsskærm 1920x1080, UHD Graphics 615`,
            price: "2.090,-",
            other: "$162.72 per month"
        },
        {
            image: product8,
            title1: "Apple",
            title2: "EAN 0194252549087",
            name: `MacBook Pro 14.2" Space grey`,
            description: `M1 Pro - M1 Pro 14-core GPU - 16 GB RAM - 512 GB SSD - 14.2" 3024 x 1964 @ 120 Hz`,
            price: "16.664,-",
            other: "13.331, excluding VAT"
        },
        {
            image: product9,
            title1: "ASUS",
            title2: "EAN 4718017672504",
            name: `UX425JA-PURE3 14"`,
            description: `Intel i7-1065G7 - 16GB RAM - 512GB NVMe SSD W10 HOME`,
            discount: "4.890,-",
            price: "5.213,-",
            other: "4.170, excluding VAT"
        },
        {
            image: product10,
            title1: "Lenovo",
            title2: "EAN 0195348080187",
            name: `IdeaPad Duet 3 10IGL5 82AT 10.3" IPS Touch`,
            description: `Pentium Silver N5030 / 1.1 GHz - Win 10 Pro 64-bit - UHD Graphics 605 - 8 GB RAM - 128 GB eMMC`,
            price: "2.650,-",
            other: "2.120, excluding VAT"
        },
        {
            image: product11,
            title1: "Lenovo",
            title2: "EAN 0195348035040",
            name: `IdeaPad 3 15ADA05 81W1 15.6"`,
            description: `Ryzen 3 3250U / 2.6 GHz - Win 10 Home in S mode - Radeon Graphics - 8 GB RAM - 256 GB SSD NVMe`,
            price: "3.394,-",
            other: "2.715, excluding VAT"
        },
        {
            image: product12,
            title1: "Lenovo",
            title2: "EAN 5711603055476",
            name: `ThinkPad X280 12.5" Sort`,
            description: `Core i5 8250U / 1.6 GHz - Win 10 Pro - UHD Graphics 620 - 8 GB RAM - 256 GB SSD - 12.5" 1920x1080`,
            price: "4.387,-",
            other: "3.509, excluding VAT"
        },
        {
            image: product13,
            title1: "Microsoft",
            title2: "EAN 0889842596250",
            name: `Surface Go 2 10.5"`,
            description: `Pentium Gold 4425Y / 1.7 GHz - Win 10 Pro - UHD Graphics 615 - 8 GB RAM - 128 GB SSD - 10.5" touchscreen 1920 x 1280`,
            price: "3.807,-",
            other: "3.045, excluding VAT"
        },
        {
            image: product14,
            title1: "ASUS",
            title2: "EAN 4711081181293",
            name: `EAN 4711081181293`,
            description: `Core i5 1135G7 / 2.4 GHz - Windows 10 Home - Iris Xe Graphics - 8 GB RAM - 512 GB SSD NVMe - 17.3” 1600x900`,
            price: "5.428,-",
            other: "4.342, excluding VAT"
        },
        {
            image: product15,
            title1: "Lenovo",
            title2: "EAN 0195891765326",
            name: `ThinkPad X1 Extreme Gen 4 16”`,
            description: `Intel® Core™ i9 vPro - 	Windows 11 Pro - RTX™ 3070 Max-Q 8GB GDDR6 - 16 GB RAM - 1 TB PCIe NVMe Gen 4 - 16” 3840 x 2400 IPS Touch`,
            price: "22.499,-",
            other: "17.999, excluding VAT"
        },

    ]
    return (
        <>
            <Container component='main' maxWidth='xl' sx={{
                background: '#F1F5FB',
                '@media (min-width: 800px)': {
                    padding: "78px",
                },
                '@media (max-width: 1285px)': {
                    marginTop: "180px",
                },
                '@media (max-width: 800px)': {
                    marginTop: "32px",
                }
            }}>
                <Box sx={{
                    '@media (min-width: 800px)': {
                        marginX: "32px",
                    }
                }}>
                    <Typography variant='h4' component='div' sx={{ marginBottom: '16px', fontFamily: 'Inter' }}>
                        <b>Popular Products</b>
                    </Typography>
                    <Grid container spacing={{ xs: 1, md: 2 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {productList1.map((product, index) => {
                            return (<Grid item key={index}>
                                <ProductCard product={product} />
                            </Grid>)
                        })}
                    </Grid>
                </Box>
            </Container>
            <Container component='main' maxWidth='xl' sx={{
                '@media (min-width: 800px)': {
                    padding: "78px",
                },
                '@media (max-width: 800px)': {
                    paddingTop: "78px",
                },
                background: '#FFFFFF', fontFamily: 'Inter', position: 'relative'
            }}>
                <Box sx={{ marginX: '32px' }}>
                    <Typography variant='h4' component='div' sx={{ marginBottom: '16px', fontFamily: 'Inter' }}>
                        <b>Brands</b>
                    </Typography>
                    <img src={brand} alt="brand list" style={{
                        position: 'absolute', right: '0', width: '100%',
                        maxHeight: '70px',
                    }} />
                </Box>
                <Box sx={{ marginTop: '140px' }}>
                    <Typography variant='h4' component='div' sx={{ marginBottom: '16px', fontFamily: 'Inter' }}>
                        <b>All Product</b>
                    </Typography>
                    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ fontFamily: 'Inter', marginBottom: '48px' }}>
                        <Button variant='contained'
                            sx={{
                                color: '#FFFFFF', background: '#2D68FF', border: '1px solid #A2C7FF',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Barbær</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Stationær Pc’er</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Skræme</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Mobiler & Tilbehør</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Tablets</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Printere</Button>
                        <Button variant='contained'
                            sx={{
                                color: '#0A2540', background: '#FFFFFF', border: '1px solid #E4E4E4',
                                borderRadius: '999px', boxShadow: 'none', fontFamily: 'Inter'
                            }}>Komponenter</Button>
                    </Stack>
                    <Grid container spacing={{ xs: 1, md: 2 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {productList2.map((product, index) => {
                            return (<Grid item key={index}>
                                <ProductCard product={product} />
                            </Grid>)
                        })}
                    </Grid>
                    <Stack direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: '36px' }}>
                        <Button variant='contained' size='medium' sx={{
                            color: '#FFFFFF', background: '#001834',
                            borderRadius: '4px', boxShadow: 'none', fontFamily: 'Inter'
                        }}>Load More Products</Button>
                    </Stack>
                </Box>
            </Container>
            <Container component='main' maxWidth='xl' sx={{
                background: '#FFFFFF',
                '@media (min-width: 800px)': {
                    padding: '78px',
                },
                '@media (max-width: 800px)': {
                    paddingTop: '56px',
                },

            }}>
                <Box sx={{
                    '@media (min-width: 800px)': {
                        marginX: '32px',
                    },
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={7}>
                            <img
                                src={banner1}
                                alt="banner1"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "324px",
                                    objectFit: 'fill',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img
                                src={banner2}
                                alt="banner2"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "324px",
                                    objectFit: 'fill',

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img
                                src={banner3}
                                alt="banner3"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "324px",
                                    objectFit: 'fill',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img
                                src={banner4}
                                alt="banner4"
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "324px",
                                    objectFit: 'fill',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Detail