import React, { useContext } from "react";
import { MiContexto } from "../context/contex";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, Stack, Text, grid } from "@chakra-ui/react";

import './allproducts.css'
import { Link } from "react-router-dom";



function Allproductos () {

    const {productos,  addCart,  
        setProdusctoID} = useContext(MiContexto)
    
    console.log(productos);

    const info = (req, res) => {
        console.log(req.body);
    }

    

    return (
        
        <div className="allproducts_container" >{
            productos.map( (el, index) => {
                return (
                    <Card key={index} mb={75} backgroundColor={'#fafad2'} >
                        <CardBody >
                            <Image
                            src={`http://localhost:8080/static/${el.url}`}
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
                            <Button variant='solid' colorScheme='blue' color='black' w='75%' fontSize={12} onClick={ async () => setProdusctoID(el._id)} >
                                <Link to={'/productDetail'} > Detalles </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                )
            } )
        }</div>
        
    )
}


export default Allproductos