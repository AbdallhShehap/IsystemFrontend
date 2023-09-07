import React,{ useEffect }  from 'react'

function JoinTeam() {
    useEffect(()=>{
        window.scrollTo(0,0)
            },[])
  return (
    <div  className="container d-flex flex-column align-items-center justify-content-center" style={{marginTop:"75pt",minHeight:"50vh"}}>
        <h2 className='mb-5'>Come Work With Us
</h2>
        <form>
  <div className="row mb-3">
    <div className='col-lg-6'>
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '100%' }}/>
  </div>
  <div className= "col-lg-6 mb-3">
    <label for="exampleInputPassword1" className="form-label">Last Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{ width: '100%' }}/>
  </div>
  </div>
  <div className="row">
    <div className='col-lg-6'>
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '100%' }}/>
  </div>
  <div className= "col-lg-6 mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{ width: '100%' }}/>
  </div>
  </div>
  <div className="row ">
    <div className='col-lg-6 ' style={{marginTop:"25pt"}}>
    <select class="form-select" aria-label="Default select example" style={{width:"100%"}}>
  <option selected >select Position</option>
  <option value="1">software Developer</option>
  <option value="2">Quality Assurance</option>
</select>
  </div>
  <div className= "col-lg-6 mb-3">
    <label for="exampleInputPassword1" className="form-label">Attach Cv</label>
    <input type="file" className="form-control" id="exampleInputPassword1" style={{ width: '100%' }}/>
  </div>
  </div>
  <button type="submit" className="btn btn-primary mt-5 " style={{backgroundColor:"#27579A",width:"38%" }}>Submit</button>
</form>
    </div>
  )
}

export default JoinTeam