import React from 'react';
 
import Home from '../Home/index'
import Work from '../Work/index'
import Profile from '../Profile/index'
import Portflio from '../Portfolio/index'
import SocailMedia from '../SocialMedia/index'
import Footer from '../Footer/index'
import About from '../About/index'

function Index() {
  return (
    <div className="Index">
      <Home/>
      <Work/>
      <Portflio/>
      <Profile/>
      <About/>
      <SocailMedia/>
      <Footer/>
    </div>
  );
}

export default Index;
