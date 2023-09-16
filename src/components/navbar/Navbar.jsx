import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);

window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
}

  return (
    <div className={isScrolled ? "navbar scrolled" : " navbar "}>
        <div className="container">

            <div className="left">
                <img src="https://www.cdnlogo.com/logos/n/40/netflix.svg" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Popular</span>
            </div>

            <div className="right">
             <Search  className="icon"/>
             <Notifications  className="icon"/>
                <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                

                <div className="profile">
                    <ArrowDropDown className="icon"/>

                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Navbar