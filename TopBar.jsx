import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return <div className="d-flex justify-c0ntent-center mt-4">
    <ul className="nav nav-underline">
        <li className="nav-item">
            <Link to='/all' className="nav-Link" href="#">ALL</Link></li>
            <li className="nav-item">
            <Link to='/fullstackdevelopment' className="nav-Link" href="#">FULL STACK DEVELOPMENT</Link></li>
            <li className="nav-item">
            <Link to='/datascience' className="nav-Link" href="#">DATA SCIENCE</Link></li>
            <li className="nav-item">
            <Link to='/cybersecurity' className="nav-Link" href="#">CYBER SECURITY</Link></li>
            <li className="nav-item">
            <Link to='/career' className="nav-Link" href="#">CAREER</Link></li>
        </ul>
    </div>
}
