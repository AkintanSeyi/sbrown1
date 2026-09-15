import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaBluesky,
  FaFlickr,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Socials = () => {
  const socials = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/sherrod",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/sherrod/",
    },
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/sherrodbrown",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/channel/UCt_l7Nge_872rTm5Jvbo6Mw",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@sherrodbrown",
    },
    {
      name: "Bluesky",
      icon: FaBluesky,
      url: "https://bsky.app/profile/sherrodbrownoh.bsky.social",
    },
    {
      name: "Flickr",
      icon: FaFlickr,
      url: "https://www.flickr.com/photos/sherrodbrown/",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "#",
    },
  ];
   const navigate = useNavigate();

  return (
    <section className="bg-[#255890] px-[10px] pb-10">
      <div className="mx-auto max-w-[1160px] border-r-[3px] border-[#fdb52b] bg-white px-7 py-10 text-[#111] sm:px-12 sm:py-12 lg:px-[70px]">
        
        <div className="mx-auto max-w-[700px]">
          <h1 className="mb-8 text-center text-[38px] font-black uppercase leading-[0.9] text-[#20528c] sm:text-[48px]">
            SHERROD SOCIALS 
          </h1>

          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {socials.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                className="group flex min-h-[120px] flex-col items-center justify-center border-[2px] border-[#20528c] bg-white px-4 py-6 transition-all duration-200 hover:bg-[#20528c]"
              >
                <Icon className="mb-3 text-[32px] text-[#fdb52b] transition-colors duration-200 group-hover:text-white sm:text-[38px]" />

                <span className="text-[15px] font-black uppercase tracking-wide text-[#20528c] transition-colors duration-200 group-hover:text-white sm:text-[17px]">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Socials;