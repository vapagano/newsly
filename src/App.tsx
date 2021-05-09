import React, { Suspense } from 'react';

import Routes from './modules/Routes';
import './App.scss';

function App() {
  return (
    <Suspense fallback={null}>
      <Routes />
     </Suspense>
  );
}

export default App;
