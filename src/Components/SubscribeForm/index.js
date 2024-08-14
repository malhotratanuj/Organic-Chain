import React from 'react';
import './index.css';
function SubscribeForm({color = ''}) {
  return (
    <>
        <div style={{backgroundImage:`url(/img/zebra-pattern.png)`, backgroundColor:color}} className='container faq-banner d-flex flex-column gap-2 justify-content-center align-items-center text-dark'>
            <div>
                <p className='fs-4'></p>
                <p className='fs-3'>Questions? Let us Help</p>
                <button className='faq-button btn btn-rounded text-white'>View more</button>
            </div>
        </div> 
    </>
  )
}

export default SubscribeForm