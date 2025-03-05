
import { Component } from "react"
import NavScrollExample from '../components/Navbar/navbar_cat';
//import App from "../App";
import AutoLayoutExample from "../containers/presentation";
class Home extends Component {
  render() {
    return (
        <div> 
            <NavScrollExample />
            {/* <App /> */}
            <AutoLayoutExample />

        </div> 
    )
  }
}   
export default Home;