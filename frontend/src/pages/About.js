import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='about content'>
                <h2>About Us</h2>
                <p>The power to control your life is the knowledge. knowledge can exist in anywhere from school, book or anyone else.</p>
                <p>With the motivation that connect people with knowledge, we create <strong>BLOG Application</strong> to share information together</p>
                <p>We hope that this product can give value for you :)) </p>
            </div>
            <Footer />
        </>
    )
}

export default About