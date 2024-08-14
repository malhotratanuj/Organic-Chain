import React, {useRef} from 'react'
import Heading from '../Components/Heading'
import { useState } from 'react';

function Offer({sell=false}) {
    const quantRef = useRef();
    const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <section className='section-margin'>
        <Heading className='text-primary text-center fs-48 font-weight-bold py-5' text={`Create ${sell ? 'sell' : 'buy'} offer`} />
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6'>
                    <div className="mb-3 w-100">
                        <label htmlFor="items" className="form-label">Items to {sell ? 'sell' : 'buy'}</label>
              <input
        type="text"
        id="inputBox"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
        style={{   
            boxSizing: "border-box",
            width: "100%",
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            margin: '8px 0px 20px',
            outlineColor: '#0d6efd'
        }}
        // style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '400px' }}
      />
                        {/* <select ref={itemsRef} className="form-select" aria-label="Default select example">
                            <option disabled selected>Select Items</option>
                            <option value="Tomato">Tomato</option>
                            <option value="Potato">Potato</option>
                            <option value="Onion">Onion</option>
                        </select> */}
                    </div>
                    <div className="mb-3 w-100">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input ref={quantRef} type="number" className="form-control" id="price" placeholder="0" />
                    </div>
                    <button type="button" className='w-100 btn btn-primary text-white btn-rounded' onClick={()=>{}}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offer