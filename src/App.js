import React from 'react';
import './App.css';
import Page from './Page';
import { Provider } from 'react-redux';
import store from './store/store';
import Choose from './Choose';
import View from './View';
import Select1 from './Select1';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Choose/>
    <Select1/>
    <View />
    </Provider>
    </div>
  );
}

export default App;
