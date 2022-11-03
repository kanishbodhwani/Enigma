import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            {/* icon */}
            <h3> Enigma </h3>
        </div>
        <div className='sidebar__routes'>
            <nav>
                <ul>
                    <li> <Link to={ROUTES.DASHBOARD}> Home </Link> </li>
                    <li> <Link to={ROUTES.FIND_OUT}> Find out </Link> </li>
                    <li> <Link to={ROUTES.TRENDING}> Home </Link> </li>
                    <li> <Link to={ROUTES.NOTIFICATIONS}> Home </Link> </li>
                    <li> <Link to={ROUTES.PROFILE}> Home </Link> </li>
                </ul>
            </nav>
            
        </div>
        <div className='sidebar__footer'>

        </div>
    </div>
  )
}
