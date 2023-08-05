import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Link to='/'>page component</Link> |
        <Link to='/Contact'>Contact page</Link> |
        <Link to='/ProductPage'>My product</Link> |
        <button onClick={()=>navigate(-1)}>Go Back</button> |
        <button onClick={()=>navigate(1)}>Go Forward</button> 
    </div>
  )
}

export default Navbar