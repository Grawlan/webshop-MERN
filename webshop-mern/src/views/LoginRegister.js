import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm';

const LoginRegister = () => {

  const history = useHistory();

  const [login, setLogin] = useState(true);

  const user = useSelector(state => state.authReducer.userToken);

  useEffect(() => {
    if(user) {
      try {history.push(history.location.state.from.pathname)}
      catch {history.push('/')}
    }
  }, [user, history])

  return (
    <div className="wrapper bg-white d-flex align-items-center justify-content-center">
      { login
        ? <LoginForm setLogin={setLogin} />
        : <RegisterForm setLogin={setLogin} />
      }
      
    </div>
  )
}

export default LoginRegister