import './App.css';
import logo from './images/logo.png'; /* Replace this with other stuff once we are done. */
/* The images in the flexbox in the original are "font awesome" characters. Idk if we NEED them or not.*/

function Footer() {
    return (
      <div className="Page">
        <footer className="Footer-Bar">
          <div className="Footer-Div">
            <h1 className='Footer-H1'>Get In Touch</h1>
            <div className='Flex-Container'>
                <a href="" className='Footer-Link'>
                  <div>
                      <div> <img src={logo} alt='Logo' /> </div>
                      Lorem Ipsum is simply dummy text
                  </div>
                </a>
                <a href="" className='Footer-Link'>
                  <div>
                      <div> <img src={logo} alt='Logo' /> </div>
                      +02 1234567890
                  </div>
                </a>
                <a href="" className='Footer-Link'>
                  <div>
                      <div> <img src={logo} alt='Logo' /> </div>
                      demo@gmail.com
                  </div>
                </a>
            </div>
            <div>
              <h2>FOLLOW US</h2>
              buttons
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