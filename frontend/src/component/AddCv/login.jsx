import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'
import { Link, useNavigate} from "react-router-dom";
import './login.css'



function Login() {
    
    const router = useNavigate()
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm()
    
    function onSubmit(values) {
        return new Promise((resolve) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
        }, 3000)
        })
    }

    //Logs
    console.log(getValues());
    return (
        <div>
            <h1 className="formulario_title">AGREGAR CV</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='formulario' >
                <FormControl isInvalid={errors.name}  >
                    <FormLabel htmlFor='email' mt={5} >Nombre Producto</FormLabel>
                    <Input
                    type="text"
                    name="email"
                    placeholder='ingrese nombre del producto'
                    {...register('email', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormLabel htmlFor='password' mt={5} >password</FormLabel>
                    <Input
                    type="text" 
                    name="password"
                    placeholder='ingrese imagen de producto'
                    {...register('password', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>                    
                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'  onClick={ async ()=>{
                                const info = getValues();
                                const formData = new FormData();
                                formData.append('email', info.email);
                                formData.append('password', info.password);
                                console.log(info.email);
                                console.log(info.password);
                                
                                await axios.post('http://localhost:8080/api/auth/login', formData)
                                    .then((response) => {
                                        console.log(response);
                                        const statusCode = response.status
                                        // Aquí puedes manejar diferentes estados según el código de estado
                                        if (statusCode === 200) {
                                            // Éxito
                                            router('/')
                                            console.log('Inicio de sesión exitoso');
                                        } else if (statusCode === 500) {
                                            // No autorizado
                                            console.log('Credenciales incorrectas');
                                        } else {
                                            // Otro estado
                                            console.log('Error desconocido');
                                        }
                                    })
                       
                            } }
                            >
                                iniciar
                        </Button>
                </FormControl>
            </form>
        </div>
    )
}



export default Login