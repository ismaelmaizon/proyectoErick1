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
import './addCv.css'



function AddCv() {
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
                    <FormLabel htmlFor='name' mt={5} >Nombre Producto</FormLabel>
                    <Input
                    id='name'
                    placeholder='ingrese nombre del producto'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormLabel htmlFor='cv' mt={5} >CV</FormLabel>
                    <Input
                    type="file" 
                    name="cv"
                    placeholder='ingrese imagen de producto'
                    {...register('cv', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'  onClick={ async ()=>{
                        const producto = getValues();
                        const cv = getValues('cv')[0];
                        const formData = new FormData();
                        formData.append('name', producto.name);
                        formData.append('cv', cv);
                        console.log(producto);
                        console.log(cv);
                        
                        try {
                            const response = await axios.post('http://localhost:8080/api/auth/agregarCv', formData, {
                              headers: {
                                'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                              },
                            });
                            console.log('Producto creado:', response.data);
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



export default AddCv