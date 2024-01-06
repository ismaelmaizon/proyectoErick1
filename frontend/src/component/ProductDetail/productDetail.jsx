import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import {
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Grid,
} from '@chakra-ui/react'
import './productDetail.css'
import { MiContexto } from "../context/contex";



function ProductDetail() {


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


    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm()

    //contexto
    const {productoId, producto, getProduct} = useContext(MiContexto)
    

    
    useEffect( ()=> {
        getProduct(productoId)
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
                    <Button variant='solid' colorScheme='blue'>
                        Agregar a carrito
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
            
        </div>
    )
}



export default ProductDetail