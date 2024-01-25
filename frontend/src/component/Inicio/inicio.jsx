import {Button, Card, CardBody, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import './inicio.css'
import { Link } from "react-router-dom";

import Allproductos from "../AllProductos/allproducts";
import { MiContexto } from "../context/contex";

function Inicio() {

    const { cookie } = useContext(MiContexto)

    console.log('cookie: ');
    console.log(cookie);
    let user = {
        user : cookie.data.email,
        password: cookie.data.password,
        role: cookie.data.role
    }

    const guardarCookieEnNavegador = () => {
        // Configura la cookie con un nombre y el valor de la constante cookie
        document.cookie = `miCookie=${user.role}`;
    };

    useEffect(()=>{
        console.log('data:');
        console.log(cookie.data);
        console.log(cookie.data.email);
        guardarCookieEnNavegador()
    } , [] )

    return (
    

        <div className="container_Inicio">
            <div className="container_Skills" >
                <h1 className="container_Skills_h1" >Productos</h1>
            </div>
            <Tabs variant='soft-rounded' colorScheme='green' display={"flex"} flexDirection={"column"} alignItems={"center"} >
                <TabList  >
                    <Tab>Alfombras</Tab>
                    <Tab>Impresiones 3D</Tab>
                    <Tab>Interior</Tab>
                    <Tab>Aberturas</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel>
                        <Card
                            borderColor='#fafad2'
                            backgroundColor={'#fafad2'}
                            w='80%'
                            //overflow='hidden'
                            //variant='outline'
                            m={"auto"}
                            mt='15px'
                            >
                            <CardBody color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                                <Heading size='md'>Alfombras</Heading>
                                <Image
                                borderRadius={'15px'}  
                                h={'350px'}
                                w={'350px'}
                                objectFit='cover'
                                src='https://i.ibb.co/YDd3RPp/alfombras4.jpg'
                                alt='Caffe Latte'
                                />
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card
                            borderColor='#fafad2'
                            backgroundColor={'#fafad2'}
                            w='80%'
                            //overflow='hidden'
                            //variant='outline'
                            m={"auto"}
                            mt='15px'
                            >
                            <CardBody color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                                <Heading size='md'>Impresiones 3D</Heading>
                                <Image
                                borderRadius={'15px'}  
                                h={'350px'}
                                w={'350px'}
                                objectFit='cover'
                                src='https://s.yimg.com/ny/api/res/1.2/TJNmmq2Vv8ZXKv6CSwhCpg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2023-03/ec6ca1d0-c1bf-11ed-bbf7-d3531bc5f390'
                                alt='Caffe Latte'
                                />
                                
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card
                            borderColor='#fafad2'
                            backgroundColor={'#fafad2'}
                            w='80%'
                            //overflow='hidden'
                            //variant='outline'
                            m={"auto"}
                            mt='15px'
                            >
                            <CardBody color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                                <Heading size='md'>Interior</Heading>
                                <Image
                                borderRadius={'15px'}  
                                h={'350px'}
                                w={'350px'}
                                objectFit='cover'
                                src='https://i.ibb.co/Srcrf1h/silla1.jpg'
                                                                
                                alt='Caffe Latte'
                                />
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card
                            borderColor='#fafad2'
                            backgroundColor={'#fafad2'}
                            w='80%'
                            //overflow='hidden'
                            //variant='outline'
                            m={"auto"}
                            mt='15px'
                            >
                            <CardBody color={"black"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
                                <Heading size='md'>Aberturas</Heading>
                                <Image
                                borderRadius={'15px'}  
                                h={'350px'}
                                w={'350px'}
                                objectFit='cover'
                                src='https://i.ibb.co/82hBxRy/puff2.jpg'                                
                                alt='Caffe Latte'
                                />
                                
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </Tabs>
            <Button display={"flex"} m={"auto"} p={25} backgroundColor={'#ffe4b5'} >
                    <Link to={'/addproducto'} >Agregar nuevo producto</Link>
            </Button>
            <h1>AllProducts</h1>
            <Allproductos/>
        </div>

    )
  }
  
  export default Inicio