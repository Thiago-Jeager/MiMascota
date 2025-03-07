import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
function App() {
  return (
    <div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<Landing/>} />


          <Route path="/login" element={<Login/>} />
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Redirect from="*" to="/home" /> */}

        </Routes>

    </div>
  );
}

export default App;
