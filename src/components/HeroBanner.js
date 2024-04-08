import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBanerImage from '../assets/images/banner-1.jpeg'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px'}, ml: { sm: '50px'}
        }} position='relative' p='20px'>
            <Typography color='#9B3922' fontWeight='600' fontSize='26px'>
                Muscle Tips
            </Typography>
            <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px'}}}>
                Treine, Execute <br/> e Repita!
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb="20px">
                Confira os exercícios mais eficazes...
            </Typography>
            <Button variant="contained" color="error" href='#exercises'>Explore os Exercícios</Button>
            <Typography
                fontWeight='600'
                color='#000'
                sx = {{
                    opacity: 0.0,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize='200px'
            >
                Exercite-se 
            </Typography>
            <img src={HeroBanerImage} alt='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner