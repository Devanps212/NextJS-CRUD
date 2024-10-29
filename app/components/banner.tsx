const Banner = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <h1 className='text-primary text-center'>Welcome to CRUD
                <br/>
                <span className='display-2 d-block mt-3'>Create, Read, Update, Delete</span>
                <button className="btn btn-primary">
                  Add
                </button>
            </h1>
        </div> 
    </div>
  )
}

export default Banner
