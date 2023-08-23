import React from 'react'
import  "../styles/footer.scss"

const Footer = () => {
  return (
   <>
    <footer>
        <h1>Let's
            <br />
            #connectOnCutting?
        </h1>
        <aside>
            <a href="/" className='footerLinks'>Home</a>
            <a href="/stroy" className='footerLinks'>Story</a>
            <a href="/media" className='footerLinks'>Media</a>
            <a href="/frenchise" className='footerLinks'>Frenchise</a>
            <a href="/events" className='footerLinks'>Events</a>
            <a href="/chaiwalacares" className='footerLinks'>Chai wala cares</a>
        </aside>

        <div>
            <h5>mail</h5>
            <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
            <a href="mailto: franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>phone</h5>
            <a href="tel: +9182902093">+9182902093</a>
        </div>

        <p>COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
    </footer>
    <div className="footer"></div>
   </>
  )
}

export default Footer