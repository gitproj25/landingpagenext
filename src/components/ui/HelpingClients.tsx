// // "use client";
// // import { Users, Network, Calendar, CreditCard } from "lucide-react";

// // export default function HelpingClients() {
// //   return (
// //     <section className="w-full bg-gray-50 py-12 md:py-20">
// //       <div className=" flex max-w-7xl mx-auto px-4">
// //         {/* Title */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
// //             Helping a local{" "}
// //             <span className="text-green-600">business reinvent itself</span>
// //           </h2>
// //           <p className="text-gray-600 mt-2">
// //             We reached here with our hard work and dedication
// //           </p>
// //         </div>

// //         {/* Stats Grid */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //           <div>
// //             <Users className="mx-auto text-green-600 w-6 h-6" />
// //             <p className="text-lg font-semibold text-gray-800">2,245,341</p>
// //             <p className="text-sm text-gray-500">Members</p>
// //           </div>
// //           <div>
// //             <Network className="mx-auto text-green-600 w-6 h-6" />
// //             <p className="text-lg font-semibold text-gray-800">46,328</p>
// //             <p className="text-sm text-gray-500">Clubs</p>
// //           </div>
// //           <div>
// //             <Calendar className="mx-auto text-green-600 w-6 h-6" />
// //             <p className="text-lg font-semibold text-gray-800">828,867</p>
// //             <p className="text-sm text-gray-500">Event Bookings</p>
// //           </div>
// //           <div>
// //             <CreditCard className="mx-auto text-green-600 w-6 h-6" />
// //             <p className="text-lg font-semibold text-gray-800">1,926,436</p>
// //             <p className="text-sm text-gray-500">Payments</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import { Users, Network, Calendar, CreditCard } from "lucide-react";

// export default function HelpingClients() {
//   return (
//     <section className="w-full bg-gray-50 py-12 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-12">

//         {/* Title */}
//         <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
//             Helping a local
//           </h2>
//           <h2 className="text-2xl sm:text-3xl font-semibold text-green-600 mb-2">
//             business reinvent itself
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base">
//             We reached here with our hard work and dedication
//           </p>
//         </div>

//         {/* Stats Grid */}

//       <div className="w-full md:w-2/3 grid grid-cols-2 gap-6 text-center">
//   <div className="flex flex-col items-center max-w-[120px] mx-auto">
//     <Users className="text-green-600 w-8 h-8 mb-2" />
//     <p className="text-lg font-semibold text-gray-800">2,245,341</p>
//     <p className="text-sm text-gray-500">Members</p>
//   </div>
//   <div className="flex flex-col items-center max-w-[120px] mx-auto">
//     <Network className="text-green-600 w-8 h-8 mb-2" />
//     <p className="text-lg font-semibold text-gray-800">46,328</p>
//     <p className="text-sm text-gray-500">Clubs</p>
//   </div>
//   <div className="flex flex-col items-center max-w-[120px] mx-auto">
//     <Calendar className="text-green-600 w-8 h-8 mb-2" />
//     <p className="text-lg font-semibold text-gray-800">828,867</p>
//     <p className="text-sm text-gray-500">Event Bookings</p>
//   </div>
//   <div className="flex flex-col items-center max-w-[120px] mx-auto">
//     <CreditCard className="text-green-600 w-8 h-8 mb-2" />
//     <p className="text-lg font-semibold text-gray-800">1,926,436</p>
//     <p className="text-sm text-gray-500">Payments</p>
//   </div>
// </div>

// </div>



//     </section>
//   );
// }




"use client";
import { Users, Network, Calendar, CreditCard } from "lucide-react";

export default function HelpingClients() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left: Title */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-gray-800 mb-1">
            Helping a local
          </h2>
          <h2 className="font-inter font-semibold text-[36px] leading-[44px] text-green-600">
            business reinvent itself
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>


        {/* Right: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {/* Members */}
          <div className="flex flex-col items-center">
            <Users className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-lg font-semibold text-gray-800">2,245,341</p>
            <p className="text-sm text-gray-500">Members</p>
          </div>

          {/* Clubs */}
          <div className="flex flex-col items-center">
            <Network className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-lg font-semibold text-gray-800">46,328</p>
            <p className="text-sm text-gray-500">Clubs</p>
          </div>

          {/* Event Bookings */}
          <div className="flex flex-col items-center">
            <Calendar className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-lg font-semibold text-gray-800">828,867</p>
            <p className="text-sm text-gray-500">Event Bookings</p>
          </div>

          {/* Payments */}
          <div className="flex flex-col items-center">
            <CreditCard className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-lg font-semibold text-gray-800">1,926,436</p>
            <p className="text-sm text-gray-500">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
