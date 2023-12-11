import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MiContexto } from '../context/contex';
import './cart.css'


function Cart () {

    
    const { cart} = useContext(MiContexto)


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

                            <Stack>
                                <CardBody display={"flex"} flexDirection={"row"} gap={300}>
                                    <Heading size='md'>{el.name}</Heading>

                                    <div>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy Latte
                                        </Button>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy Latte
                                        </Button>
                                    </div>
                                </CardBody>
                            </Stack>
                        </Card>
                    )
                })
            }
            </div>
            
        </div>)


}



export default Cart;