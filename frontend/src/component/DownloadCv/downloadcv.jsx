import React, { useContext } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
} from '@chakra-ui/react'
import './downloadcv.css'



function downloadcv() {
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm()
    
    /*
    function onSubmit(values) {
        return new Promise((resolve) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
        }, 3000)
        })
    }*/

    //Logs
    console.log(getValues());
    return (
        <div>
            <h1 className="formulario_title">download CV</h1>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting}>
                <a download={'miCvPrueba'} href="../Cv/CV Ismael maizon .pdf">Descargar CV</a>
            </Button>
        </div>
    )
}



export default downloadcv