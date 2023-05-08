import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Link, Button, TextField } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
import money from '../../images/money.png'
const AIProgess3 = () => {
    let { computer, purpose } = useParams();
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (value === '') {
            setError('Please input your desired budget');
            return;
        }
        if (!(!isNaN(value) && !isNaN(parseFloat(value)))) {
            setError('Please input a valid number');
            return;
        }
        navigate(`/AI/assistant/4/${computer}/${purpose}/${value}`);
    }
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
                        marginY: '3.5rem',

                    }}
                >
                    {/* <TextField
                        placeholder="1,250.00"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ background: 'black' }}>
                                    <Avatar src={money} alt='dollars currency' sx={{ width: '24px', height: '24px' }}></Avatar>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        autoFocus
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        helperText={error ? error : null}
                        error={error ? true : false}
                        sx={{
                            border: '1px solid red',
                        }}
                    /> */}
                    <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: '#edf2f7', border: '1px solid #E2E8F0' }}>
                        <img src={money} alt='dollars currency' style={{ width: '24px', height: '24px' }}></img>
                    </Grid>
                    {/* , width: 'auto', height: '48px' */}
                    <Grid item sx={{
                        border: '1px solid #E2E8F0'
                    }}>
                        <TextField
                            type="text"
                            label="1,250.00"
                            variant="outlined"
                            inputProps={{
                                style: {
                                    height: "36px",
                                    padding: "6px"
                                },
                            }}
                            autoFocus
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            helperText={error ? error : null}
                            error={error ? true : false}
                        />
                    </Grid>
                </Grid>
                <Grid container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={3}>
                    <Grid item>
                        <Link href={`/AI/assistant/2/${computer}`} underline="none">
                            <Button variant='outline' sx={{
                                color: '#001834', background: '#FFFFFF',
                                border: '1px solid #001834',
                                borderRadius: '4px',
                                marginTop: '16px'
                            }}>Back</Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" onClick={handleSubmit}>
                            <Button variant='contained' sx={{
                                color: '#FFFFFF', background: '#001834',
                                border: '1px solid #001834',
                                borderRadius: '4px',
                                marginTop: '16px',
                                '&:hover': {
                                    background: '#001834'
                                }
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