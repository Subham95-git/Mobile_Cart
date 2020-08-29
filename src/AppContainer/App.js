import React from 'react';
import './App.css';
import MobileComponent from '../Components/Mobile.js';
import image1 from '../resources/pixel_2_xl.png';
import image2 from '../resources/iphone_x.jpg';
import image3 from '../resources/onepluse.png';
import image4 from '../resources/Galaxy-S10-Plus.jpg';
import image5 from '../resources/home.png';

class App extends React.Component{

  state = {
    mobileInfo:[
     {name:"Google Pixel 2 XL", Price:62000,RAM:"4 GB",Camera:"12.2 MP", 
     OS:"Android Pie", Processor:"Snapdragon 835 octa-core", image:image1},
     
     {name:"Apple iPhone X", Price:98000,RAM:"3 GB",Camera:"12 MP", 
     OS:"iOS v11.1.1", Processor:"A11 Bionic hexa-core", image:image2},
     
     {name:"OnePlus 8 pro", Price:54999,RAM:"8 GB",Camera:"48 MP", 
     OS:"Android 10", Processor:"Snapdragon 864 octa-core", image:image3},

     {name:"Samsung S10 Plus", Price:54999,RAM:"8 GB",Camera:"16 MP", 
     OS:"Android pie", Processor:"Exynos 9820", image:image4}
    ]
  }

  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
      </form>
        </div>
        </nav>
        <div className="row justify-content-center align-self-center">
        
        {this.state.mobileInfo.map((data)=>(
          <MobileComponent data={data}></MobileComponent> 
        ))}
        <br/><br/><br/>
      </div>
      </div>
      
    );
  }

};


export default App;
