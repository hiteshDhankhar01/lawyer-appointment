const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            We Fight for Right
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Talk to our best lawyers and book appointments online effortlessly.
          </p>
          <a
            href="/book-appointment"
            className="bg-transparent border border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-300 backdrop-blur-sm"
          >
            Book Appointment
          </a>
        </div>
        {/* <form action="" className="mt-8 w-full">
          <input
            style={{ backgroundColor: "rgba(255,255,255,.3)" }}
            type="text"
            placeholder="Enter your query"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm outline-none w-3/5"
          />
        </form> */}
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//     return (
//         <div className="bg-gray-100 py-20">
//             <div className="container mx-auto px-6 text-center">
//                 <h1 className="text-4xl font-bold text-black mb-4">
//                     Welcome to Lawyer Appointment AI
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-8">
//                     Find the best lawyers and book appointments online effortlessly.
//                 </p>
//                 <a
//                     href="/register"
//                     className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
//                 >
//                     Get Started
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Hero;
