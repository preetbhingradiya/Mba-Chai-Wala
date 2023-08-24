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
            <a href="/" className='footerLinks' onMouseOver={()=>{footerLinks(0)}}>Home</a>
            <a href="/stroy" className='footerLinks' onMouseOver={()=>{footerLinks(1)}}>Story</a>
            <a href="/media" className='footerLinks' onMouseOver={()=>{footerLinks(2)}}>Media</a>
            <a href="/frenchise" className='footerLinks' onMouseOver={()=>{footerLinks(3)}}>Frenchise</a>
            <a href="/events" className='footerLinks' onMouseOver={()=>{footerLinks(4)}}>Events</a>
            <a href="/chaiwalacares" className='footerLinks' onMouseOver={()=>{footerLinks(5)}}>Chai wala cares</a>
        </aside>

        <div>
            <h5>email</h5>
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