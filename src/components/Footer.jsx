import React from "react";
import {
  FaDribbbleSquare,
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="  max-w-[1240px] mx-auto py-16 p-10  grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="text-center md:text-left">
        <h1 className="w-full text-3xl font-bold text-[]#000df9a">React Js</h1>
        <p className=" py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          assumenda obcaecati atque error omnis, adipisci corrupti ipsum
          reiciendis blanditiis recusandae?
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-md text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2">Analytics</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Commerce</li>
            <li className="py-2">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Support</h6>
          <ul>
            <li className="py-2">Pricing</li>
            <li className="py-2">Documentation</li>
            <li className="py-2">Guides</li>
            <li className="py-2">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Company</h6>
          <ul>
            <li className="py-2">Blog</li>
            <li className="py-2">Jobs</li>
            <li className="py-2">Press</li>
            <li className="py-2">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Legal</h6>
          <ul>
            <li className="py-2">Claim</li>
            <li className="py-2">Policy</li>
            <li className="py-2">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
