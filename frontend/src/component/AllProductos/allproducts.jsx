import React, { useContext, useEffect, useState } from "react";
import { MiContexto } from "../context/contex";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, LinkBox, LinkOverlay, Menu, MenuButton, MenuItem, MenuList, Stack, Text, grid } from "@chakra-ui/react";

import './allproducts.css'
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";



function Allproductos () {

    const {productos,  setProdusctoID} = useContext(MiContexto)
    const [ tipo, setTipo ] = useState('productos')


    console.log(productos);

    return (
        <div >
            <div>
            <Menu>
                <MenuButton as={Button} backgroundColor={'#ffe4b5'} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Alfombra')  } } >alfombras</MenuItem>
                    <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Impresion') } }>impresion 3D</MenuItem>
                    <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Interior')  } }>interior</MenuItem>
                    <MenuItem fontSize={'15px'} onClick={ async () => { setTipo('Abertura')  } }>Aberturas</MenuItem>
                </MenuList>
            </Menu>
            </div>
            <div className="allproducts_container">
                {productos.map( (el, index) => {
                    if(tipo === 'productos'){
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
                    }else if ( tipo === el.tipo ){
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
                    }
                    
                } )}           
            </div>
        </div>
        
    )
}


export default Allproductos