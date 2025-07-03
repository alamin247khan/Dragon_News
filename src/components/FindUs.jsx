import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FindUs() {
  return (
    <div>
      <h2 className="font-bold text-lg my-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <a href="https://facebook.com" className="btn join-item justify-start p-6">
          <FaFacebook style={{ color: "#1877F2" }} /> Facebook
        </a>
        <a href="https://twitter.com" className="btn join-item justify-start p-6">
          <FaTwitter style={{ color: "#1DA1F2" }} /> Twitter
        </a>
        <a href="https://instagram.com" className="btn join-item justify-start p-6">
          <FaInstagram style={{ color: "#E4405F" }} /> Instagram
        </a>
      </div>
    </div>
  );
}
