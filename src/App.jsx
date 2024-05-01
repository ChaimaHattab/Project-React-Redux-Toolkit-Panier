import { useState } from 'react'
import Listearticles from './components/articlesredux/Listearticles'
import Listecategories from './components/categoriesredux/Listecategories'
import Listescategories from './components/scategoriesredux.jsx/Listescategories'
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './components/articlesredux/Cart';
import NavScrolls from './components/NavScrolls';







function App() {
  

  return (
    <div className="App">
<Router>
<NavScrolls/>
 <Routes>

 <Route path='/cart' element={<Cart/>}/>
<Route path='/listart' element={<Listearticles/>}/>
<Route path='/listcat' element={<Listecategories/>}/>
<Route path='/listscat' element={<Listescategories/> }/>

</Routes>
</Router>

    
    </div>
  )
}

export default App
