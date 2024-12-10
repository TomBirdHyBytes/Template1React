import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Page">
      <div style={{backgroundColor:"skyblue"}}>
        <div className="FirstIndexDiv">
          <div className='IndexText'>
            <h1 className='IndexHeader'> Repair and <br/>
            Maintenance <br/>
            Services
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. 
            Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa. <br/>
            <div className='ContactButton'>
              <a className='ContactButton' href="/index.html">
                <b>CONTACT US</b>
              </a>
            </div>
          </div>
          <div>
            <img src="./images/slider-img.png" alt="Large Engineer"></img>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
