import React from 'react'
import Nav from './components/Nav'
import Footer from './Footer'
import HorizontalRule from './HorizontalRule'
import { Outlet } from 'react-router-dom'

const Layout = ({ isNavExpanded, setIsNavExpanded }) => {
    return (
        <div className='App'>
            <Nav isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
            <Outlet />
            <HorizontalRule />
            <Footer />
        </div>
    )
}

export default Layout