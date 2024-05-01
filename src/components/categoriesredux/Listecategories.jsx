import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getcategories } from '../../features/categorieslice';
import Affichecategorie from './Affichecategorie';

const Listecategories = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getcategories())
    },[])
  return (
    <div>
      <Affichecategorie/>
    </div>
  )
}

export default Listecategories