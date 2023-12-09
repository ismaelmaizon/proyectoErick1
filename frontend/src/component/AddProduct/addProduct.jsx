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
import './addProduct.css'



function AddProducto() {


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
            <h1 className="formulario_title">AGREGAR PRODUCTO</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name' mt={5} >Nombre Producto</FormLabel>
                    <Input
                    id='name'
                    placeholder='ingrese nombre del producto'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='precio' mt={5} >Precio</FormLabel>
                    <Input
                    id='precio'
                    placeholder='precio del producto'
                    {...register('precio', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='descripcion' mt={5} >Descripcion del Producto</FormLabel>
                    <Input
                    id='descripcion'
                    placeholder='brebe descripcion del producto'
                    {...register('descripcion', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='stock' mt={5} >Stock Actual</FormLabel>
                    <Input
                    id='stock'
                    placeholder='ingrese el stock actual del producto que vas a crear'
                    {...register('stock', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='tipo' mt={5} >Tipo</FormLabel>
                    <Select placeholder='Select option' {...register('tipo')} >
                        <option value='Alfombra'>Alfombra</option>
                        <option value='Impresion 3D'>Impresion 3D</option>
                        <option value='Interior'>Interior</option>
                        <option value='Abertura'>Abertura</option>
                    </Select>
                    <FormLabel htmlFor='url' mt={5} >URL de Imagen</FormLabel>
                    <Input
                    id='url'
                    placeholder='ingrese url de imagen de producto'
                    {...register('url', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    
                    
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={()=>{
                        const producto = getValues();
                        console.log(producto);
                        axios.post('http://localhost:8080/api/auth/agregarProducto', producto)
                            .then( response => {
                                // Manejar la respuesta del servidor si es necesario
                                console.log('Usuario creado:', response.data);
                            } )
                            .catch(error => {
                                // Manejar cualquier error que pueda ocurrir durante la solicitud
                                console.error('Error al crear el usuario:', error);
                            });
                    } } >
                        crear
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}



export default AddProducto