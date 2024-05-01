import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";


const Affichearticle = () => {
    const {articles,isLoading,error} = useSelector((state)=>state.storearticles);
    const dispatch = useDispatch();
let navigate=useNavigate();


    if (isLoading) return <center><ReactLoading type='spokes' color="red"
    height={'8%'} width={'8%'} /></center>

    if (error) return <p>Impossible d'afficher la liste des articles...</p>

    const handleAddToCart = (art) => {
        dispatch(addToCart(art));
        navigate("/Cart");
        };
        

  return (
   


    <div className='container'>
         {articles &&
         <div
         style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
      {articles.map((art,index)=>
      <Card sx={{ maxWidth: 'auto', margin:1 }} key={index}>
      <CardMedia
        sx={{ height: 160 }}
        image={art.imageart}
        title={art.reference}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {art.reference.substring(0,5)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {art.prix}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success" disabled={art.qtestock<=0} onClick={() =>handleAddToCart(art)}><i class="fa-solid fa-cart-plus"></i></Button>
        <Button size="small" variant="contained" color="error"><i class="fa-solid fa-circle-xmark"></i></Button>
      </CardActions>
    </Card>
    )}
    </div>
    }
    </div>
  )
}

export default Affichearticle
