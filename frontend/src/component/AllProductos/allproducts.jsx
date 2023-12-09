import React, { useContext } from "react";
import { MiContexto } from "../context/contex";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, Stack, Text, grid } from "@chakra-ui/react";

import './allproducts.css'



function Allproductos () {

    const {productos,  addCart} = useContext(MiContexto)
    
    function agregarAlCart (id) {
        addCart(id)
    }
    
    console.log(productos);
    return (
        
        <div className="allproducts_container" >{
            productos.map( (el, index) => {
                return (
                    <Card key={index} mb={75} backgroundColor={'#fafad2'} >
                        <CardBody >
                            <Image
                            src={el.url}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>{el.name}</Heading>
                            <Text>
                                { el.description }
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                ${el.price}
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter p={2} >
                            <ButtonGroup w='100%' m='auto' display='flex' flexDirection='row' >
                                <Button variant='solid' colorScheme='blue' color='black' w='75%' fontSize={12} onClick={ async () => agregarAlCart(el._id) } >
                                    Comprar
                                </Button>
                                <Button variant='solid' colorScheme='blue' color='black' w='75%' fontSize={12}>
                                    Detalles
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                )
            } )
        }</div>
        
    )
}


export default Allproductos