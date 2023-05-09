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
    let [prompt, setPrompt] = useState(`
    You will act as a computer hardware expert. I will ask you for recommendations of PC builds or Laptops with specific purpose of use and budget. If I ask for "PC", you will answer with 2 recommendations for each part of the PC, along with the pros and cons of each item. If I ask for "Laptops", you will answer with 3 recommendations of laptops, along with the pros and cons each item. If budget is not enough, you can simple reply: recStart = {"error": "Insufficient Budget"} = recEnd
    Your answer will be in the following format for laptops:
    recStart = {"option1": {"name": "some computer name", "pros": "some pros", "cons": "some cons" }, "option2": {"name": "some computer name", "pros": "some pros", "cons": "some cons" }, "option3": {"name": "some computer name", "pros": "some pros", "cons": "some cons" }} = recEnd
    For PC builds, your answer will be in the following format. Remember, isOptional is when the part of the PC is really optional, things like CPU, RAM, Storage,... are mandatory:
    recStart = {"CPU": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }, "GPU": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }, "RAM": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }, "Storage": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }, "PowerSupply": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }, "Case": {"option1": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "option2": {"name": "name of part", "pros": "some pros", "cons": "some cons"}, "isOptional": false }} = recEnd
    REMEMBER: YOU MUST ALWAYS FOLLOW THE ABOVE FORMAT AND GET STRAIGHT TO IT. NO FURTHER RESPONSES FROM YOU SHOULD BE GENERATED.
    Now my input will be like this: input={computer: ${computer}, purpose: ${purpose}, budget: ${budget}}`);
    let [isLoading, setIsLoading] = useState(true);
    let [result, setResult] = useState("");

    // const sampleError = `recStart = {"error": "Insufficient Budget"} = recEnd`
    // const result = `recStart = {"CPU": {"option1": {"name": "AMD Ryzen 3 3100", "pros": "Quad-core, good performance for its price", "cons": "May bottleneck high-end GPUs" }, "option2": {"name": "Intel Core i3-10100", "pros": "Quad-core, good single-core performance", "cons": "No integrated graphics"}}, "GPU": {"option1": {"name": "NVIDIA GeForce GT 1030", "pros": "Affordable, low power consumption", "cons": "Limited VRAM, not suitable for demanding tasks"}, "option2": {"name": "AMD Radeon RX 550", "pros": "Affordable, decent performance for its price", "cons": "May struggle with demanding tasks"}}, "RAM": {"option1": {"name": "Crucial Ballistix 8GB DDR4 3200MHz", "pros": "Affordable, good performance for its price", "cons": "Only 8GB of RAM"}, "option2": {"name": "Corsair Vengeance LPX 16GB DDR4 3000MHz", "pros": "16GB of RAM, good performance", "cons": "More expensive than the other option"}}, "Storage": {"option1": {"name": "Kingston A400 240GB SSD", "pros": "Affordable, good performance for its price", "cons": "Limited storage capacity"}, "option2": {"name": "Crucial MX500 500GB SSD", "pros": "More storage capacity, good performance", "cons": "More expensive than the other option"}}, "PowerSupply": {"option1": {"name": "EVGA 400W", "pros": "Affordable, good for low power systems", "cons": "Not suitable for high power systems"}, "option2": {"name": "Corsair CX450M 450W", "pros": "More power, semi-modular", "cons": "More expensive than the other option"}}, "Case": {"option1": {"name": "Cooler Master MasterBox Q300L", "pros": "Affordable, good airflow", "cons": "Limited cable management options"}, "option2": {"name": "Phanteks Eclipse P300A", "pros": "Good cable management, good airflow", "cons": "More expensive than the other option"}}} = recEnd`
    // const sampleResultLaptop = `recStart = {"option1": {"name": "Acer Aspire 5 A515-56-73AP", "pros": "Affordable price, Intel Core i7-1165G7, 15.6-inch FHD IPS display, 8GB DDR4 RAM, 512GB NVMe SSD", "cons": "No discrete graphics card, limited upgradability options"} , "option2": {"name": "ASUS VivoBook 15 F515 Thin and Light Laptop", "pros": "Affordable price, AMD Ryzen 7 5700U, 15.6-inch FHD display, 8GB DDR4 RAM, 512GB NVMe SSD, Integrated Radeon Graphics", "cons": "No discrete graphics card, limited upgradability options"} , "option3": {"name": "Lenovo Ideapad 3 15.6-inch Laptop", "pros": "Affordable price, Intel Core i5-1135G7, 15.6-inch FHD display, 8GB DDR4 RAM, 256GB SSD, Integrated Intel Iris Xe Graphics", "cons": "No discrete graphics card, limited upgradability options"}} = recEnd`
    // finalResult = (computer === "PC") ? JSON.parse(result.slice(11, result.length - 9).replace(/&quot;/ig, '"')) : (computer === "Laptops") ? JSON.parse(result.slice(11, result.length - 9).replace(/&quot;/ig, '"')) : JSON.parse(result.slice(11, result.length - 9).replace(/&quot;/ig, '"'));

    let finalResult = result ? JSON.parse(result.slice(11, result.length - 9).replace(/&quot;/ig, '"')) : "";

    let handleSubmitPromptBtnClicked = async () => {
        if (prompt !== ``) {
            setIsLoading(true);
            setResult("");
            let url = "https://api.openai.com/v1/chat/completions";
            let data =
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            }
            const getData = async () => {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${API_KEY}`
                        },
                        body: JSON.stringify(data)
                    })
                    const json = await response.json()
                    setResult(json?.choices[0].message.content);

                    setIsLoading(false);
                } catch (error) {
                    console.log('[DEBUG] error =>>', error)

                }
            }
            await getData();
        } else {
            alert("Not enough prompt to process! Try again");
        }
    };

    useEffect(() => {
        handleSubmitPromptBtnClicked();
    }, []);

    return (
        <>
            <Header></Header>
            <AIsubtitle></AIsubtitle>
            <Container component='main' disableGutters maxWidth='xl'
                sx={{ background: '#FAFBFE', display: 'flex', flexDirection: 'column', marginBottom: '15rem', paddingTop: '90px', paddingBottom: '90px' }}>
                <Typography component='div' sx={{
                    color: '#000000',
                    fontWeight: '700',
                    fontSize: '48px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    marginBottom: '36px'
                }}>Your results!</Typography>

                {
                    (isLoading) ? <p>...loading</p> :
                        (computer === "PC") ?
                            <Grid container
                                direction='column'
                                justifyContent='center'
                                alignItems='start'
                                sx={{
                                    marginY: '3.5rem',
                                    paddingLeft: '35%'
                                }}
                                spacing={1}
                            >
                                {Object.entries(finalResult).map((key, number) => {
                                    console.log(Object.entries(finalResult));
                                    return (
                                        <Grid item key={number}>
                                            <p style={{ color: '#000000', fontFamily: 'Inter', fontWeight: 700, fontSize: '32px', textTransform: 'capitalize' }}>
                                                {number + 1}. {key[0]}
                                            </p>
                                            {Object.entries(key[1]).map((option, index) => {
                                                return (
                                                    ((index === 2))
                                                        ?
                                                        <p style={{ fontSize: '18px', color: '#000000', fontFamily: 'Inter', fontWeight: 600 }}> {(option[2]?.isOptional) && `This is not require`} </p>
                                                        :
                                                        <Box key={index} sx={{ padding: '8px', color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', textTransform: 'capitalize' }}>
                                                            <p style={{ fontSize: '18px' }}> Option {index + 1}: {option[1].name}

                                                            </p>
                                                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '8px' }}>
                                                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 300, fontSize: '16px' }}>
                                                                    <b>Pros:</b> {option[1].pros}
                                                                </Typography>
                                                                <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 300, fontSize: '16px' }}>
                                                                    <b>Cons:</b> {option[1].cons}
                                                                </Typography>
                                                            </Box>
                                                            <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                                                <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                                                <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                                            </Stack>
                                                        </Box>
                                                )
                                            })}
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            : (computer === "Laptops") ?
                                <Grid container
                                    direction='column'
                                    justifyContent='center'
                                    alignItems='start'
                                    sx={{
                                        marginY: '3.5rem',
                                        paddingLeft: '15%'
                                    }}
                                    spacing={1}
                                >
                                    {Object.keys(finalResult).map((key, number) => {
                                        return (
                                            <Grid item key={number}>
                                                <p style={{ color: '#000000', fontFamily: 'Inter', fontWeight: 700, fontSize: '32px', textTransform: 'capitalize' }}>
                                                    {number + 1}. {finalResult[key].name}
                                                </p>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '8px' }}>
                                                    <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 300, fontSize: '16px' }}>
                                                        <b>Pros:</b> {finalResult[key].pros}
                                                    </Typography>
                                                    <Typography component='div' variant='body1' sx={{ color: '#000000', fontFamily: 'Inter', fontWeight: 300, fontSize: '16px' }}>
                                                        <b>Cons:</b> {finalResult[key].cons}
                                                    </Typography>
                                                </Box>
                                                <Stack spacing={4} direction="row" sx={{ marginLeft: '16px' }}>
                                                    <Button variant='contained' size='small' sx={{ background: '#2DA7FF' }}>See details</Button>
                                                    <Button variant='contained' size='small' sx={{ background: '#38A169' }}>Buy now</Button>
                                                </Stack>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                : <p> Error </p>
                }
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
            <Footer></Footer>
        </>
    )
}

export default AIProgess4