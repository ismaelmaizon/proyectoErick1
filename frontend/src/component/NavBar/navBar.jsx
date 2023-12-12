import React from "react";
import {Grid, GridItem, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'
import './navBar.css'
import { Link, Route } from "react-router-dom";

//form
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

//icons

import { ChevronDownIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { BsCartCheck } from "react-icons/bs";


//menu

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { redirect } from "react-router-dom";
import Cart from "../Cart/cart";


function NavBar() {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
    }

    return (
        <Grid w='100%' h='70px' templateColumns='repeat(3, 1fr)' gap={2} backgroundColor={'#fafad2'}>
            <div className="container_select">
                <Link className="container_select_box" to='/'>
                    <h1>AtelierBodereau</h1>
                </Link>
            </div>
            <div className="container_select">
                <form onSubmit={handleSubmit(onSubmit)} className="container_select_form">
                    <FormControl isInvalid={errors.name}>
                        <Input
                        w={'90%'} 
                        color={"black"}
                        id='producto'
                        placeholder='ingrese nombre del producto'
                        {...register('producto', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                        />
                        <FormErrorMessage>
                        {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button colorScheme='teal' type='submit'><SearchIcon/>
                    </Button>
                </form>
            </div>
            <div className="container_select">
                <Stack direction='row' spacing={4} align='center' className="container_select_box">
                    <Button backgroundColor={'#ffe4b5'} variant='solid'>
                        Inicio
                    </Button>
                    <Menu>
                        <MenuButton as={Button} backgroundColor={'#ffe4b5'} rightIcon={<ChevronDownIcon />}>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem fontSize={'15px'} >alfombras</MenuItem>
                            <MenuItem fontSize={'15px'} >impresion 3D</MenuItem>
                            <MenuItem fontSize={'15px'} >interior</MenuItem>
                            <MenuItem fontSize={'15px'} >Aberturas</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button backgroundColor={'#ffe4b5'} variant='solid'>
                        Novedades
                    </Button>
                    <Link to= '/Cart'>
                        <Button backgroundColor={'#ffe4b5'} variant='solid' >
                            <BsCartCheck />
                        </Button>
                    </Link>
                    
                </Stack>
            </div>
        </Grid>
    )
}

export default NavBar