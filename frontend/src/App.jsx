import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import RouletteDoublePage from './pages/RouletteDoublePage';

const DefaultLayout = React.lazy(() => import('./layout/Default'));

function App() {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
               
          <Route element={<DefaultLayout />}>
            <Route path="/roulette-double" element={<RouletteDoublePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/roulette-double" />} />

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;