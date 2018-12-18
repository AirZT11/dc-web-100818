import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <Link to='/paintings'><a className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </a></Link>
     <Link className="item" to='/'>About</Link>
     <Link className="item" to='/paintings'>Gallery</Link>
   </div>
  )
}

export default NavBar
