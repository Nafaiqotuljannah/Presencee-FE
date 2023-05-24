import React from "react";
import "./aboutUs.css";
import { IMAGES } from "../../../assets/constant";

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <div className="about">
          <div className="about-text">
            <h1>PRESENSEE</h1>
            <p>
              Presensee merupakan platform untuk presensi berbasis online.
              Presensee hadir untuk memudahkan akses dalam mengisi absensi dari
              segi peserta didik dan membantu pendidikan mengetahui kehadiran
              dari peserta didik.
            </p>
          </div>
          <div className="about-image">
            <img src={IMAGES.AboutUs} alt="about us image" width={500} />
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-text">
          <div className="info-mahasiswa">
            <p>
              500 <br /> Mahasiswa
            </p>
          </div>
          <div className="info-dosen">
            <p>
              50 <br /> dosen
            </p>
          </div>
          <div className="info-kelas">
            <p>
              20 <br /> Kelas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
