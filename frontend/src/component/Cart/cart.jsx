import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { MiContexto } from '../context/contex';
import './cart.css'


function Cart () {

    
    const { cart, deletProductCart} = useContext(MiContexto)

    console.log(cart);
    /*
    const getProduct = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/getProducto/${id}`);
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            console.log('Productos:', response.data);
            return response.data
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    }
    
    */
    
    return (
        <div className='container_carrito'>
            <h2 className='container_carrito_title'>Tu carrito:</h2>
            <div className='container_carrito_products'>
            {
                cart.map( (el, index) => {
                    console.log(el);
                    return (
                        <Card
                            key={index} 
                            w='75%' m={'auto'} mt='25px' display={"flex"} flexDirection={"row"}
                            >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '70px' }}
                                src={el.url}
                                alt='Caffe Latte'
                            />

                            
                            <Grid templateColumns={'repeat(2, 1fr)'} gap={20} margin={'auto'} w='100%'>
                                <Heading size='md' m={3} >{el.name}</Heading>

                                <div className='cart_buttons' >
                                    <Button variant='solid' colorScheme='blue' onClick={ () => deletProductCart(el) } >
                                        delete
                                    </Button>
                                </div>
                            </Grid>
                            
                        </Card>
                    )
                })
            }
            </div>
            <div>
                
            </div>
            
        </div>)


}



export default Cart;