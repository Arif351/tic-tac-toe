import React from 'react';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import '../CSS/Style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='lg:hidden'>
            <div className='mx-10 mt-24'>
                <h3 className='text-style'>async</h3>
                <h1 className='game-title'>tic tac <br /> toe </h1>
            </div>
            <button className='btn login-btn w-11/12 mx-3'>Login</button>
            <Link to="/register"><button className='btn register-btn w-11/12 mx-3'>Register</button></Link>
        </div>
    );
};

export default Home;