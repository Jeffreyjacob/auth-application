import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/Layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forget";
import Reset from "./pages/auth/Reset";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Reactroute from "./pages/home/Reactroute";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout>
      <Home/>
      </Layout>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/resetPassword/:resetToken" element={<Reset/>}/>
      <Route path="/loginWithCode/:email" element={<LoginWithCode/>}/>
      <Route path="/practicing" element={<Reactroute/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
