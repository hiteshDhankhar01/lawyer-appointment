"use client"

import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [appointments, setAppointments] = useState(true);

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6 ">
        <div className=" w-full">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            We Fight for Right
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Talk to our best lawyers and book appointments online effortlessly.
          </p>
          {appointments ? (
          <div className="relative bg-gradient-to-r from-transparent px-10 via-gray-950 to-transparent  text-white mt-10 p-4  shadow-lg">
          <p className="mb-2 text-lg">
            <span className="font-semibold">

            You have scheduled an appointment for  
            {/* pending */}

            {/* You have secured an appointment for */}
            {/* approved */}

            {/* Unfortunately, your appointment has been canceled for */}
            {/* rejected  */}
            
              </span> Monday, 5 October 2025
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Status:</span>
            <span className="inline-block ml-2 px-3 py-1 rounded-full text-sm bg-yellow-500 animate-pulse">
              pending
            </span>
          </p>
          <Link href='/appointment' className="inline-block mt-4 px-4 py-2  text-white rounded-full shadow-md hover:bg-gray-200 bg-transparent border-[.1px] border-white k hover:text-black transition duration-500 backdrop-blur-sm">
            More Details
          </Link>
          
        </div>
          ) : (
            <Link
              href="/book-appointment"
              className="bg-transparent border-[.1px] border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-500 backdrop-blur-sm"
            >
              Book Appointment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;


// "use client"

// import Link from "next/link";
// import { useState } from "react";

// const Hero = () => {
//   const [appointments,setAppointments] = useState(false)

//   return (
//     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
//         <div>
//           <h1 className="text-5xl font-extrabold text-white mb-4">
//             We Fight for Right
//           </h1>
//           <p className="text-xl text-gray-200 mb-8">
//             Talk to our best lawyers and book appointments online effortlessly.
//           </p>
          
//           <Link
//             href="/book-appointment"
//             className="bg-transparent border-[.1px] border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-500 backdrop-blur-sm"
//           >
//             Book Appointment
//           </Link>
//         </div>
//         <div className="relative w-full bg-gradient-to-r from-transparent via-gray-950 to-transparent text-white mt-10 p-6 rounded-lg shadow-lg ">
//             <p className="mb-2 text-lg">
//               <span className="font-semibold">Your appointment is on:</span> Monday, October 5, 2025
//             </p>
//             <p className="mb-2 text-lg">
//               <span className="font-semibold">Status:</span>
//               <span className="inline-block ml-2 px-3 py-1 rounded-full text-sm bg-yellow-500 animate-pulse">
//                 Pending
//               </span>
//             </p>
//             <Link href='/bookappointment' className="inline-block border-[.1px] border-white mt-4 px-4 py-2 text-white rounded-full shadow-md bg-transparent backdrop-blur-sm hover:bg-gray-200 hover:text-black transition duration-500">
//               More Details
//             </Link> 
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
//         <div>
//           <h1 className="text-5xl font-extrabold text-white mb-4">
//             We Fight for Right
//           </h1>
//           <p className="text-xl text-gray-200 mb-8">
//             Talk to our best lawyers and book appointments online effortlessly.
//           </p>
//           {/* <Link
//             href="/book-appointment"
//             className="bg-transparent border-[.1px] border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-500 backdrop-blur-sm"
//           >
//             Book Appointment
//           </Link> */}
         

          // <div className="relative bg-gradient-to-r from-transparent px-10 via-gray-950 to-transparent  text-white mt-10 p-4  shadow-lg border min-w-full">
          //   <p className="mb-2 text-lg">
          //     <span className="font-semibold">Your appointment is on:</span> Monday, 5 October 2025
          //   </p>
          //   <p className="mb-2 text-lg">
          //     <span className="font-semibold">Status:</span>
          //     <span className="inline-block ml-2 px-3 py-1 rounded-full text-sm bg-yellow-500 animate-pulse">
          //       pending
          //     </span>
          //   </p>
          //   <Link href='/bookappointment' className="inline-block mt-4 px-4 py-2  text-white font-semibold rounded-full shadow-md hover:bg-gray-200 bg-transparent border-[.1px] border-white k transition duration-500 backdrop-blur-sm">
          //     More Details
          //   </Link>
            
          // </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Hero;