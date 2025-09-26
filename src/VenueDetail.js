import React, { useState } from 'react';
import './VenueDetail.css';

const VenueDetail = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('');

  // Calendar data for January 2026
  const calendarDays = [
    { date: 1, available: false, status: 'booked-admin', label: 'Active (Administration Process)' },
    { date: 2, available: true, status: 'available', label: 'Available' },
    { date: 3, available: true, status: 'available', label: 'Available' },
    { date: 4, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 5, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 6, available: true, status: 'available', label: 'Available' },
    { date: 7, available: true, status: 'available', label: 'Available' },
    { date: 8, available: false, status: 'deadline-passed', label: 'Booking Deadline Passed' },
    { date: 9, available: true, status: 'available', label: 'Available' },
    { date: 10, available: true, status: 'available', label: 'Available' },
    { date: 11, available: false, status: 'booked-admin', label: 'Active (Administration Process)' },
    { date: 12, available: true, status: 'available', label: 'Available' },
    { date: 13, available: true, status: 'available', label: 'Available' },
    { date: 14, available: true, status: 'available', label: 'Available' },
    { date: 15, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 16, available: true, status: 'available', label: 'Available' },
    { date: 17, available: true, status: 'available', label: 'Available' },
    { date: 18, available: false, status: 'deadline-passed', label: 'Booking Deadline Passed' },
    { date: 19, available: true, status: 'available', label: 'Available' },
    { date: 20, available: true, status: 'available', label: 'Available' },
    { date: 21, available: false, status: 'booked-admin', label: 'Active (Administration Process)' },
    { date: 22, available: true, status: 'available', label: 'Available' },
    { date: 23, available: true, status: 'available', label: 'Available' },
    { date: 24, available: true, status: 'available', label: 'Available' },
    { date: 25, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 26, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 27, available: false, status: 'deadline-passed', label: 'Booking Deadline Passed' },
    { date: 28, available: false, status: 'booked-admin', label: 'Active (Administration Process)' },
    { date: 29, available: false, status: 'booked-used', label: 'Active (In Use)' },
    { date: 30, available: false, status: 'deadline-passed', label: 'Booking Deadline Passed' },
    { date: 31, available: true, status: 'available', label: 'Available' },
  ];

  const venueImages = [
    '/venueImage1.png',
    '/venueImage2.png',
    '/venueImage3.png'
  ];

  const nextImage = () => {
    setAnimationDirection('slide-in-right');
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % venueImages.length);
      setTimeout(() => setAnimationDirection(''), 50);
    }, 50);
  };

  const prevImage = () => {
    setAnimationDirection('slide-in-left');
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + venueImages.length) % venueImages.length);
      setTimeout(() => setAnimationDirection(''), 50);
    }, 50);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

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
            <div className="carousel-container">
              <div className="carousel-wrapper">
                <button className="carousel-btn prev-btn" onClick={prevImage}>
                  ←
                </button>
                <div className="carousel-main">
                  <img
                    src={venueImages[currentImageIndex]}
                    alt={`Student Center ${currentImageIndex + 1}`}
                    className={`carousel-main-image ${animationDirection}`}
                  />
                  <img
                    src={venueImages[(currentImageIndex + 1) % venueImages.length]}
                    alt={`Student Center ${((currentImageIndex + 1) % venueImages.length) + 1}`}
                    className={`carousel-main-image ${animationDirection}`}
                  />
                </div>
                <button className="carousel-btn next-btn" onClick={nextImage}>
                  →
                </button>
              </div>
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
                <div className="legend-color booked-admin"></div>
                <span>Active (Administration Process)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color booked-used"></div>
                <span>Active (In Use)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color available"></div>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <div className="legend-color deadline-passed"></div>
                <span>Booking Deadline Passed</span>
              </div>
            </div>

            <div className="calendar-instruction">
              *Select the date you want to book by clicking on the date
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;