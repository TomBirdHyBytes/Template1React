import './App.css';
import logo from './images/logo.png'; /* Replace this with other stuff once we are done. */

function Footer() {
    return (
      <div className="Page">
        <footer className="Footer-Bar">
          <div className="Header-Div">
            <h1 className='Footer-H1'>Get In Touch</h1>
            <div className='Flex-Container'>
                <div>
                    <div> <img src={logo} alt='Logo' /> </div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
            </div>
            <div>This will be a flex box, then I put buttons in. Probably. </div>
          </div>
        </footer>
      </div>
    )
}

export default Footer;