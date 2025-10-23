import React from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0c0b1a] text-white font-sans px-6 py-16"
    >
      <div className="bg-[#1a1631] rounded-2xl p-8 md:p-12 w-full max-w-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-[#facc15]">Contact.</span>
        </h2>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center text-lg font-medium mb-2">
              <FaUser className="text-[#facc15] mr-2" /> Name
            </label>
            <p className="p-3 rounded-lg bg-[#2a2550]">Sidharth Pradhan</p>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-lg font-medium mb-2">
              <FaEnvelope className="text-[#facc15] mr-2" /> Email Id
            </label>
            <p className="p-3 rounded-lg bg-[#2a2550]">shidharthpradhan999@gmail.com</p>
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center text-lg font-medium mb-2">
              <FaMapMarkerAlt className="text-[#facc15] mr-2" /> Location
            </label>
            <p className="p-3 rounded-lg bg-[#2a2550]">Angul, Odisha, India</p>
          </div>
        </div>

      <p className="text-center text-gray-300 mt-8">
          Let's start a conversation! I'm just a message away.
      </p>
      </div>
    </section>
  );
};

export default Contact;
