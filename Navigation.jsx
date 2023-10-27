import { Outlet,Link } from "react-router-dom"
import CoverImage from "./CoverImage";
import HeaderFreelancer from "./HeaderFreelancer"
import CardList from "./Cardlist"
import Button from "./Button"
import HeaderCustomer from "./HeaderCustomer"
import CustomerCardList from "./CustomerCardlist"
import Tutorialbutton from "./Tutorialbutton"
import Mail from "./Mail"
import Footer from "./Footer"


function Navigation()
{
 return(<div>
  <div className="topnav">
      <div className="logo">
        <img src= "https://i.pinimg.com/736x/9e/9b/fd/9e9bfd8ff0786d9c11f0c19b49d2c439.jpg" alt="logo" width={70} height={70} />
      </div>
      <div className="search-container text-center">
        <div className="text-center">
          <input type="text" placeholder="..." />
        </div>
      </div>
      
    <Link to= "/Post">
   Post
   </Link>
   <Link to= "/login">
   Login
   </Link>
   <Link to= "/signout">
   Sign Out
   </Link>
   </div>
    <CoverImage />
    <HeaderFreelancer />
    <CardList />
    <Button />
    <HeaderCustomer />
    <CustomerCardList />
    <Tutorialbutton />
    <Mail />
    <Footer />
  

 <Outlet />
 </div>)

}
export default Navigation