import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function IndexPage(){
  return(
    <div className="Page">
      <div style={{backgroundColor:"var(--lilac)"}}>
        {IntroPage()}
      </div>
      {ButtonBelt()}
      {AboutPage()}
      <div style={{backgroundColor:"var(--lilac)"}}>
        {ProvidePage()}
      </div>
      {ServicesPage()}
      {ClientsPage()}
      {MapForm()}
    </div>
  );
}

function IntroPage(){
  return(
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
        <img src="./images/slider-img.png" alt="Large Engineer" className="FirstEngineer"></img>
      </div>
    </div>
  )
}

function ButtonBelt() {
  return (
    <div className="ButtonBelt">
      <div className='BeltBox'>
        <img src="/images/tools.svg" alt="logo" className='BeltBox'></img> <br/>
        REPAIR
      </div>
      <div className='BeltBoxEnd'>
        <img src="/images/construction.svg" alt="logo" className='BeltBox'></img> <br/>
        IMPROVE
      </div>
      <div className='BeltBox'>
        <img src="/images/maintenance.svg" alt="logo" className='BeltBox'></img> <br/>
        MAINTAIN
      </div>
    </div>
  );
}

function AboutPage() {
  return(
    <div className="AboutPage">
      <div className="AboutText">
        <h1> ABOUT US </h1>
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, or randomised <br/>
        <a className='AboutButton' href="/index.html">
          <b>READ MORE</b>
        </a>
      </div>
      <div className="AboutImg">
        <img src="images/about-img.jpg" alt="big apron"></img>
      </div>
    </div>
  );
}

function ProvidePage(){
  return(
    <div className="ProvidePage">
      <div className="ProvideImg">
        <img src="images/professional-img.png" alt="engineer pointing hehe"></img>
      </div>
      <div className="AboutText">
        <h1 className="ProvideHeader"> WE PROVIDE PROFESSIONAL <br/> HOME SERVICES. </h1>
        randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
        you need to be sure there isn't anything embarrassing hidden in the middle of text. 
        All randomised words which don't look even slightly <br/>
        <a className='ProvideButton' href="/index.html">
          <b>READ MORE</b>
        </a>
      </div>
    </div>
  )
}

function ServicesPage(){
  return(
    <div className="ServiceDiv">
      <h1>OUR SERVICES</h1>
      <div className="ServiceBox">
        <div className='ServiceBeltBox'>
          <img src="/images/s1.png" alt="logo" className='BeltBox'></img> <br/>
          <h2>Maintenance</h2>
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        </div>
        <div className='ServiceBeltBox'>
          <img src="/images/s2.png" alt="logo" className='BeltBox'></img> <br/>
          <h2>Electrical</h2>
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        </div>
        <div className='ServiceBeltBox'>
          <img src="/images/s3.png" alt="logo" className='BeltBox'></img> <br/>
          <h2>Plumbing</h2>
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        </div>
      </div>
      <a className='AboutButton' href="/index.html">
          <b>VIEW MORE</b>
      </a>
    </div>
  );
}

function ClientBox(ClientString){
  return(
    <div>
      <div className='ClientArea'>
        <div>
          <img src={ClientString} alt={"clientimage"} className='ClientImage'></img>
        </div>
        <div>
          Jorch Morik <br/>
          <i className="fa fa-star" aria-hidden="true" style={{color:"orange"}}></i>
          <i className="fa fa-star" aria-hidden="true" style={{color:"orange"}}></i>
          <i className="fa fa-star" aria-hidden="true" style={{color:"orange"}}></i>
          <i className="fa fa-star" aria-hidden="true" style={{color:"orange"}}></i>
          <i className="fa fa-star" aria-hidden="true" style={{color:"orange"}}></i> 
        </div>
        <div style={{flex:"0 0 200px", textAlign:"right"}}>
          <i class="fa fa-quote-left" aria-hidden="true"></i>
        </div>
      </div>
      <div>
        chunks as necessary, making this the first true generator on the Internet.
        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
        to generate Lorem Ipsum
      </div>
    </div>
  )
}

function ClientsPage(){
  const options = {
    loop: true,
    center: true,
    items: 2,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    };
  return(
    <div className='ClientDiv'>
      <h1> WHAT OUR CLIENTS SAY </h1>
        <div className='CarouselBox'>
          <OwlCarousel className='owl-theme' {...options}>
            <div className='ClientCarousel'>
              {ClientBox("images/client-1.jpg")}
            </div>
            <div className='ClientCarousel'>
              {ClientBox("images/client-2.jpg")}
            </div>
          </OwlCarousel>
        </div>
      <div className='CarouselBox'>
        <div id="LeftCarousel">
          <button className='CarouselButton'> {<i class="fa fa-long-arrow-left" aria-hidden="true"></i>} </button>
        </div>
        <div id="RightCarousel">
          <button className='CarouselButton'> {<i class="fa fa-long-arrow-right" aria-hidden="true"></i>} </button>
        </div>
      </div>
    </div>
  );
}

function MapForm(){
  return(
    <div className='ContactDiv'>
      <div className='FormDiv'>
        <h1>CONTACT US</h1>
        <form>
          <input type='text' placeholder='Name' /> <br/>
          <input type='text' placeholder='Phone number' /> <br/>
          <input type='email' placeholder='Email' /> <br/>
          <input type='text' placeholder='Message' className='Message'/> <br/>
          <button className='AboutButton'> <b> SEND </b></button>
        </form>
      </div>
      <div className='MapDiv'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509899!2d-122.41941538468182!3d37.77492917975866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a64c0a5b%3A0xa9d3f35f0e80f427!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1617557228839!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy">  
        </iframe>
      </div>
    </div>
  );
}

function App() {
  return (
    IndexPage()
  );
}

export default App;