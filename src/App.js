import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import NotLoggedinRoute from "./pages/NotLoggedinRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const HomePage=React.lazy(()=>import('./pages/HomePage'));
const AuthPage=React.lazy(()=>import('./pages/AuthPage'));
const NotFound=React.lazy(()=>import('./pages/NotFoundPage'));
const Profile=React.lazy(()=>import('./pages/Dashboard/Profile'));

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<SharedLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="register" element={<NotLoggedinRoute/>}>
                <Route index element={<AuthPage/>}/>
              </Route>
              <Route path="profile" element={<ProtectedRoute/>}>
                <Route index element={<Profile/>}/>
              </Route>
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </Wrapper>
      </Router>
      <ToastContainer position="top-right"/>
    </>
  );
}

export default App;
