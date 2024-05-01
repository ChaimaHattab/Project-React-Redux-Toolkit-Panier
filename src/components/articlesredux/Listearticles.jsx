import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getArticles } from '../../features/articleslice';
import Affichearticle from './Affichearticle';

const Listearticles = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getArticles())
    },[])
  return (
    <div>
      <Affichearticle/>
    </div>
  )
}

export default Listearticles
