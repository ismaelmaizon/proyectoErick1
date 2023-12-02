import React from "react";
import { Button, Grid, GridItem, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'
import './navBar.css'


function NavBar() {

    return (
        <Grid w='100%' h='70px' templateColumns='repeat(3, 1fr)' gap={2} >
            <div className="container_select">
                <h1 className="container_select_box" >Developer</h1>
            </div>
            <div className="container_select">

            </div>
            <div className="container_select">
                <Stack direction='row' spacing={4} align='center' className="container_select_box">
                    <Button colorScheme='teal' variant='solid'>
                        Button
                    </Button>
                    <Button colorScheme='teal' variant='solid'>
                        Button
                    </Button>
                    <Button colorScheme='teal' variant='solid'>
                        Button
                    </Button>
                </Stack>
            </div>
        </Grid>
    )
  }
  
  export default NavBar