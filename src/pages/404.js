import React from 'react'
import '../styles/404.css'
import ArrowLeft from '../assets/arrow-left.svg'
import {useNavigate} from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const navigateHome = () => {
         navigate('/')
    }
  return (
    <div>
      <div className="error_container">
        <h4>404 error</h4>
        <h2>We can’t find that page</h2>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className='action_button'>
            <button onClick={goBack}><img src={ArrowLeft} alt='arrow-left-icon' />Go back</button>
            <button onClick={navigateHome}>Take me home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound