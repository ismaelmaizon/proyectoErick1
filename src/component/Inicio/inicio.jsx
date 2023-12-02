import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import './inicio.css'
import { ArrowDownIcon } from '@chakra-ui/icons'

function Inicio() {

    return (
        <div className="container_Inicio">

            <Card
                borderColor='#242424'
                backgroundColor='#242424'
                w='80%'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={"auto"}
                mt='35px'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://i.ibb.co/RSN9FZq/Whats-App-Image-2023-11-29-at-11-16-49.jpg'
                    alt='Caffe Latte'
                />

                <Stack color={"white"}>
                    <CardBody color={"white"} >
                        <Heading size='md'>Ismael Maizon</Heading>

                        <Text py='2'>
                            Estudiante de Ing. en Sitemas
                        </Text>
                        <Text py='2'>
                            Hola que tal?
                        </Text>
                        <Text py='2'>
                            ¡Agradesco tu interes en mi perfil!. ¿Quieres conocer más?
                        </Text>
                    <ArrowDownIcon fontSize={'30px'} />
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Saber más
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <div className="container_Skills" >
                <h1 className="container_Skills_h1" >skills...</h1>
            </div>
            <Tabs variant='soft-rounded' colorScheme='green' display={"flex"} flexDirection={"column"} alignItems={"center"} >
                <TabList  >
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>Js</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoBD</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <Card
                        borderColor='#242424'
                        backgroundColor='#242424'
                        w='80%'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={"auto"}
                        mt='35px'
                        >
                        <Image
                            borderRadius={'15px'}                            
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/D5rP8qF/html-5-html-5-logo-wallpaper-preview.jpg'
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody color={"white"} >
                                <Heading size='md'>HTML (HyperText Markup Language)</Heading>

                                <Text py='2'>
                                Estructura de la página web.
                                </Text>
                                <Text py='2'>
                                Semántica.
                                </Text>
                                <Text py='2'>
                                Compatibilidad y estándares (actualmente HTML5).
                                </Text>
                                <Text py='2'>
                                Formularios y validación.
                                </Text>
                                
                            </CardBody>
                        </Stack>
                    </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card
                        borderColor='#242424'
                        backgroundColor='#242424'
                        w='80%'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={"auto"}
                        mt='35px'
                        >
                       <Image
                            borderRadius={'15px'}                            
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/WvGVv4w/css.png'
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody color={"white"} >
                                <Heading size='md'>CSS (Cascading Style Sheets)</Heading>

                                <Text py='2'>
                                Estilización y diseño.
                                </Text>
                                <Text py='2'>
                                Responsive Web Design (en combinacion con HTML)
                                </Text>
                                <Text py='2'>
                                Compatibilidad y estándares (actualmente HTML5).
                                </Text>
                                <Text py='2'>
                                Reutilización y consistencia de estilos
                                </Text>
                                <Text py='2'>
                                Animaciones y efectos
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card
                        borderColor='#242424'
                        backgroundColor='#242424'
                        w='80%'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={"auto"}
                        mt='35px'
                        >
                        <Image
                            borderRadius={'15px'}
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/r7xLWqB/javascript.jpg'
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody color={"white"} >
                                <Heading size='md'>JavaScript</Heading>

                                <Text py='2'>
                                Manipulación del DOM.
                                </Text>
                                <Text py='2'>
                                Eventos y manejo de acciones del usuario.
                                </Text>
                                <Text py='2'>
                                Comunicación asincrónica.
                                </Text>
                                <Text py='2'>
                                Manejo de errores y debugging.
                                </Text>
                                <Text py='2'>
                                Seguridad
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card
                        borderColor='#242424'
                        backgroundColor='#242424'
                        w='80%'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={"auto"}
                        mt='35px'
                        >
                        <Image
                            borderRadius={'15px'}
                            h={'200'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/Jryy82Z/react.jpg'
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody color={"white"} >
                                <Heading size='md'>React</Heading>

                                <Text py='2'>
                                Virtual DOM.
                                </Text>
                                <Text py='2'>
                                Estado (state) y ciclo de vida (lifecycle).
                                </Text>
                                <Text py='2'>
                                Herramientas y biblioteca.
                                </Text>
                                <Text py='2'>
                                Manejo de errores y debugging.
                                </Text>
                                <Text py='2'>
                                React Hooks
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card
                        borderColor='#242424'
                        backgroundColor='#242424'
                        w='80%'
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={"auto"}
                        mt='35px'
                        >
                        <Image
                            borderRadius={'15px'}
                            h={'200px'}
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://i.ibb.co/X35FFtz/mongo.png'
                            alt='Caffe Latte'
                        />
                        <Stack>
                            <CardBody color={"white"} >
                                <Heading size='md'>Mongodb</Heading>

                                <Text py='2'>
                                Sistema de base de datos NoSQL.
                                </Text>
                                <Text py='2'>
                                Modelo de datos flexible.
                                </Text>
                                <Text py='2'>
                                Escalabilidad.
                                </Text>
                                <Text py='2'>
                                Alto rendimiento.
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
        </div>
    )
  }
  
  export default Inicio