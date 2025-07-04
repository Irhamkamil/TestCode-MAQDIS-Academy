// components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      {/* Gambar */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="/about-img.webp"
          alt="HAMIM User"
          className="w-full h-auto rounded-lg object-cover shadow-md"
          loading="lazy"
        />
      </div>

      {/* Konten Teks */}
      <div className="w-full md:w-1/2 text-gray-900 font-serif leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">Apa itu HAMIM?</h2>
        <p className="mb-4">
          HAMIM (Hafalan Al-Qur’an Metode Irama MAQDIS) <br />
          Adalah metode menghafal Al-Qur’an menggunakan alat bantu audio visual
          dengan bacaan irama menggunakan Maqom Bayati Khas MAQDIS yang sudah
          dipotong-potong sesuai pola nada untuk memudahkan dalam menghafal..
        </p>
        <p className="mb-4">
          Penggunaan irama diharapkan dapat membuat kegiatan menghafal Al-qur’an
          menjadi lebih menyenangkan serta mempercepat prosesnya.
        </p>
        <p className="mb-4 font-semibold">Bagaimana Metode belajar nya?</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Mudah</strong>, cukup dengan 3D
          </li>
          <li>Didengarkan</li>
          <li>Diikuti</li>
          <li>Dicoba Sendiri berulang Kali</li>
        </ul>
        <p className="mb-4 text-orange-600 font-semibold">
          Dengan 3D ini,{" "}
          <strong>
            maka menghafal bisa dilakukan oleh siapa saja, kapan saja, dimana
            saja.
          </strong>
        </p>
        <p>
          Program ini ditujukan terutama bagi pemula, dan bisa digunakan baik
          yang sudah bisa membaca Al-Quran ataupun belum.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
