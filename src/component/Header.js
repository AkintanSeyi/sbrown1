import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaBluesky,
  FaBars,
  FaClock,
  FaTiktok,
  FaCircleXmark 
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const LOGO_URL =
  "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789052629/logo_zwocw0.png";

const Header = () => {
 
  const [showBanner, setShowBanner] = useState(true);
const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

     {/* =====================================================
    MOBILE FULL SCREEN MENU
===================================================== */}
{menuOpen && (
  <div
    className="
      fixed
      inset-0
      z-[999]
      flex
      min-h-screen
      w-full
      flex-col
      bg-[#092e58]
      text-white
      md:hidden
    "
  >

    {/* ================= MENU HEADER ================= */}
    <div
      className="
        flex
        h-[75px]
        w-full
        items-center
        justify-between
        border-b
        border-white/20
        px-5
      "
    >

      {/* LOGO */}
      <button
        type="button"
        onClick={() => {
          setMenuOpen(false);
          navigate("/");
        }}
        className="block"
      >
        <img
          src={LOGO_URL}
          alt="Sherrod Brown for Ohio"
          className="w-[115px]"
        />
      </button>

      {/* CLOSE */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        className="
          flex
          h-[42px]
          w-[42px]
          items-center
          justify-center
          text-[25px]
          text-white
          transition
          hover:text-[#fdb52b]
        "
      >
        <FaCircleXmark />
      </button>
    </div>


    {/* ================= MENU LINKS ================= */}
    <nav
      className="
        flex
        flex-1
        flex-col
        items-center
        justify-center
        gap-7
        px-6
      "
    >

      {/* OUR FIGHT */}
      <button
        type="button"
        onClick={() => {
          setMenuOpen(false);
          navigate("/our-fight/");
        }}
        className="
          text-center
          text-[24px]
          font-black
          uppercase
          tracking-wide
          text-white
          transition
          hover:text-[#fdb52b]
        "
      >
        OUR FIGHT
      </button>


      {/* STORE */}
      <button
        type="button"
        onClick={() => {
          setMenuOpen(false);
          navigate("/socials");
        }}
        className="
          text-center
          text-[24px]
          font-black
          uppercase
          tracking-wide
          text-white
          transition
          hover:text-[#fdb52b]
        "
      >
        SOCIALS
      </button>


      {/* VOLUNTEER */}
      <a
        href="https://secure.ngpvan.com/y49tRvzubkGFRK21pnGANw2"
        onClick={() => setMenuOpen(false)}
        className="
          text-center
          text-[24px]
          font-black
          uppercase
          tracking-wide
          text-white
          transition
          hover:text-[#fdb52b]
        "
      >
        VOLUNTEER
      </a>


      {/* DONATE */}
      <button
        type="button"
        onClick={() => {
          setMenuOpen(false);
          navigate("/donate");
        }}
        className="
          mt-3
          bg-[#fdb52b]
          px-10
          py-3
          text-[24px]
          font-black
          uppercase
          tracking-wide
          text-[#092e58]
          transition
          hover:bg-white
        "
      >
        DONATE
      </button>


      {/* ================= SOCIAL ICONS ================= */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-center
          gap-6
          text-[25px]
          text-white
        "
      >

        <a
          href="https://www.facebook.com/sherrod"
          aria-label="Facebook"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-[#fdb52b]"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/sherrod/"
          aria-label="Instagram"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-[#fdb52b]"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/sherrodbrown"
          aria-label="X"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-[#fdb52b]"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.tiktok.com/@sherrodbrown"
          aria-label="TikTok"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-[#fdb52b]"
        >
          <FaTiktok />
        </a>

      </div>
    </nav>
  </div>
)}

      {showBanner && (
       <div
  className="relative hidden h-[34px] w-full items-center justify-center overflow-hidden bg-[#e44332] sm:flex sm:h-[34px]"
>
          {/* MESSAGE */}
          <p   onClick={() => navigate("/donate")} className="whitespace-nowrap text-[18px] font-bold uppercase tracking-[0.25px] hover:underline hover:cursor-pointer text-white sm:text-[18px]">
  Donate now to elect Sherrod Brown and flip this must-win Senate seat.
          </p>

          {/* CANCEL */}
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            aria-label="Close announcement"
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              text-[15px]
              font-bold
              uppercase
              tracking-[0.2px]
              text-white
              transition
              hover:text-[#fdb52b]
              sm:right-3
              sm:text-[15px]
            "
          >
           <FaCircleXmark  />
          </button>
        </div>
      )}

      {/* =====================================================
          MAIN HEADER + BLUE GRADIENT
      ====================================================== */}
      <div
        className="
          relative
          h-[68px]
          w-full
          bg-gradient-to-b
          from-[#092e58]/95
          via-[#123f70]/70
          to-transparent
        "
      >
       <div className="relative mx-auto flex h-full items-start px-5 pt-3 sm:px-8 lg:px-[42px]">
          {/* =================================================
              LOGO
          ================================================== */}
          <a
            href="/"
            className="block shrink-0"
            aria-label="Sherrod Brown for Ohio"
          >
            <img
              src={LOGO_URL}
              alt="Sherrod Brown for Ohio"
              className="
                h-auto
                w-[115px]
                sm:w-[135px]
                lg:w-[150px]
              "
            />
          </a>

{/* MOBILE DONATE */}
<button
  type="button"
  onClick={() => navigate("/donate")}
  className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    bg-[#fdb52b]
    px-4
    py-[6px]
    text-[18px]
    font-black
    tracking-wide
    text-[#07396d]
    transition
    hover:bg-white
    md:hidden
  "
>
  DONATE
</button>
          {/* =================================================
              DESKTOP NAV
          ================================================== */}
          <nav className="ml-auto hidden items-center gap-7 pt-1 md:flex lg:gap-6">

            {/* OUR FIGHT */}
            <a
              href="/our-fight/"
              className="
                text-[19px]
                font-extrabold
                tracking-wide
                text-[#A0A0A0]

                transition
                hover:text-[#fdb52b]
              "
            >
              OUR FIGHT
            </a>

            {/* STORE */}
            <a
              href="#"
              className="
                text-[19px]
                font-extrabold
                tracking-wide
              text-[#A0A0A0]
                transition
                hover:text-[#fdb52b]
              "
              onClick={() => navigate("/socials")}
            >
              SOCIALS
            </a>

            {/* VOLUNTEER */}
            <a
              href="https://secure.ngpvan.com/y49tRvzubkGFRK21pnGANw2"
              className="
                text-[19px]
                font-extrabold
                tracking-wide
                text-[#A0A0A0]
                transition
                hover:text-[#fdb52b]
              "
            >
              VOLUNTEER
            </a>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}
            <div className="ml-1 flex items-center gap-4 text-[22px] text-white">

              <a
                href="https://www.facebook.com/sherrod"
                aria-label="Facebook"
                className="transition hover:text-[#fdb52b]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/sherrod/"
                aria-label="Instagram"
                className="transition hover:text-[#fdb52b]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com/sherrodbrown"
                aria-label="X"
                className="transition hover:text-[#fdb52b]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.tiktok.com/@sherrodbrown"
                aria-label="Tiktok"
                className="transition hover:text-[#fdb52b]"
              >
                <FaTiktok />
              </a>
            </div>

            {/* =================================================
                DONATE BUTTON
            ================================================== */}
            <a
           href = "#donate"
              className="
                ml-1
                bg-[#fdb52b]
                px-4
                py-[9px]
                text-[25px]
                font-black
                tracking-wide
                text-[#07396d]
                transition
                hover:bg-white
              "
              onClick={() => navigate("/donate")}
            >
              DONATE
            </a>
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
        <button 
  type="button" 
  aria-label="Open menu" 
  onClick={() => setMenuOpen(true)} 
  className="
    absolute
    right-5
    top-3
    mt-1
    text-[34px]
    text-white
    transition
    hover:text-[#fdb52b]
    md:hidden
  "
> 
  <FaBars /> 
</button>


        </div>
      </div>
    </header>
  );
};

export default Header;
