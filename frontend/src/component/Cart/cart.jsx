import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { MiContexto } from '../context/contex';
import './cart.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';



function Cart () {
    
    
    initMercadoPago('TEST-08d56d99-cf75-400a-9b5e-25195970d65d', { locale: 'es-AR' });

    const router = useNavigate()
    
    const { dashBoard, cartID, user} = useContext(MiContexto)

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(dashBoard.total)
    
    const [preferenceId, setpreferenceId] = useState(null)


    //concretar venta 
    const registrarVenta = async (cart, total, user) => {
        let body = {
            title: `carrito de : ${user}`,
            products: cart,
            total: total
        }
        
        try {
            const response = await axios.post(`http://localhost:8080/api/auth/registrarVenta`, body, {withCredentials: true});
            console.log('registrar venta:', response);
            console.log('registrar venta2:', response.data);
            const { id } = response.data.pago
            console.log('id: ');
            console.log(id);
            return id
        } catch (error) {
            console.log('Error al registrar venta', error);
        }
    }

    const andleBuy = async (cart, total, user) => {
        const id = await registrarVenta(cart, total, user)
        console.log('respuesta id: ');
        console.log(id);
        if (id){
            setpreferenceId(id)
        }
    }

    //actualizar carrito
    const upDateCart = async ( cartID , cartUpdate) => {
        try {
            console.log(cartID);
            const response = await axios.post(`http://localhost:8080/api/auth/carts/${cartID}`, cartUpdate, {withCredentials: true});
            console.log('actualizacion:', response);
            return response
        } catch (error) {
            console.log('Error al actalizar cart:', error);
        }
    }

    //eliminar producto del carrito
    const deletProductCart = async ( producto) => {
        let total = 0
        let cart2 = []
        cart.map( (el) => {
            if (el._id != producto._id) {
                cart2.push(el)
            } 
        })
        setCart(cart2)
        cart2.map( (p) =>{ total += p.totalParcial  })
        setTotal(total)
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
                    Total: {total}
                </h1>
                <Button variant='solid' colorScheme='blue' onClick={ async () => {
                    const res = await andleBuy(cart, total, user)
                    console.log(res);
                    if(res.status == 200){
                        router('/')
                    }
                } } >
                    concretar compra
                </Button>
               
                <Button variant='solid' colorScheme='blue'>
                    volver
                </Button>
                <Button variant='solid' colorScheme='blue' onClick={ async () => {
                    const res = await upDateCart(cartID, cart)
                    console.log(res);
                    if(res.status == 200){
                        router('/')
                    }
                }}>
                    guardar cambios
                </Button>
            </div>
        </div>)


}

/*  {preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />}  */ 

export default Cart;