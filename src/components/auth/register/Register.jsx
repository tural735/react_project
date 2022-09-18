import React, { useState } from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import ErrorIcon from '../../../assets/icons/ErrorIcon';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { changeAuth } from '../../../features/auth/authSlice';
import { registerUser } from '../../../features/auth/registerSlice';


const registerInfos = {
  name:"",
  email: "",
  password:"",
  confirmPassword:""
};
const Register = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {isLoading:registerLoading,error:errorRegister,success:registerSuccess}=useSelector(state=>state.register);
    const [register, setregister] = useState(registerInfos);
    const { name,email,password,confirmPassword} = register;

    const handleRegister = (e) => {
      const { name, value } = e.target;
      setregister({ ...register, [name]: value });
    };
    const registerValidation = Yup.object({
      name: Yup.string().required('Name is required').min(3,'must contain at least 3 characters').max(10,'must contain a maximum of 10 characters'),
      email: Yup.string().required('Email is required').email('Email is wrong format'),
      password:Yup.string().required('Password is required').min(6,'Password have min 6 character'),
      confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null],'Confirm pasword does not match Password')
    });
    const registerSubmit = async () => {
      try {
        dispatch(registerUser({name,email,password}))
        setregister(registerInfos);
      } catch (error) {
        console.log(error)
      }
    };
    if(registerSuccess){
      return navigate('/dashboard')
    }
  return (
    <div className='auth__section__content__form'>
      <h1>Register</h1>
      <div className='auth__section__content__form__body'>
        <Formik
            enableReinitialize
            initialValues={{
              name,
              email,
              password,
              confirmPassword
            }}
            validationSchema={registerValidation}
            onSubmit={() => {
              registerSubmit();
            }}
          >
            {(formik) => (
              <Form>
                {errorRegister && <div className='error'>{errorRegister}</div>}
                <div className='input_group'>
                  <label htmlFor="name">Name</label>
                  <div className='input_parent'>
                    <input type="text" id="name" className={`${formik.errors.name && 'error_input'}`} name="name" value={name} onChange={handleRegister} placeholder="Please enter your Name" />
                  </div>
                  {formik.touched.name && formik.errors.name && <span className='error_message'><ErrorIcon/> {formik.errors.name}</span>}
                </div>
                <div className='input_group'>
                  <label htmlFor="email">Email</label>
                  <div className='input_parent'>
                    <input type="text" id="email" className={`${formik.errors.email && 'error_input'}`} name="email" value={email} onChange={handleRegister} placeholder="Please enter your Email" />
                  </div>
                  {formik.touched.email && formik.errors.email && <span className='error_message'><ErrorIcon/> {formik.errors.email}</span>}
                </div>
                <div className='input_group'>
                  <label htmlFor="password">Password</label>
                  <div className='input_parent'>
                    <input type="password" id="password" className={`${formik.errors.password && 'error_input'}`} name="password" value={password} onChange={handleRegister} placeholder="Please enter your password" autoComplete='new-password'/>
                  </div>
                  {formik.touched.password && formik.errors.password && <span className='error_message'><ErrorIcon/> {formik.errors.password}</span>}
                </div>
                <div className='input_group'>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className='input_parent'>
                    <input type="password" id="confirmPassword" className={`${formik.errors.confirmPassword && 'error_input'}`} name="confirmPassword" value={confirmPassword} onChange={handleRegister} placeholder="Please enter your Confirm password" autoComplete='new-confirmPassword'/>
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && <span className='error_message'><ErrorIcon/> {formik.errors.confirmPassword}</span>}
                </div>

                <button className='send_button' disabled={registerLoading} type="submit">{registerLoading ? <><ClipLoader color="#fff" size={20}/></> : <>Send</>}</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className='change'>
          <span>Already a member ?</span><button type="button" onClick={()=>dispatch(changeAuth())}>Login</button>
        </div>
    </div>
  )
}

export default Register
