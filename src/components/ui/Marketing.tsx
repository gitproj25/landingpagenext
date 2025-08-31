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
    image: "/image2.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    image: "/image3.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/image4.jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          The NEXCENT blog is the best place to read about the latest membership insights,
          trends and more. See who's joining the community and learn how they're increasing
          their membership income.
        </p>



      {/* Blog Grid */}
  {/* Blog Grid */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogPosts.map((post) => (
    <div
      key={post.id}
      className="relative bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>

      {/* Title + ReadMore Box with fixed height */}
      <div className="-mt-10 bg-gray-200 p-4 rounded-xl mx-4 text-center shadow z-10 relative h-40 flex flex-col justify-center">
        <h3 className="text-gray-800 text-sm md:text-base font-medium">
          {post.title}
        </h3>
        <a
          href={post.link}
          className="inline-flex items-center mt-2 text-green-600 font-medium text-sm hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}
