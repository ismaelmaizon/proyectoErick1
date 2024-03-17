import {Button, Card, CardBody, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import './inicio.css'
import { Link } from "react-router-dom";

import Allproductos from "../AllProductos/allproducts";
import { MiContexto } from "../context/contex";
import axios from "axios";

function Inicio() {

    const { user, setUser ,  getCart, cartID, cart, setCartID } = useContext(MiContexto)

    const [ session, setSession ] = useState('sesion expiró')

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/getuser', {withCredentials: true});
            // Manejar la respuesta del servidor y actualizar el estado con los productos obtenidos
            console.log('getUser:', response.data);
            console.log('getUserEmail:', response.data.email);
            console.log('getUserCart:', response.data.cart);
            setUser(response.data.email)
            setSession(`hola ${response.data.name}`)
            setCartID(response.data.cart)
            getCart(response.data.cart)

            return ({ status: 200 })


        } catch (error) {
            console.error('Error al obtener los productos:', error);
            return ({ status: 400 })
        }
    }

    console.log('user: ');
    console.log(user);

    

    useEffect(()=>{
        console.log('data:');
        console.log(user);
        console.log(user.email);
        console.log('cart:');
        console.log(cart);
        getUser()

    } , [] )

    return (
    

        <div className="container_Inicio">
            <div>
                <h2> { session } </h2>
            </div>
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
            <Allproductos/>
        </div>

    )
  }
  
  export default Inicio