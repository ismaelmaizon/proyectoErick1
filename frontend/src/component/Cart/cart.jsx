import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import react, { useState } from 'react';
import { useContext } from 'react';
import { MiContexto } from '../context/contex';
import axios from 'axios';
import { useEffect } from 'react';



function Cart () {

    
    const { cart} = useContext(MiContexto)
    const [cart2, setCart2 ] = useState([])


    console.log(cart);

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
    
    useEffect( () => {
        cart.map( (el) => {
            cart2.push(getProduct(el))
            console.log(cart2);
        });
        setCart2(cart2);

    }, [] )
    
    return (
        <div>{
            
            cart2.map( (el, idex) => {
                console.log('cart');
                console.log(el);
                <Card key = {idex}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'>
                <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={el.url}
                alt='Caffe Latte'
                />
            
                <Stack>
                <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                
                        <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                        </Text>
                    </CardBody>
                    
                    <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
                </Card>
            })
            
               
            }
           
           
            
           </div>
           )


}



export default Cart;