import React from "react";
import "./Play.css";

const Play = () => {
  return (
    <div className="play-section">
      {/* Header Section */}
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

      {/* Court Cards */}
      <div className="play-courts">
        <div className="court-card">
          <div className="image-wrapper">
            <img
              src="https://api.dinkpickleball.in/image.php?image_url=https://admin.dinkpickleball.in/uploads/location/478831738918845.jpg"
              alt="Court at Night"
            />
          </div>
          <div className="court-footer">
            <div className="court-details">
              <h3>DINK PICKLEBALL, PAL</h3>
              <p>Pal, Surat</p>
            </div>
            <div className="court-actions">
              <button className="info-btn">
                <img src="https://dinkpickleball.in/static/media/infoIcon.11dde98b8cd0f7f54b91708e3dbd1f15.svg" />
              </button>
              <button className="choose-btn">CHOOSE</button>
            </div>
          </div>
        </div>

        <div className="court-card">
          <div className="image-wrapper">
            <img
              src="https://api.dinkpickleball.in/image.php?image_url=https://admin.dinkpickleball.in/uploads/location/632571742291316.jpeg"
              alt="Court at Day"
            />
          </div>
          <div className="court-footer">
            <div className="court-details">
              <h3>DINK PICKLEBALL, MOTA VARACCHA</h3>
              <p>River Front, Mota Varachha</p>
            </div>
            <div className="court-actions">
              <button className="info-btn">
                <img src="https://dinkpickleball.in/static/media/infoIcon.11dde98b8cd0f7f54b91708e3dbd1f15.svg" />
              </button>
              <button className="choose-btn">CHOOSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
