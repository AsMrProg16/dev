import NavbarMenu from "./Components/Navbar/NavbarMenu";
import NavbarTop from "./Components/Navbar/NavbarTop";
import Blog from './Page/Block'
import Docs from './Page/Docs'
import Tutorial from './Page/Tutorial'
import Community from "./Page/Community";
import Home from './Components/Home/Home'
import HomeText from "./Components/Home/HomeText";
import Versions from "./Page/Versions";
import Languages from "./Page/Languages";
import {Route, Routes} from 'react-router'

function App() {
  return (
   <div className="App">
    <NavbarTop />
    <NavbarMenu />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/version" element={<Versions />} />
        <Route path="/languges" element={<Languages />} />
      </Routes>
<HomeText />
   </div>
  );
}

export default App;
