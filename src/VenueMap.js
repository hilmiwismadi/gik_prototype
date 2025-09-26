import React, { useState } from 'react';
import './VenueMap.css';

const VenueMap = ({ onShowDetail }) => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Updated venue areas based on the new map layout
  const venueZones = [
    {
      id: 'joglo',
      name: 'Joglo',
      sqft: '800 m2',
      labelPosition: { top: '75%', left: '35%' },
      type: 'venue-image',
      description: 'Traditional Javanese architecture venue',
      imageUrl: '/joglo_hover.png',
      imageSize: { width: '100px', height: '100px' },
      imageRotation: 0, // degrees
      imageScale: 1.0 // individual scale (0.5 = half, 1.0 = normal, 2.0 = double)
    },
    {
      id: 'student-center',
      name: 'Student Center',
      sqft: '1,256 m2',
      labelPosition: { top: '74%', left: '47%' },
      type: 'venue-image',
      description: 'Multi-purpose venue for seminars and gatherings',
      imageUrl: '/studentCenter_hover.png',
      imageSize: { width: '120px', height: '100px' },
      imageRotation: -3, // degrees
      imageScale: 1.0 // individual scale
    },
    {
      id: 'room-c1',
      name: 'Room C1',
      sqft: '150 m2',
      labelPosition: { top: '55.7%', left: '43%' },
      type: 'venue-image',
      description: 'Meeting room and classroom space',
      imageUrl: '/roomC1_hover.png',
      imageSize: { width: '50px', height: '50px' },
      imageRotation: 0, // degrees
      imageScale: 1.0 // individual scale
    },
    {
      id: 'room-c2',
      name: 'Room C2',
      sqft: '150 m2',
      labelPosition: { top: '47%', left: '41.9%' },
      type: 'venue-image',
      description: 'Meeting room and classroom space',
      imageUrl: '/roomC2_hover.png',
      imageSize: { width: '70px', height: '56px' },
      imageRotation: 0, // degrees
      imageScale: 0.59 // individual scale
    },
    {
      id: 'room-c3',
      name: 'Room C3',
      sqft: '150 m2',
      labelPosition: { top: '46.3%', left: '44.3%' },
      type: 'venue-image',
      description: 'Meeting room and classroom space',
      imageUrl: '/roomC3_hover.png',
      imageSize: { width: '80px', height: '80px' },
      imageRotation: 0, // degrees
      imageScale: 0.3 // individual scale
    },
    {
      id: 'room-c4',
      name: 'Room C4',
      sqft: '150 m2',
      labelPosition: { top: '46.1%', left: '45.9%' },
      type: 'venue-image',
      description: 'Meeting room and classroom space',
      imageUrl: '/roomC4_hover.png',
      imageSize: { width: '70px', height: '90px' },
      imageRotation: 0, // degrees
      imageScale: 0.27 // individual scale
    },
    {
      id: 'room-c5',
      name: 'Room C5',
      sqft: '150 m2',
      labelPosition: { top: '45.4%', left: '47.7%' }  ,
      type: 'venue-image',
      description: 'Meeting room and classroom space',
      imageUrl: '/roomC5_hover.png',
      imageSize: { width: '80px', height: '80px' },
      imageRotation: 0, // degrees
      imageScale: 0.3 // individual scale
    },
  ];

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setShowPopup(true);
  };

  const handleAreaHover = (area) => {
    setHoveredArea(area);
  };

  const handleAreaLeave = () => {
    setHoveredArea(null);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedArea(null);
  };

  const handleSeeDetail = () => {
    onShowDetail && onShowDetail(selectedArea);
    closePopup();
  };

  return (
    <div className="venue-container">
      <h1 className="venue-title">Choose your Venue</h1>

      <div className="venue-map-wrapper">
        <div className="venue-background">
          <img src="/new-venue-map.png" alt="Venue Floor Plan" className="venue-image" />

          {/* Zone Labels positioned around the image */}
          {venueZones.map((zone) => (
            <div key={zone.id} className="zone-label-container">
              {/* Zone Label Box or Image */}
              {zone.type === 'venue-image' ? (
                <img
                  src={zone.imageUrl}
                  alt={zone.name}
                  className={`venue-image-clickable ${
                    hoveredArea?.id === zone.id ? 'hovered' : ''
                  } ${selectedArea?.id === zone.id ? 'selected' : ''}`}
                  style={{
                    position: 'absolute',
                    top: zone.labelPosition.top,
                    left: zone.labelPosition.left,
                    transform: `translate(-50%, -50%) rotate(${zone.imageRotation || 0}deg) scale(${zone.imageScale || 1.0}) ${
                      hoveredArea?.id === zone.id ? 'scale(1.3)' : ''
                    } ${selectedArea?.id === zone.id ? 'scale(1.15)' : ''}`,
                    width: zone.imageSize.width,
                    height: zone.imageSize.height
                  }}
                  onMouseEnter={() => handleAreaHover(zone)}
                  onMouseLeave={handleAreaLeave}
                  onClick={() => handleAreaClick(zone)}
                />
              ) : (
                <div
                  className={`zone-label-box ${
                    hoveredArea?.id === zone.id ? 'hovered' : ''
                  } ${selectedArea?.id === zone.id ? 'selected' : ''}`}
                  style={{
                    position: 'absolute',
                    top: zone.labelPosition.top,
                    left: zone.labelPosition.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => handleAreaHover(zone)}
                  onMouseLeave={handleAreaLeave}
                  onClick={() => handleAreaClick(zone)}
                >
                  <div className="zone-name">{zone.name}</div>
                  <div className="zone-sqft">{zone.sqft}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && selectedArea && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>

            <div className="popup-content">
              <div className="popup-left">
                <h3>{selectedArea.name}</h3>

                <div className="detail-specs">
                  <p><strong>Luasan Ruangan:</strong> 1.256 m2</p>
                  <p><strong>Jumlah Pintu:</strong> 3 Pintu Terbuka</p>
                  <p><strong>Kapasitas Kursi:</strong> 600 orang</p>
                  <p><strong>Tinggi Plafond Tertinggi:</strong> 9.50 m</p>
                  <p><strong>Tinggi Plafond Terendah:</strong> 6.21 m</p>
                  <p><strong>Kapasitas Daya Listrik:</strong> 1 Ph / 25 Amp (5.5kw)</p>
                </div>

                <div className="rental-price">
                  <h4>Nominal Sewa</h4>
                  <p className="price">Rp. 15.000.000,- / 12 Jam</p>
                  <p className="price-note">* Harga belum termasuk PPN</p>
                  <p className="price-note">* Harga tidak termasuk penggantian inventaris venue apabila rusak</p>
                </div>

                <button className="see-detail-btn" onClick={handleSeeDetail}>
                  See Detail
                </button>
              </div>

              <div className="popup-right">
                <div className="zone-diagram">
                  <img src={selectedArea.imageUrl || "/new-venue-map.png"} alt={selectedArea.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueMap;