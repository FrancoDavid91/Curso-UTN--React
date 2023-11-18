
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import CarritoPage from './pages/CarritoPage'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import DetailsCompras from './components/detailsCompras/DetailsCompras'



function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/productos' element={<ProductsPage></ProductsPage>}></Route>
          <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
          <Route path='/details/:sku' element={<DetailsCompras></DetailsCompras>}></Route>
        </Routes>
      </div>

    </>

  )
}

export default App
