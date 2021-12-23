import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Screens
import { ProductScreen } from "./screens/ProductScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { CartScreen } from "./screens/CartScreen";
import { SigninScreen } from "./screens/SigninScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { MyPostsScreen } from "./screens/MyPostsScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { CreatePostScreen } from "./screens/CreatePostScreen";
import { SinglePostScreen } from "./screens/SinglePostScreen";
// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} show={sideToggle} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/signin" element={<SigninScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/createpost" element={<CreatePostScreen />} />
          <Route exact path="/post/:id" element={<SinglePostScreen />} />
          <Route exact path="/myposts" element={<MyPostsScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
