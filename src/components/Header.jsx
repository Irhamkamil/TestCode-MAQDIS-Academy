export default function Header() {
  return (
    <div
      id="header"
      style={{ backgroundImage: "url('/hero-img.jpg')" }}
      className=" relative w-full h-[500px] bg-cover bg-center bg-no-repeat md:mt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300/50 via-gray-800/40 to-gray-400/60"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-full">
        <div className=" mb-10 md:mb-0 text-center px-2">
          <p className="mt-6 font-semibold text-white text-2xl md:text-4xl">
            H A M I M
          </p>
          <p className="mt-6 font-semibold text-white text-4xl md:text-5xl">
            (Hafalan Al-Quran Metode Irama Maqdis)
          </p>
          <p className="mt-6 font-semibold text-white text-2xl md:text-3xl">
            Sahabat Penghafal Al-Quran
          </p>
        </div>
      </div>
    </div>
  );
}
