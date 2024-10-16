'use client'
import React from 'react'

const Add = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div 
          className='p-5 border border-dark rounded bg-light shadow-lg w-100' 
          style={{ maxWidth: '400px' }}
        >
          <div className='contents'>
            <h1 className='text-center'>Add</h1>
            <form>
              <label className='d-block' htmlFor='name'>Name</label>
              <input 
                type='text'
                id='name'
                placeholder='Enter product name'
                className='shadow-lg rounded p-1 w-100'
              />
              <label className='d-block mt-4' htmlFor='description'>Description</label>
              <input 
                type='text'
                id='description'
                className='shadow rounded p-1 w-100' 
                placeholder='Enter Description'
              />
              <label htmlFor='image' className='d-block mt-4'>Upload Image</label>
              <input type='file' id='image' className='my-2 w-100'/>
              <button className='btn btn-success d-block mt-2 w-100'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
