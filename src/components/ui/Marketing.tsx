// "use client";
// import Image from "next/image";

// type BlogPost = {
//   id: number;
//   title: string;
//   image: string;
//   link: string;
// };

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Creating Streamlined Safeguarding Processes with OneRen",
//     image: "/image2.jpg",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "What are your safeguarding responsibilities and how can you manage them?",
//     image: "/image3.jpg",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Revamping the Membership Model with Triathlon Australia",
//     image: "/image4.jpg",
//     link: "#",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Header */}
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//           Caring is the new marketing
//         </h2>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
//           The NEXCENT blog is the best place to read about the latest membership insights,
//           trends and more. See who's joining the community and learn how they're increasing
//           their membership income.
//         </p>



//       {/* Blog Grid */}
//   {/* Blog Grid */}
// <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {blogPosts.map((post) => (
//    <div
//   key={post.id}
//   className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
// >
//   {/* Image */}
//   <div className="relative h-44 w-full">
//     <Image
//       src={post.image}
//       alt={post.title}
//       fill
//       style={{ objectFit: "cover" }}
//       className="rounded-t-xl"
//     />
//   </div>

//   {/* Content Section */}
//   <div className="bg-gray-100 p-4 text-center">
//     <h3 className="text-gray-800 text-base font-medium leading-snug">
//       {post.title}
//     </h3>
//     <a
//       href={post.link}
//       className="inline-flex items-center mt-3 text-green-600 font-semibold text-sm hover:underline"
//     >
//       Readmore →
//     </a>
//   </div>
// </div>



//   ))}
// </div>




//       </div>
//     </section>
//   );
// }




"use client";
import Image from "next/image";

type BlogPost = {
  id: number;
  title: string;
  image: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/img1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    image: "/img2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/img3.jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative w-[368px] h-[286px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white mx-auto"
          >
            {/* Image Section */}
            <div className="relative w-full h-[286px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Text Box */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] h-[120px] bg-gray-100 rounded-lg p-4 text-center shadow-md opacity-100">
              <h3 className="text-gray-800 text-sm md:text-base font-medium leading-snug">
                {post.title}
              </h3>
              <a
                href={post.link}
                className="inline-flex items-center text-green-600 font-semibold mt-2 hover:underline"
              >
                Readmore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
