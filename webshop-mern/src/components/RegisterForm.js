import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/actions/authActions';

const RegisterForm = ({setLogin}) => {

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSub = (e) => {
    e.preventDefault()
    dispatch(register({
      firstName,
      lastName,
      email,
      password
    }))
  }

  return (
    <div className="card w-25 bg-primary text-white">
      <div className="card-header text-center">
        <h1>REGISTER</h1>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSub}>
          <div className="mb-3">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <p>Already a member? <span className="text-white click" onClick={() => setLogin(true)} > - Login -</span></p>
          <button className="btn btn-white btn-block">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
