import './App.css';

function Item(selected, page) {
    if (selected === page) {
        return <li className='Nav'><a href="index.html" className='Nav-Link-Selected'> {selected} </a></li>;
    }
    return <li className='Nav'><a href="index.html" className='Nav-Link'> {page} </a></li>;
}

function Navbar(props) {
    return (
      <div className="Page">
        <div className="Nav">
            <div className='Inance'> <b> INANCE </b> </div>
            <div>
                <ul className='Nav'>
                    {Item(props.selected, "Home")}
                    {Item(props.selected, "About")}
                    {Item(props.selected, "Services")}
                    {Item(props.selected, "Contact Us")}
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Navbar;