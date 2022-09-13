import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const _404 = () => {
    return (
        <>
            <Navbar />
            <div not-found content>
                Sorry may be you visit wrong url - Page not found
            </div>
            <Footer />
        </>
    )
}

export default _404