import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactConte from 'sweetalert2-react-content'
import axios from "axios";
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import './productDetail.css';
import { MiContexto } from "../context/contex";
import { useNavigate } from "react-router-dom";



function ProductDetail() {

    const router = useNavigate()


    //usuario
    const { user } = useContext(MiContexto)


    //constador de productos
    const [cont, setCont] = useState(1)
    
    function sumCont () {
        setCont(cont+1)
    };
    
    function resCont () {
        if (cont-1 <= 1) {
            setCont(1)
        }else{
            setCont(cont-1)
        }
    }
    
    
    //contexto
    const {productoId, producto, getProduct, cartID} = useContext(MiContexto)
        
    //agregar al carrito
    
    const addCart = async ( productoId, cartID, num) => {
        const formData = new FormData();
        formData.append('num', num);
        try {
            const response = await axios.post(`http://localhost:8080/api/auth/carts/${cartID}/product/${productoId}`,formData, {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            return response.data
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    }
        
    //sweetAlert2    
    const alertAgregarCarrito = async () => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "el producto se agrego al carrito",
            showConfirmButton: false,
            timer: 1500
          });
    }

    let response = {}
    
    const verificacionLogin = async (response) => {
        await Swal.fire({
            title: "para poder agregar un producto, es necesario Iniciar Sesion",
            showDenyButton: true,
            denyButtonText: 'no estoy interesado',
            showConfirmButton: true,
            confirmButtonText: "Iniciar Sesion"
          }).then( (result) => {
            console.log(result);
            response = result
          });
        return response
    }

    
    useEffect( ()=> {
        getProduct(productoId)
        console.log('info cart:');
        console.log(cartID);
    }, [])
    
    //Logs
    console.log( 'productID: ' + productoId);
    console.log( 'product: ' + producto);

    return (
        <div>
            <h1 className="formulario_title"> Detalles de tu Producto </h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={`http://localhost:8080/static/${producto.url}`}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'> {producto.name} </Heading>
                    <Heading mt={5} size='md'> precio:  ${producto.price} </Heading>

                    <Text py='2'>
                        {producto.description}
                    </Text>
                    </CardBody>
                    <div className='cart_buttons' >
                        <div className='cart_buttons_cont' >
                            <Button variant='solid' colorScheme='blue' onClick={ () => resCont()}>
                                -
                            </Button>
                            <h3>{cont}</h3>
                            <Button variant='solid' colorScheme='blue' onClick={ () => sumCont()}>
                                +
                            </Button>
                        </div>
                    </div>
                    <CardFooter>
                    <Button variant='solid' colorScheme='blue' onClick={ async () =>  {
                        if (user.user === 'null'  ){
                                const res = await verificacionLogin(response)
                                console.log('redirect:' + res);
                                console.log(res);
                                if (res.isConfirmed){
                                    console.log('confir:');
                                    console.log(res.isConfirmed);
                                    router('/login')
                                } else if (res.isDenied){
                                    router('/')
                                }
                            } else {
                                const res = await addCart(productoId, cartID, cont);
                                console.log(res);
                                if(res.ok === true){
                                    alertAgregarCarrito();
                                    router('/')
                                }
                                
                            }
                    } } >
                        Agregar a carrito
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}



export default ProductDetail