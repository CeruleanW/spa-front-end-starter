import React from 'react';
import logo from './logo.svg';
import HomePage from './components/pages/HomePage';
import Theme from './components/Theme';

function App() {
  return (
    <Theme>
      <div className="App">
        <HomePage/>
      </div>
    </Theme>
  );
}

export default App;
