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
import './login.css'



function Login() {
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
                        
                        try {
                            const response = await axios.post('http://localhost:8080/api/auth/login', formData, {
                              headers: {
                                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                              },
                            });
                            console.log('Login:', response.data);
                          } catch (error) {
                            console.error('Error al crear el producto:', error);
                          }
                    } } >
                        crear
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}



export default Login