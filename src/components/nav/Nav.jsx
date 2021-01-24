import React from 'react';
import PropTypes from 'prop-types'
import {FaGithub} from 'react-icons/fa'

const Nav = ({title}) => {
    return (
       <nav className="navbar navbar-expand navbar-dark bg-danger">
           <div className="container">
               <a href="/" className="navbar-brand">
                   <FaGithub />
                   <span className="pl-2">{title}</span></a>
           </div>
       </nav>
    )
}
Nav.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Nav
