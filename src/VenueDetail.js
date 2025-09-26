import React, { useState } from 'react';
import './VenueDetail.css';

const VenueDetail = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Calendar data for January 2026
  const calendarDays = [
    { date: 1, available: false, status: 'unavailable' },
    { date: 2, available: true, status: 'available' },
    { date: 3, available: true, status: 'available' },
    { date: 4, available: false, status: 'unavailable' },
    { date: 5, available: false, status: 'unavailable' },
    { date: 6, available: true, status: 'available' },
    { date: 7, available: true, status: 'available' },
    { date: 8, available: true, status: 'available' },
    { date: 9, available: true, status: 'available' },
    { date: 10, available: true, status: 'available' },
    { date: 11, available: true, status: 'available' },
    { date: 12, available: true, status: 'available' },
    { date: 13, available: true, status: 'available' },
    { date: 14, available: true, status: 'available' },
    { date: 15, available: true, status: 'available' },
    { date: 16, available: true, status: 'available' },
    { date: 17, available: true, status: 'available' },
    { date: 18, available: true, status: 'available' },
    { date: 19, available: true, status: 'available' },
    { date: 20, available: true, status: 'available' },
    { date: 21, available: true, status: 'available' },
    { date: 22, available: true, status: 'available' },
    { date: 23, available: true, status: 'available' },
    { date: 24, available: true, status: 'available' },
    { date: 25, available: false, status: 'unavailable' },
    { date: 26, available: false, status: 'unavailable' },
    { date: 27, available: false, status: 'unavailable' },
    { date: 28, available: false, status: 'unavailable' },
    { date: 29, available: false, status: 'unavailable' },
    { date: 30, available: false, status: 'unavailable' },
    { date: 31, available: false, status: 'unavailable' },
  ];

  const venueImages = [
    '/venue-map.png',
    '/venue-map.png',
    '/venue-map.png',
    '/venue-map.png',
    '/venue-map.png',
    '/venue-map.png'
  ];

  return (
    <div className="venue-detail-container">
      <div className="venue-detail-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Map
        </button>
      </div>

      <div className="venue-detail-content">
        <div className="venue-detail-left">
          <h1 className="venue-name">Student Center</h1>

          <div className="venue-description">
            <div className="description-text">
              <p>
                <strong>Student Center</strong> berlokasi dekat Joglo dan entrance barat
                (Boulevard UGM). Memiliki area mezzanine yang cukup luas,
                melengkapi fungsi venue ini yang dapat digunakan untuk
                seminar, gathering, webinar dan lain-lain dengan skala besar.
              </p>
            </div>
          </div>

          <div className="venue-gallery">
            <div className="gallery-grid">
              {venueImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Student Center ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="venue-specs-detail">
            <h3>Detail Ruangan</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <strong>Luasan Ruangan:</strong> 1.256 m2
              </div>
              <div className="spec-item">
                <strong>Jumlah Pintu:</strong> 3 Pintu Terbuka
              </div>
              <div className="spec-item">
                <strong>Kapasitas Kursi:</strong> 600 orang
              </div>
              <div className="spec-item">
                <strong>Tinggi Plafond Tertinggi:</strong> 9.50 m
              </div>
              <div className="spec-item">
                <strong>Tinggi Plafond Terendah:</strong> 6.21 m
              </div>
              <div className="spec-item">
                <strong>Kapasitas Daya Listrik:</strong> 1 Ph / 25 Amp (5.5kw)
              </div>
            </div>

            <div className="pricing-detail">
              <h4>Nominal Sewa</h4>
              <p className="price-large">Rp. 15.000.000,- / 12 Jam</p>
              <p className="price-note">* Harga belum termasuk PPN</p>
              <p className="price-note">* Harga tidak termasuk penggantian inventaris venue apabila rusak</p>
            </div>
          </div>
        </div>

        <div className="venue-detail-right">
          <div className="calendar-section">
            <div className="calendar-header">
              <h3>January 2026</h3>
              <div className="calendar-nav">
                <button>←</button>
                <button>→</button>
              </div>
            </div>

            <div className="calendar-grid">
              <div className="calendar-weekdays">
                <div className="weekday">M</div>
                <div className="weekday">S</div>
                <div className="weekday">S</div>
                <div className="weekday">R</div>
                <div className="weekday">K</div>
                <div className="weekday">J</div>
                <div className="weekday">S</div>
              </div>

              <div className="calendar-days">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${day.status} ${
                      selectedDate === day.date ? 'selected' : ''
                    }`}
                    onClick={() => day.available && setSelectedDate(day.date)}
                  >
                    <span className="day-number">{day.date}</span>
                    {day.date <= 3 && <span className="day-month">Jan</span>}
                    {day.date >= 4 && day.date <= 10 && <span className="day-month">Jan</span>}
                    {day.date >= 11 && day.date <= 17 && <span className="day-month">Jan</span>}
                    {day.date >= 18 && day.date <= 24 && <span className="day-month">Jan</span>}
                    {day.date >= 25 && <span className="day-month">Jan</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar-legend">
              <div className="legend-item">
                <div className="legend-color available"></div>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <div className="legend-color unavailable"></div>
                <span>Libur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;