import React, { useState, useRef, useEffect } from 'react'
import { SSE } from "sse.js";
import { Container, Grid, Typography, Link, Button, TextField, InputAdornment, Avatar } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
import money from '../../images/money.png'
const AIProgess3 = () => {
    const API_KEY = "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";
    let [prompt, setPrompt] = useState("What is AI");
    let [isLoading, setIsLoading] = useState(false);
    let [result, setResult] = useState("");

    const resultRef = useRef();

    useEffect(() => {
        resultRef.current = result;
    }, [result]);

    let handleSubmitPromptBtnClicked = async () => {
        if (prompt !== "") {
            setIsLoading(true);
            setResult("");
            let url = "https://api.openai.com/v1/completions";
            let data = {
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.75,
                top_p: 0.95,
                max_tokens: 100,
                stream: true,
                n: 1,
            };

            let source = new SSE(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                method: "POST",
                payload: JSON.stringify(data),
            });

            source.addEventListener("message", (e) => {
                if (e.data !== "[DONE]") {
                    let payload = JSON.parse(e.data);
                    let text = payload.choices[0].text;
                    if (text !== "\n") {
                        console.log("Text: " + text);
                        resultRef.current = resultRef.current + text;
                        console.log("ResultRef.current: " + resultRef.current);
                        setResult(resultRef.current);
                    }
                } else {
                    source.close();
                }
            });

            source.addEventListener("readystatechange", (e) => {
                if (e.readyState >= 2) {
                    setIsLoading(false);
                }
            });

            source.stream();
        } else {
            alert("Please insert a prompt!");
        }
    };
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
            <Button variant='contained' sx={{
                color: '#FFFFFF', background: '#001834',
                border: '1px solid #001834',
                borderRadius: '4px',
                marginTop: '16px'
            }}
                onClick={handleSubmitPromptBtnClicked}>AI</Button>
            <Footer></Footer>
        </>
    )
}

export default AIProgess3