import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const layout : React.FC<{children: React.ReactNode}> = ({children})=>{
    return(
        <html lang='en'>
            <head>
                <body>
                    <nav className='navbar navbar-expand-lg navbar-light bg-dark w-100'>
                        <div className='container'>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div>
                                    <a className='text-white fs-2' href='/'>Brand</a>
                                </div>
                                <div>
                                    <a className='text-white text-decoration-none mx-3' href='/'>Home</a>
                                    <a className='text-white text-decoration-none mx-3' href='#'>About Us</a>
                                    <a className='text-white text-decoration-none mx-3' href='#'>Login</a>
                                </div>   
                            </div>
                        </div>
                    </nav>
                    {children}
                </body>
            </head>
        </html>
    )
}

export default layout