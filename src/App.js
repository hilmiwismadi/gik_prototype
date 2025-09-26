import React, { useState } from 'react';
import VenueMap from './VenueMap';
import VenueDetail from './VenueDetail';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('map');
  const [selectedVenue, setSelectedVenue] = useState(null);

  const showVenueDetail = (venue) => {
    setSelectedVenue(venue);
    setCurrentView('detail');
  };

  const backToMap = () => {
    setCurrentView('map');
    setSelectedVenue(null);
  };

  return (
    <div className="App">
      <main>
        {currentView === 'map' && (
          <VenueMap onShowDetail={showVenueDetail} />
        )}
        {currentView === 'detail' && (
          <VenueDetail venue={selectedVenue} onBack={backToMap} />
        )}
      </main>
    </div>
  );
}

export default App;