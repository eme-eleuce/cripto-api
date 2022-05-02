import React from 'react';
import Coins from './componentes/coins/coins';
import Navbar from './componentes/navegacion/navbar';
import SignUp from './componentes/signup/signup';


function App() {
  return (
    <div>
      <Navbar />
      <Coins />
      <SignUp />
    </div>
  );
}

export default App;
