import React from 'react';
import Navbar from './app/ui/Navigation/Navbar';
import Providers from './app/Providers/ProvidersUtil';
import Routing from './app/Routing/Routing';

function App() {
  return (
    <Providers>
      <Navbar />
      <Routing />
    </Providers>
  );
}

export default App;
