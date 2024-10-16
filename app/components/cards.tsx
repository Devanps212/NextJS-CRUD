    import React from 'react'
    import Image from 'next/image';   


    const Cards = () => {
      return (
        <div className='container'>
          <div className='d-flex juustify-content-center align-items-center w-100'>
            <div className='card p-2' style={{width:'18rem'}}>
                <Image className='card-img-top' alt='card-image' src='/sample.jpg' placeholder='blur' blurDataURL="data:image/jpeg;base64,/your-base64-image"  width={30} height={30}/>
                <h1 className='card-title'>Title</h1>
                <div className='card-body'>
                    <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn btn-primary w-100'>Add To Cart</button>
                        <button className='btn btn-primary w-100 mx-2'>Buy Now</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Cards
    