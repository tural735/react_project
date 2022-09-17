import React, { useState } from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { changeAuth } from '../../../features/auth/authSlice';
import ErrorIcon from '../../../assets/icons/ErrorIcon';
import EyeIcon from '../../../assets/icons/EyeIcon';
import EyeHideIcon from '../../../assets/icons/EyeHideIcon';
import { loginUser } from '../../../features/auth/loginSlice';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';


const LoginInfos = {
  email: "",
  password:""
};
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const {isLoading:LoginLoading,error:errorLogin,success:LoginSuccess,data:LoginData}=useSelector(state=>state.login);
  const [login, setLogin] = useState(LoginInfos);
  const [hide,setHide]=useState(false)

  if(LoginSuccess){
    return navigate('/dashboard')
  }

  const { email,password} = login;
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const LoginValidation = Yup.object({
    email: Yup.string().required('Email is required').email('Email is wrong format'),
    password:Yup.string().required('Password is required').min(6,'Password have min 6 character')
  });
  const loginSubmit = async () => {
    try {
      dispatch(loginUser({email,password}))
      handleLogin(LoginInfos);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='auth__section__content__form'>
        <h1>Login</h1>
        <div className='auth__section__content__form__body'>
        <Formik
            enableReinitialize
            initialValues={{
              email,
              password
            }}
            validationSchema={LoginValidation}
            onSubmit={() => {
              loginSubmit();
            }}
          >
            {(formik) => (
              <Form>
                {errorLogin && <div className='error'>{errorLogin}</div>}
                <div className='input_group'>
                  <label htmlFor="email">Email</label>
                  <div className='input_parent'>
                    <input type="text" id="email" className={`${formik.errors.email && 'error_input'}`} name="email" value={email} onChange={handleLogin} placeholder="Please enter your Email" />
                  </div>
                  {formik.touched.email && formik.errors.email && <span className='error_message'><ErrorIcon/> {formik.errors.email}</span>}
                </div>
                <div className='input_group'>
                  <label htmlFor="password">Password</label>
                  <div className='input_parent'>
                    <input type={!hide ? 'password':'text'} id="password" className={`${formik.errors.password && 'error_input'}`} name="password" value={password} onChange={handleLogin} placeholder="Please enter your password" autoComplete='new-password'/>
                    <span className='eye_icon' onClick={()=>setHide(!hide)}>{!hide ? <EyeIcon/>: <EyeHideIcon/>}</span>
                  </div>
                  {formik.touched.password && formik.errors.password && <span className='error_message'><ErrorIcon/> {formik.errors.password}</span>}
                </div>

                <button className='send_button' disabled={LoginLoading} type="submit">{LoginLoading ? <><ClipLoader color="#fff" size={20}/></> : <>Send</>}</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className='change'>
        <span>Not a member a yet?</span><button type="button" onClick={()=>dispatch(changeAuth())}>Register</button>
        </div>
    </div>
  )
}

export default Login
