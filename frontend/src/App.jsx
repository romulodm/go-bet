import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import RouletteDoublePage from './pages/RouletteDoublePage';
import HomePage from './pages/HomePage';

const DefaultLayout = React.lazy(() => import('./layout/Default'));

function App() {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
               
          <Route element={<DefaultLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/roulette-double" element={<RouletteDoublePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/home" />} />

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;