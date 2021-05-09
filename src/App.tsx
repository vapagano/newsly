import React, { Suspense } from 'react';

import Routes from './modules/Routes';
import './App.scss';
import Spinner from './components/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner loading={true}/>}>
      <Routes />
     </Suspense>
  );
}

export default App;
