import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getProducts } from './store/actions/productsActions';
import { checkUser } from './store/actions/authActions';
import About from './views/About';
import Products from './views/Products';
import Navbar from './components/Navbar';
import ProductDetails from './views/ProductDetails';
import LoginRegister from './views/LoginRegister';
import UserOrders from './views/UserOrders';
import AdminOrders from './views/AdminOrders';
import OrderDetails from './views/OrderDetails';

function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(checkUser())
    dispatch(getProducts())
  }, [dispatch])

    return (
    <BrowserRouter>
      <Navbar />
  
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/users/loginregister/" component={LoginRegister} />
        <Route exact path="/users/userorders/" component={UserOrders} />
        <Route exact path="/users/adminorders/" component={AdminOrders} />
        <Route exact path="/orders/:id" component={OrderDetails} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
