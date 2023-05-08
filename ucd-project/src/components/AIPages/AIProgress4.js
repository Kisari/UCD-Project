import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { SSE } from "sse.js";
import { Container, Grid, Typography, Link, Button, Box, Stack } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AIsubtitle from './AIsubtitle'
const AIProgess4 = () => {
    const API_KEY = "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";
    let { computer, purpose, budget } = useParams();
    let [prompt, setPrompt] = useState(`You will act as a computer hardware expert. I will ask you for recommendations of PC builds or Laptops with specific purpose of use and budget. If I ask for "PC", you will answer with 2 recommendations for each part of the PC, along with the pros and cons of each item. If I ask for "Laptops", you will answer with 3 recommendations of laptops, along with the pros and cons each item. If budget is not enough, you can simple reply: recStart = {error: "Insufficient Budget"} = recEnd
Your answer will be in the following format for laptops:
recStart = {option1: {name: "some computer name", pros: "some pros", cons: "some cons" }, option2: {name: "some computer name", pros: "some pros", cons: "some cons" }, option3: {name: "some computer name", pros: "some pros", cons: "some cons" }} = recEnd
For PC builds, your answer will be in the following format. Remember, isOptional is when the part of the PC is really optional, things like CPU, RAM, Storage,... are mandatory:
recStart = {CPU: {option1: {name: "name of part", pros: "some pros", cons: "some cons"}, option2: {name: "name of part", pros: "some pros", cons: "some cons"}, isOptional: false }, GPU: {option1: {name: "name of part", pros: "some pros", cons: "some cons"}, option2: {name: "name of part", pros: "some pros", cons: "some cons"} , isOptional: false }, RAM: {option1: {name: "name of part", pros: "some pros", cons: "some cons"}, option2: {name: "name of part", pros: "some pros", cons: "some cons"}, isOptional: false }, Storage: {option1: {name: "name of part", pros: "some pros", cons: "some cons"}, option2: {name: "name of part", pros: "some pros", cons: "some cons"}, isOptional: false }, PowerSupply: {option1: {name: "name of part", pros: "some pros", cons: "some cons"}, option2: {name: "name of part", pros: "some pros", cons: "some cons"}, isOptional: false }, Case: {option1: {name: "name of part", pros: "some pros", cons: "some cons" }, option2: {name: "name of part", pros: "some pros", cons: "some cons"}, isOptional: false }} = recEnd
REMEMBER: YOU MUST ALWAYS FOLLOW THE ABOVE FORMAT AND GET STRAIGHT TO IT. NO FURTHER RESPONSES FORM YOU SHOULD BE GENERATED.
Now my input will be like this: input={computer: "${computer}", purpose: "${purpose}", budget: "$${budget}"}`);
    let [isLoading, setIsLoading] = useState(true);
    let [result, setResult] = useState("");
    const resultRef = useRef();

    const sampleResult = `recStart = {CPU: {option1: {name: "AMD Ryzen 5 3600", pros: "6 Cores/12 Threads, unlocked multiplier, high clock speed", cons: "Expensive"}, option2: {name: "Intel Core i5-10600K", pros: "6 Cores/12 Threads, unlocked multiplier, overclocking capable", cons: "Pricey"}, isOptional: false }, GPU: {option1: {name: "Nvidia GeForce RTX 2070 Super", pros: "Excellent performance, 8GB GDDR6 VRAM, Ray Tracing", cons: "High power consumption"}, option2: {name: "AMD Radeon RX 5700 XT", pros: "Decent performance, 8GB GDDR6 VRAM, Ray Tracing capable", cons: "Lower performance compared to Nvidia GeForce RTX 2070 Super"}, isOptional: false }, RAM: {option1: {name: "G.Skill TridentZ RGB 32GB DDR4-3200", pros: "High quality RAM with RGB lights, great performance", cons: "Costly"}, option2: {name: "Corsair Vengeance LPX 16GB DDR4-3200", pros: "High quality RAM, great performance, affordable price", cons: "None"}, isOptional: false }, Storage: {option1: {name: "Samsung 970 Evo Plus 1TB M.2 NVMe SSD", pros: "Incredibly fast, 1TB storage, great for booting up OS", cons: "Expensive"}, option2: {name: "Seagate Barracuda 2TB HDD", pros: "Large storage capacity, affordable price", cons: "Slower than SSD"}, isOptional: false }, PowerSupply: {option1: {name: "EVGA SuperNova G3 750W", pros: "High quality power supply, fully modular, 80+ Gold certified", cons: "Costly"}, option2: {name: "Corsair RM650x 650W", pros: "Reliable power supply, fully modular, 80+ Gold certified", cons: "None"}, isOptional: false }, Case: {option1: {name: "NZXT H510", pros: "High quality, tempered glass panel, great cable management options", cons: "Expensive"}, option2: {name: "Corsair Carbide 275Q", pros: "High quality, quiet operation, great cable management options", cons: "None"}, isOptional: false }} = recEnd`
    const finalReulst = JSON.parse(sampleResult.slice(11, sampleResult.length - 9).replace(/&quot;/ig, '"'));
    console.log(finalReulst);

    useEffect(() => {
        resultRef.current = result;
    }, [result]);

    let handleSubmitPromptBtnClicked = async () => {
        if (prompt !== ``) {
            setIsLoading(true);
            setResult("");
            let url = "https://api.openai.com/v1/completions";
            let data = {
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.75,
                top_p: 0.95,
                max_tokens: 2000,
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

            source.addEventListener("message", async (e) => {
                if (e.data !== "[DONE]") {
                    let payload = JSON.parse(e.data);
                    let text = payload.choices[0].text;
                    if (text !== "\n") {
                        resultRef.current = resultRef.current + text;
                        setResult(resultRef.current);
                    }
                } else {
                    source.close();
                    console.log(resultRef.current);
                }
            });

            source.addEventListener("readystatechange", (e) => {
                if (e.readyState >= 2) {
                    setIsLoading(false);
                }
            });

            source.stream();
        } else {
            alert("Not enough prompt to process! Try again");
        }
    };

    // useEffect(() => {
    //     handleSubmitPromptBtnClicked();
    // }, []);

    return (
        isLoading ? <p>...loading</p> :
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
                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                </Stack>
                            </Box>
                            <Box sx={{ display: 'flex', padding: '12px' }}>
                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                    ASUS ROG Zephyrus S GX701
                                </Typography>
                                <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                </Stack>
                            </Box>
                            <Box sx={{ display: 'flex', padding: '12px' }}>
                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                    ASUS ROG Zephyrus G14
                                </Typography>
                                <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                </Stack>
                            </Box>
                            <Box sx={{ display: 'flex', padding: '12px' }}>
                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                    ASUS ROG Strix G17 (G712)
                                </Typography>
                                <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                </Stack>
                            </Box>
                            <Box sx={{ display: 'flex', padding: '12px' }}>
                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', textTransform: 'capitalize' }}>
                                    ASUS ROG Zephyrus Duo 15 (GX550)
                                </Typography>
                                <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'>
                        <Grid item>
                            <Link href={`/AI/assistant/3/${computer}/${purpose}`} underline="none">
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
                <p>{resultRef.current}</p>
                <Footer></Footer>
            </>
    )
}

export default AIProgess4