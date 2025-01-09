import './App.css';

function Footer() {
    return (
      <div className="Page">
        <footer className="Footer-Bar">
          <div className="Footer-Div">
            <h1 className='Footer-H1'>Get In Touch</h1>
            <div className='Flex-Container'>
              <div style={{alignItems:'center'}}>
                <a href="index.html" className='Footer-Link'>
                  <div className='Footer-Circle'> <i className="fa fa-map-marker" aria-hidden="true"></i> </div>
                  <p>Lorem Ipsum is simply dummy text</p>
                </a>
              </div>
              <div>
                <a href="index.html" className='Footer-Link'>
                  <div className='Footer-Circle'> <i className="fa fa-phone" aria-hidden="true"></i> </div>
                  <p>+02 1234567890</p>
                </a>
              </div>
            <div>
              <a href="index.html" className='Footer-Link'>
                <div className='Footer-Circle'> <i className="fa fa-envelope" aria-hidden="true"></i> </div>
                <p>demo@gmail.com</p>
                </a>
            </div>
          </div>
            <div>
              <h2>FOLLOW US</h2>
              <div style={{backgroundColor:"white", width:"100px", justifySelf:"center"}}>
                <i className="fa fa-facebook" aria-hidden="true" style={{color:"#0355cc"}}></i>
                <i className="fa fa-twitter" aria-hidden="true" style={{color:"#0355cc"}}></i>
                <i className="fa fa-youtube" aria-hidden="true" style={{color:"#0355cc"}}></i>
                <i className="fa fa-instagram" aria-hidden="true" style={{color:"#0355cc"}}></i>
              </div>
            </div>
            <br></br>
            <hr style={{width:"50%"}}></hr>
            <div>© 2024 All Rights Reserved By Free Html Templates</div>
          </div>
        </footer>
      </div>
    )
}

export default Footer;