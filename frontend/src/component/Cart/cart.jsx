import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { MiContexto } from '../context/contex';
import './cart.css'
import axios from 'axios';


function Cart () {

    
    const { dashBoard} = useContext(MiContexto)

    const [cart, setCart] = useState([])

    //eliminar producto del carrito
    const deletProductCart = async ( producto) => {
        let cart2 = []
        cart.map( (el) => {
            if (el._id != producto._id) {
                cart2.push(el)
            } 
        })
        setCart(cart2)
    }
    
    useEffect( ()=>{
        console.log('dashboarad:');
        console.log(dashBoard);
        setCart(dashBoard.cart)
        console.log(cart);
    } , [] )
    
    
    
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
                                    src={`http://localhost:8080/static/${el.url}`}
                                    alt='Caffe Latte'
                                />
                                <Grid templateColumns={'repeat(2, 1fr)'} gap={20} margin={'auto'} w='100%'>
                                    <Heading size='md' m={3} >{el.name}</Heading>

                                    <h2> cantidad: {el.quiantity} </h2>
                                    <h2> Sub total:  { el.totalParcial } </h2>
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
                <h1>
                    Total: {dashBoard.total}
                </h1>
                <Button variant='solid' colorScheme='blue' onClick={async () =>  {
                    /*
                    upDateCart(cart);
                    const newCart = {
                        name: 'Isma Prueba',
                        lastName: 'Maizon Prueba',
                        email: 'Isma@gmail.com',
                        cellphone: 351252525,
                        total: total,
                        products: cart
                    }
                    try {
                        const response = await axios.post('http://localhost:8080/api/auth/crearCarrito', newCart);
                        console.log('Carrito creado:', response.data);
                      } catch (error) {
                        console.error('Error al crear el producto:', error);
                      }*/
                } } >
                    concretar compra
                </Button>
            </div>
        </div>)


}



export default Cart;