
import { Component } from "react"
import NavLanding from '../components/Navbar/NavbarLanding/NavbarLanding';
import FooterLanding from "../components/Footer/FooterLanding/FooterLanding";
import CardLanding from "../containers/CardLanding";
//import App from "../App";
class Landing extends Component {
  render() {
    return (
      <>
      <NavLanding/>
      <CardLanding/>
      <FooterLanding />
      </>
    )
  }
}   
export default Landing;