import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getScategories } from '../../features/scategorieslice'; 
import Affichescategorie from './Affichescategorie';

const Listescategories = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getScategories())
    },[])
  return (
    <div>
      <Affichescategorie/>
    </div>
  )
}

export default Listescategories 