import React, { useContext } from "react";
import { MiContexto } from "../context/contex";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, LinkBox, LinkOverlay, Stack, Text, grid } from "@chakra-ui/react";

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
                        <Button h='80%' onClick={ async () => await setProdusctoID(el._id)} >
                            <Link to={'/productDetail'}>
                                <Image
                                    src={`http://localhost:8080/static/${el.url}`}
                                    borderRadius='lg'
                                    />
                                </Link>
                        </Button>
                        
                        <CardFooter p={2} display={"grid"}  >
                            <Heading fontSize='20'>{el.name}</Heading>
                            <Text color='blue.600' fontSize='15'>
                                ${el.price}
                            </Text>
                        </CardFooter>
                    </Card>
                )
            } )
        }</div>
        
    )
}


export default Allproductos