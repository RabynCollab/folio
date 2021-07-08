// import React, { useState } from 'react'
// import Cart from './components/Cart/Cart'
// import Header from './components/Layout/Header'
// import Meals from './components/Meals/Meals'
// import CartContextProvider from './components/store/cart-context'

// const App = () => {
//   const [modal, setModal] = useState(false);

//   const showCart = () => {
//     setModal(true);
//   }
//   const hideCart = () => {
//     setModal(false);
//   }
//   return (
//     <CartContextProvider>
//       {modal && <Cart onClose={hideCart} />}
//       <Header show={showCart} />
//       <main>
//         <Meals />
//       </main>
//     </CartContextProvider>
//   )
// }

// export default App

import React from 'react'
import Nav from './sample/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './sample/Home'
import About from './sample/About'
import Contact from './sample/Contact'
import CardDetail from './sample/main/CardDetail'
import DataContextProvider from './sample/context/data-provider'
import NotFound from './sample/NotFound'
const App = () => {
  return (
    <Router>
      <DataContextProvider>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/detail/:id' component={CardDetail} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </DataContextProvider>
    </Router>
  )
}

export default App
