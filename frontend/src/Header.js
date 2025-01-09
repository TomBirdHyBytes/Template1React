import './App.css';
import './font-awesome.min.css';

function Header() {
    return (
      <div className="Page">
        <header className="Header-Bar">
          <div className="Header-Div">
            <span className="Header-Left"> <i className="fa fa-phone" aria-hidden="true" style={{color:"orange"}}></i> Call : +01 123455678990 </span>
            <span className="Header-Right"> <i class="fa fa-envelope" aria-hidden="true" style={{color:"orange"}}></i> Email : demo@gmail.com </span>
          </div>
        </header>
      </div>
    )
}

export default Header;