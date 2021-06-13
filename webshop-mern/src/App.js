import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getProducts } from './store/actions/productsActions';
import About from './views/About';
import Products from './views/Products';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

    return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/about" component={About} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
