import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import {useSelector} from "react-redux"

const Affichecategorie = () => {
    const {categories,isLoading,error} = useSelector((state)=>state.storecategories);

    if (isLoading) return <center><ReactLoading type='spokes' color="red"
    height={'8%'} width={'8%'} /></center>

    if (error) return <p>Impossible d'afficher la liste des articles...</p>
    
  return (
   


    <div className='container'>
     {categories &&
     <div
     style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
   {categories.map((cat,index)=>
      <Card sx={{ maxWidth: 'auto', margin:1  }} key={index}>
      <CardMedia
        sx={{ height: 160 }}
        image={cat.imagecategorie}
        title={cat.nomcategorie}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {cat.nomcategorie.substring(0,5)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {cat.nomcategorie}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success"><i class="fa-solid fa-cart-plus"></i></Button>
        <Button size="small" variant="contained" color="error"><i class="fa-solid fa-circle-xmark"></i></Button>
      </CardActions>
    </Card>
   )}
    </div>
    }
    </div>
  )
}

export default Affichecategorie
