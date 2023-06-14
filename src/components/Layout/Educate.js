import { Container } from "react-bootstrap";

function Educate(){
  return(
    <>
      <Container className="mt-5">
          <div className="row d-flex flex-column text-white text-center">
              <h1 className="text-white p-3 text-center" >Education</h1>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat </p>
          <div className="row my-5 bg-dark d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center justify-content-around">
          <div className="col-3">
              <h3>University Of Toronto</h3>
              <p>Student <span className="bg-warning">june 2016-Dec-2021</span></p>
          </div>
          <div className="col-5" style={{textAlign:'left'}}>
            <h3>Certificate Of Web Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat</p>
          </div>
          <br/>
          </div>
          </div>
          <div className="row  bg-dark d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center justify-content-around">
          <div className="col-3">
              <h3>Programming Course</h3>
              <p>Student <span className="bg-warning">june 2016-Dec-2021</span></p>
          </div>
          <div className="col-5" style={{textAlign:'left'}}>
            <h3>Certificate Of Web Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat</p>
          </div>
          <br/>
          </div>
          </div>
          <div className="row my-5 bg-dark d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center justify-content-around">
          <div className="col-3">
              <h3>Web Developer Course</h3>
              <p>Student <span className="bg-warning">june 2016-Dec-2021</span></p>
          </div>
          <div className="col-5" style={{textAlign:'left'}}>
            <h3>Certificate Of Web Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat</p>
          </div>
          <br/>
          </div>
          </div>
          </div>
      </Container>
    </>
  )
}
export default Educate