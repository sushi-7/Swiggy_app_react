import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classname="body">

      <div classname="logo"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" width="200px"></img> </div>

      <div classname="btns">
        <button id="btn-one">Login</button>
        <button id="btn-two">Sign Up</button>
      </div>
      <div classname="headline"> 
        <h1>Late Night at Office?</h1>
        <p id="tagline">Order food from your favourite restaurants near you.</p>
      
      </div>

      <div classname="searchbox">
          <input type="text" alt="Enter you delivery location"></input>
          <button id="find-food">FIND FOOD</button>
      </div>

      <div classname="tagline-two">
        <p id="eight">POPULAR CITIES IN INDIA</p>
        <p id="cities">Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & More.</p>
      </div>

      <div classame="carou"> <img src="https://previews.123rf.com/images/magone/magone1812/magone181200053/113760992-plate-of-asian-food-rice-with-meat-and-vegetables-isolated-on-white-background-top-view.jpg " id="caro" width="450px"></img> </div>

      <div className="carousel1">

            <img src="https://www.meldium.com/wp-content/uploads/2018/12/Advantages.png" width="1340px"></img>

      </div>

      <div className="lastbox">

      <div className="one">
        <ul>
        <h4>About Us</h4>
          <li>About Us Overview</li>
          <li>Leadership Team</li>
          <li>Values In Action</li>
          <li>Franchise Info</li>
          <li>Recalls & Alerts</li>
          <li>Real Estate</li>
          <li>Accessibility</li>
          <li>Investor Relations</li>
          <li>News & Notifications</li>
        </ul>
      </div>
      <div className="two">
        <ul>
        <h4>Services</h4>
          <li>Services Overview</li>
          <li>Wi-Fi</li>
          <li>PlayPlaces & Parties</li>
          <li>Mobile Order & Pay</li>
          <li>Trending Now</li>
          <li>Family Fun Hub</li>
          <li>McCafé®</li>
        </ul>
      </div>
      <div className="three">
        <ul>
        <h4>Community</h4>
          <li>Community Overview</li>
          <li>Meet the 1 in 8</li>
          <li>HACER® Scholarships for Hispanic Students</li>
          <li>Black and Positively Golden</li>
        </ul>
      </div>
      <div className="four">
        <ul>
        <h4>Contact Us</h4>
          <li>Contact Us Overview</li>
          <li>Gift Card FAQs</li>
          <li>Donations</li>
          <li>Employment</li>
          <li>Customer Feedback</li>
          <li>Frequently Asked Questions</li>
          
        </ul>
      </div>

    </div>
    <h5>©2023 Swiggy's. All Rights Reserved</h5>
    </div>



  );
}

export default App;
