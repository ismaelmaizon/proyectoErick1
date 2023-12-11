import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MiContexto } from '../context/contex';


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
            {
                cart.map( (el) => {
                    console.log(el);
                    return (
                        <Card
                            w='75%' m={'auto'} mt='25px'
                            >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={el.url}
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                <Heading size='md'>{el.name}</Heading>

                                <Text py='2'>
                                    {el.description}
                                </Text>
                                </CardBody>

                                <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    )
                })
            }
        </div>)


}



export default Cart;