import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import {useSelector} from "react-redux"
const Affichescategorie = () => {
  const {scategories,isLoading,error} = useSelector((state)=>state.storescategories);

  if (isLoading) return <center><ReactLoading type='spokes' color="red"
  height={'8%'} width={'8%'} /></center>

  if (error) return <p>Impossible d'afficher la liste des articles...</p>
  
  return (
  



    <div className='container'>
     { scategories &&
     <div
     style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
      {scategories.map((scat,index)=>
      <Card sx={{ maxWidth: 'auto', margin:1  }} key={index}>
      <CardMedia
        sx={{ height: 160 }}
        image={scat.imagescategorie}
        title={scat.nomscategorie}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {scat.nomscategorie.substring(0,5)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {scat.nomscategorie}
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

export default Affichescategorie
