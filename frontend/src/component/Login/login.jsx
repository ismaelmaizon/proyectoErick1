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
import { MiContexto } from "../context/contex";



function Login() {

    //contexto session
    const [session, setSession] = useState('')
    const {user, setUser} = useContext(MiContexto)

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
            //alert(JSON.stringify(values, null, 2))
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
                    <h2> {session} </h2>                      
                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'  onClick={ async ()=>{
                                const info = getValues();
                                const formData = new FormData();
                                formData.append('email', info.email);
                                formData.append('password', info.password);
                                console.log(info.email);
                                console.log(info.password);

                                try {
                                    await axios.post('http://localhost:8080/api/auth/login', formData, {withCredentials: true})
                                        .then((response) => {
                                            console.log('respuesta: ');
                                            console.log(response);
                                            const statusCode = response.status
                                            // Aquí puedes manejar diferentes estados según el código de estado
                                            if (statusCode === 200) {
                                                // Éxito
                                                setUser(response.data)
                                                console.log(response.data);
                                                if (response.data.role === 'admin') {
                                                    router('/admin')
                                                }else{
                                                    router('/')
                                                }
                                                console.log('Inicio de sesión exitoso');
                                            } else {
                                                // Otro estado
                                                console.log('Error desconocido');
                                            }
                                        })

                                }catch(e){
                                    setSession('session con problemas, verique que el email o su contraseña esten bien ingresados')
                                    console.log(e);
                                }
                                                           
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