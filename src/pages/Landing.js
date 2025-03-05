
import { Component } from "react"
import NavLanding from '../components/Navbar/NavbarLanding/NavbarLanding';
import BasicExample from "../containers/CardLanding";
import FooterLanding from "../components/Footer/FooterLanding/FooterLanding";
//import App from "../App";
class Landing extends Component {
  render() {
    return (
      <>
      <NavLanding/>
      <BasicExample/>
      <FooterLanding />
      </>
    )
  }
}   
export default Landing;