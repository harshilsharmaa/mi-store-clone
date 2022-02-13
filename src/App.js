import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Offers from './component/Offers';
import StarProducts from './component/StarProducts.js';
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js';
import HotAccessories from './component/HotAccessories.js';
import ProductReview from './component/ProductReview.js';
import Videos from './component/Videos.js';
import Banner from './component/Banner.js';
import Footer from './component/Footer.js';
import NavOptions from "./component/NavOptions.js"
import jsonData from "./data/data.json"
import Heading from "./component/Heading.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptions miPhones={jsonData.miPhones} redmiPhones={jsonData.redmiPhones} tv={jsonData.tv} laptop={jsonData.laptop} fitnessAndLifeStyle={DataTransfer.fitnessAndLifeStyle} home={jsonData.home} audio={jsonData.audio} accessories={jsonData.accessories}/>

      <Slider start={jsonData.banner.start} />
      <Offers offer={jsonData.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={jsonData.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
          <Route exact path="/music" element={<HotAccessories music={jsonData.hotAccessories.music} musicCover={jsonData.hotAccessoriesCover.music} />}> </Route>

          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={jsonData.hotAccessories.smartDevice} smartDeviceCover={jsonData.hotAccessoriesCover.smartDevice}/>}> </Route>

          <Route exact path="/home" element={<HotAccessories home={jsonData.hotAccessories.home} homeCover={jsonData.hotAccessoriesCover.home}/>}> </Route>

          <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={jsonData.hotAccessories.lifeStyle} lifeStyleCover={jsonData.hotAccessoriesCover.lifeStyle}/>}> </Route>

          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={jsonData.hotAccessories.mobileAccessories} mobileAccessoriesCover={jsonData.hotAccessoriesCover.mobileAccessories}/>}> </Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>

      <ProductReview productReviews={jsonData.productReviews}/>

      <Heading text="VIDEOS"/>

      <Videos videos={jsonData.videos}/>

      <Heading text="IN THE PRESS"/>

      <Banner banner={jsonData.banner}/>


      <Footer footer={jsonData.footer}/>

    </Router>


  );
}

export default App;
