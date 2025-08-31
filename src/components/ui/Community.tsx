"use client";
//import { Users, Building, UsersRound } from "lucide-react";
import { Users, Building, Users2 } from "lucide-react";

const cards = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: <Users className="w-6 h-6 text-green-600" />,
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: <Building className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: <Users2 className="w-6 h-6 text-green-600" />,
  },
];

export default function CommunitySection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Who is Nextcent suitable for?
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 rounded-lg p-3 mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
