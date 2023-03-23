import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
     <Navbar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='*' element={<PageNotFound />} />
     </Routes>
    </>
  )
}

export default App
