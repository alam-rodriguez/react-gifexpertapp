import React, { useState } from 'react';

import { GifExpertApp } from '../GifExpertApp'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const hadlerInputChange = ( e ) =>{
        setInputValue( e.target.value );
    }

    const hadlerSubmit = (e) =>{
        e.preventDefault()

        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats] );
            setInputValue('');
        }
        

    }

  return (
    <form onSubmit={ hadlerSubmit}>
        <input
            type="text"
            value={ inputValue }
            onChange={ hadlerInputChange }
        />
    </form>
  )
}


AddCategory.prototype = {

}
