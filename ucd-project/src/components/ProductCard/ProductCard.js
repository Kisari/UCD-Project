import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, MenuItem, Grid, TextField, Button } from '@mui/material'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'

const ProductCard = ({ product }) => {
    const currencies = [
        {
            value: 'quantity: 1',
            label: 'quantity: 1',
        }]
    return (
        <>
            <Card sx={{ maxWidth: 300, padding: '12px' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={product.image}
                    title="product 1"
                />
                <CardContent>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            color: '#5E7790',
                            fontWeight: '500',
                            fontSize: '12px',
                            lineHeight: '150%'
                        }}>
                        <Typography gutterBottom>
                            {product.title1}
                        </Typography>
                        <Typography gutterBottom>
                            {product.title2}
                        </Typography>
                    </Grid>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', minHeight: '50px' }}>
                        <b>{product.name}</b>
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: '12px', color: '#425466', minHeight: '50px' }}>
                        {product.description}
                    </Typography>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            color: '#5E7790',
                            fontWeight: '500',
                            fontSize: '12px',
                            lineHeight: '150%',
                            marginTop: '20px',
                            minHeight: '27px'
                        }}>
                        <Typography sx={{ color: '#001834', fontWeight: '700', fontSize: '18px' }}>
                            {product.discount ? product.discount : null}
                        </Typography>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            color: '#5E7790',
                            fontWeight: '500',
                            fontSize: '12px',
                            lineHeight: '150%',
                        }}>
                        <Typography gutterBottom sx={{ color: '#5E7790', fontWeight: '700', fontSize: '12px', textDecoration: 'line-through' }}>
                            {product.price}
                        </Typography>
                        <Typography gutterBottom sx={{ color: '#425466', fontWeight: '400', fontSize: '12px' }}>
                            {product.other}
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <TextField
                                id="outlined-select-currency"
                                select
                                fullWidth
                                defaultValue="1 stk"
                                size="small"
                                sx={{
                                    color: '#001834',
                                    width: '100%'
                                }}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' sx={{ background: '#001834', color: '#FFFFFF', fontWeight: '600', fontSize: '12px' }}>
                                Add to cart
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
                <CardActions>
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={card1} alt="box" />
                            <Typography varian='body1' component='span' sx={{ marginLeft: '8px' }}>
                                40 pieces in stock
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={card2} alt="arrow" />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </>
    )
}

export default ProductCard