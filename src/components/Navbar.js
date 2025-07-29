import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px;" }}>
          <li className="nav-item">
              <Link className="nav-a active" aria-current="page" to="/" style={{color: props.mode ==='dark'?'white':'#042743'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a" to="/about" style={{color: props.mode ==='dark'?'white':'#042743'}}>{props.aboutText}</Link>
              </li>
         </ul>




{/* 
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-danger  rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div> */}




          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}         //import proptype iski value hme nevbar me deni pdegi in app.js_________when we use "isRequired" to vo eroor handle krega jo value na dene pr aane vala hoga

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set aboutText here'
}                    //here we will directly pass the value 











