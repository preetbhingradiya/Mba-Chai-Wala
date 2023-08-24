import React from 'react'

const Footer = () => {

    const footerLinks=(element)=>{
         const allFooterLinks=document.querySelectorAll(".footerLinks");

        switch(element){
            case 0:allFooterLinks.forEach((item,index)=>index===0?item.style.opacity=1:item.style.opacity=0.2)
            break;

            case 1:allFooterLinks.forEach((item,index)=>index===1?item.style.opacity=1:item.style.opacity=0.2)
            break;

            case 2:allFooterLinks.forEach((item,index)=>index===2?item.style.opacity=1:item.style.opacity=0.2)
            break;

            case 3:allFooterLinks.forEach((item,index)=>index===3?item.style.opacity=1:item.style.opacity=0.2)
            break;

            case 4:allFooterLinks.forEach((item,index)=>index===4?item.style.opacity=1:item.style.opacity=0.2)
            break;

            case 5:allFooterLinks.forEach((item,index)=>index===5?item.style.opacity=1:item.style.opacity=0.2)
            break;

            default:allFooterLinks.forEach((item)=>item.style.opacity=1)
            break;
        }
    }

    const toNormal=()=>{
        const allFooterLinks=document.querySelectorAll(".footerLinks");
        allFooterLinks.forEach((item)=>item.style.opacity=1)
    }

  return (
   <>
    <footer>
        <h1>Let's
            <br />
            #connectOnCutting?
        </h1>
        <aside onMouseLeave={toNormal}>
            <a href="/" className='footerLinks' onMouseOver={()=>{footerLinks(0)}} data-cursorPointerMini>Home</a>
            <a href="/stroy" className='footerLinks' onMouseOver={()=>{footerLinks(1)}} data-cursorPointerMini>Story</a>
            <a href="/media" className='footerLinks' onMouseOver={()=>{footerLinks(2)}} data-cursorPointerMini>Media</a>
            <a href="/frenchise" className='footerLinks' onMouseOver={()=>{footerLinks(3)}} data-cursorPointerMini>Frenchise</a>
            <a href="/events" className='footerLinks' onMouseOver={()=>{footerLinks(4)}} data-cursorPointerMini>Events</a>
            <a href="/chaiwalacares" className='footerLinks' onMouseOver={()=>{footerLinks(5)}} data-cursorPointerMini>Chai wala cares</a>
        </aside>

        <div>
            <h5>email</h5>
            <a href="mailto: info@mbachaiwala.com" data-cursorPointerMini>Info@mbachaiwala.com</a>
            <a href="mailto: franchise@mbachaiwala.com" data-cursorPointerMini>Franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>phone</h5>
            <a href="tel: +9182902093" data-cursorPointerMini>+9182902093</a>
        </div>

        <p>COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
    </footer>
    <div className="footer"></div>
   </>
  )
}

export default Footer