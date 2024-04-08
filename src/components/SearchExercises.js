import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([]);

   
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exercisesOptions);

            const SearchExercises = exercisesData.filter(
                (exercise) => exercise.name.toLocaleLowerCase().includes(search)
                || exercise.Muscles.toLocaleLowerCase().includes(search)
                || exercise.Equipment.toLocaleLowerCase().includes(search)
                || exercise.WorkOut.toLocaleLowerCase().includes(search)
            );

            setSearch('');
            setExercises(SearchExercises);
        }
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography fontWeight='700' sx={{
                fontSize: { lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
                Exercícios que você deveria saber
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                sx={{
                    input: { 
                        fontWeight: '700', 
                        border: 'none', 
                        borderRadius:'5px'
                    },
                    width: { lg: '800px', xs: '350px'}
                }} 
                height='76px'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                placeholder='Procure um exercício'
                type='text'
                />
                <Button className='search-btn' 
                sx={{
                    bgcolor: '#9B3922',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px'},
                    fontSize: { lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}
                onClick={handleSearch}
                >
                    Pesquisar
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises