import React, { useState , useEffect } from "react";
import "./Play.css";

const Play = () => {
  const [showDateTime, setShowDateTime] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
  if (showInfo) {
    document.body.style.overflow = "hidden"; // Prevent scroll when modal open
  } else {
    document.body.style.overflow = "auto"; // Restore scroll when closed
  }

  // Cleanup (when component unmounts)
  return () => {
    document.body.style.overflow = "auto";
  };
}, [showInfo]);
  const today = new Date();
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    }).toUpperCase();
    const num = date.getDate();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
    return { day, num, isToday };
  });
  const handleChooseClick = () => setShowDateTime(true);
  const handleInfoClick = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  return (
    <div className="play-section">
      {/* ------------------- LOCATION PAGE ------------------- */}
      {!showDateTime && (
        <>
          <div className="play-header">
            <div className="play-header-left">
              <div className="play-location">
                <span className="play-icon">
                  <img src="https://dinkpickleball.in/static/media/calendar.a214164a93ec1258bda34d21d9bd30b3.svg" />
                </span>
                <span className="location-text">LOCATION</span>
              </div>
              <h2 className="play-title">
                WHEN WOULD <br /> YOU LIKE TO PLAY?
              </h2>
            </div>
            <div className="play-step">
              <strong>01</strong>/03
            </div>
          </div>

          <div className="play-courts">
            <div className="court-card">
              <div className="image-wrapper">
                <img
                  src="https://api.dinkpickleball.in/image.php?image_url=https://admin.dinkpickleball.in/uploads/location/478831738918845.jpg"
                  alt="Court 1"
                />
              </div>
              <div className="court-footer">
                <div className="court-details">
                  <h3>DINK PICKLEBALL, PAL</h3>
                  <p>Pal, Surat</p>
                </div>
                <div className="court-actions">
                  <button className="info-btn" onClick={handleInfoClick}>
                    <img src="https://dinkpickleball.in/static/media/infoIcon.11dde98b8cd0f7f54b91708e3dbd1f15.svg" />
                  </button>
                  <button className="choose-btn" onClick={handleChooseClick}>
                    CHOOSE
                  </button>
                </div>
              </div>
            </div>

            <div className="court-card">
              <div className="image-wrapper">
                <img
                  src="https://api.dinkpickleball.in/image.php?image_url=https://admin.dinkpickleball.in/uploads/location/632571742291316.jpeg"
                  alt="Court 2"
                />
              </div>
              <div className="court-footer">
                <div className="court-details">
                  <h3>DINK PICKLEBALL, MOTA VARACCHA</h3>
                  <p>River Front, Mota Varachha</p>
                </div>
                <div className="court-actions">
                  <button className="info-btn" onClick={handleInfoClick}>
                    <img src="https://dinkpickleball.in/static/media/infoIcon.11dde98b8cd0f7f54b91708e3dbd1f15.svg" />
                  </button>
                  <button className="choose-btn" onClick={handleChooseClick}>
                    CHOOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* ------------------- DATE & TIME PAGE ------------------- */}
      {showDateTime && (
        <div className="datetime-section">
          <div className="play-header">
            <div className="play-header-left">
              <div className="play-location">
                <span className="play-icon">
                  <img src="https://dinkpickleball.in/static/media/calendar.a214164a93ec1258bda34d21d9bd30b3.svg" />
                </span>
                <span className="location-text">DATE & TIME</span>
              </div>
              <h2 className="play-title">
                WHEN WOULD <br /> YOU LIKE TO PLAY?
              </h2>
            </div>
            <div className="play-step">
              <strong>02</strong>/03
            </div>
          </div>

          <div className="calendar-container">
            <div className="date-cards">
              {dates.map((d, i) => (
                <div key={i} className={`date-card ${d.isToday ? "active" : ""}`}>
                  <p className="day">{d.day}</p>
                  <h3>{d.num}</h3>
                </div>
              ))}
            </div>
          </div>
          <p className="note">
            NOTE: COURT RENTAL RATES RANGE FROM ₹600 TO ₹800 PER HOUR, DEPENDING ON THE TIME SLOT.
          </p>

          <div className="time-slot-container">
            <div className="time-card morning">
              <div className="time-card-header">
                <div className="header-left">
                  <span><img src="/assets/daysun.png" alt="Day" /></span>
                  <h3>MORNING</h3>
                </div>
                <span className="price">₹600.00</span>
              </div>
              <div className="time-buttons">
                {["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].map((time) => (
                  <button key={time} className="time-btn">
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-card afternoon">
              <div className="time-card-header">
                <div className="header-left">
                  <span><img src="/assets/afternoon.png" alt="Afternoon" /></span>
                  <h3>AFTERNOON</h3>
                </div>
                <span className="price">₹800.00</span>
              </div>
              <div className="time-buttons">
                {["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map((time) => (
                  <button key={time} className="time-btn">
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-card evening">
              <div className="time-card-header">
                <div className="header-left">
                  <span><img src="/assets/night.png" alt="Night" /></span>
                  <h3>EVENING</h3>
                </div>
                <span className="price">₹800.00</span>
              </div>
              <div className="time-buttons">
                {["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"].map((time, i) => (
                  <button key={time} className={`time-btn ${i === 5 ? "disabled" : ""}`} disabled={i === 5}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="continue-btn">CONTINUE 
            <span className="arrow"><img src="https://dinkpickleball.in/static/media/rightArrow.ed19853dc4ba5c77f3ea1818551f795c.svg" /></span>
          </button>
        </div>
      )}

      {/* ------------------- INFO MODAL ------------------- */}
      {showInfo && (
        <div className="info-modal-overlay" onClick={handleCloseInfo}>
          <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="info-close" onClick={handleCloseInfo}>
              ×
            </button>

            <h2 className="info-title">DINK PICKLEBALL, PAL</h2>
            <p className="info-subtitle">0 INDOOR • 8 OUTDOOR</p>
            <hr />

            <div className="info-content">
              {/* LOCATION */}
              <div className="info-location-box">
                <h3>LOCATION</h3>
                <p>Pal, Surat</p>
                <button className="map-btn">➤</button>
              </div>

              {/* FACILITIES */}
              <div className="info-facilities">
                <h3>FACILITIES</h3>
                <div className="facility-grid">
                  <div className="facility-item">
                   <img src="/assets/lockers.png" alt="Lockers" />
                    <p>LOCKERS</p>
                  </div>
                  <div className="facility-item">
                    <img src="/assets/parking.png" alt="Parking" />
                    <p>PARKING</p>
                  </div>
                  <div className="facility-item">
                    <img src="/assets/Washroom.png" alt="Washroom" />
                    <p>WASHROOM</p>
                  </div>
                  <div className="facility-item">
                    <img src="/assets/FB.png" alt="FB" />
                    <p>F&B</p>
                  </div>
                </div>
              </div>

              {/* GALLERY */}
              <h3 className="gallery-heading">PHOTO GALLERY</h3>
              <div className="gallery-grid">
                <img
                  src="https://admin.dinkpickleball.in/uploads/location/478831738918845.jpg"
                  alt="Court 1"
                />
                <img
                  src="https://admin.dinkpickleball.in/uploads/location/632571742291316.jpeg"
                  alt="Court 2"
                />
                <img src="/assets/stadium1.png" alt="Stadium" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;

