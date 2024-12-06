import './App.css';

function Header() {
    return (
      <div className="Page">
        <header className="Header-Bar">
          <div className="Header-Div">
            <i src="./public/images/logo.png"></i>
            <span className="Header-Left"> Call : +01 123455678990 </span>
            <i src="./public/images/logo.png"></i>
            <span className="Header-Right"> Email : demo@gmail.com </span>
          </div>
        </header>
      </div>
    )
}

export default Header;