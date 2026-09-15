import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaBluesky,
  FaFlickr,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // DONATION POPUP
  const [showDonatePopup, setShowDonatePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDonatePopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#255890] text-white">
      {/* ================= DONATION POPUP ================= */}
      {showDonatePopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#092e58]/95 px-4 py-6">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowDonatePopup(false)}
            className="absolute right-5  rounded-full top-5 z-[10000] flex h-[48px] w-[48px] items-center justify-center bg-[#fdb52b] text-[30px] font-light text-[#092e58] transition hover:bg-white"
            aria-label="Close donation popup"
          >
            ×
          </button>

          {/* POPUP */}
          <div className="w-full max-w-[1300px] bg-[#eef2f8] px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-4 lg:py-10">
            {/* TITLE */}
            <h2 className="text-[48px] font-black leading-none tracking-[-2px] text-[#255890] sm:text-[62px] lg:text-[64px]">
              DONATE
            </h2>

            {/* MESSAGE */}
            <p className="mx-auto mt-2 max-w-[1230px] text-[20px] font-black leading-[1] text-[#5279a9] sm:text-[25px] lg:text-[25px]">
              National Republicans are bailing out Sherrod's opponent and
              scheming on ways to stop our campaign's groundbreaking grassroots
              energy. Time is running out to fight back. Will you chip in to
              make sure Sherrod has every bit of momentum heading into the final
              stretch?
            </p>

            {/* SMALL TEXT */}
            <p className="mt-3 text-[11px] font-serif text-[#111] sm:text-[12px]">
              Click on an option to get started. If you've saved your payment
              information with ActBlue Express, your donation will go through
              immediately.
            </p>

            {/* DONATION OPTIONS */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2">
              {["$5", "$10", "$25", "$50", "$100"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => navigate("/donate")}
                  className="h-[56px] bg-[#255890] text-[24px] font-black text-white transition hover:bg-[#092e58] sm:h-[56px] sm:text-[27px]"
                >
                  {amount}
                </button>
              ))}

              <button
                onClick={() => setShowDonatePopup(false)}
                className="h-[56px] bg-[#fdb52b] text-[24px] font-black text-[#092e58] transition hover:bg-white sm:h-[56px] sm:text-[27px]"
              >
                OTHER
              </button>
            </div>
          </div>
        </div>
      )}

     {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-[#255890]">

  {/* ================= MOBILE HERO IMAGE ================= */}
  <div
    className="
      relative
      block
      h-[310px]
      w-full
      bg-cover
      bg-[center_25%]
      bg-no-repeat
      sm:h-[400px]
      lg:hidden
    "
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789047420/homepage2_b24le9.jpg')",
    }}
  >
    {/* DARK TOP GRADIENT */}
    <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#092e58]/95 to-transparent" />

    {/* HEADER */}
    <div className="relative z-20">
      <Header />
    </div>
  </div>


  {/* ================= MOBILE HERO CONTENT ================= */}
  <div
    className="
      block
      bg-[#255890]
      px-5
      pb-9
      pt-7
      lg:hidden
    "
  >
    <p
      className="
        mb-1
        text-[12px]
        font-black
        tracking-[4px]
        text-[#fdb52b]
      "
    >
      FIGHTING FOR
    </p>

    <h1
      className="
        text-[56px]
        font-black
        leading-[0.82]
        tracking-[-2px]
        text-white
      "
    >
      OHIOANS
    </h1>

    <SignupForm />
  </div>


  {/* ================= DESKTOP HERO ================= */}
  <div
    className="
      relative
      hidden
      min-h-[650px]
      overflow-hidden
      bg-cover
      bg-[62%_center]
      bg-no-repeat
      lg:block
    "
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789047420/homepage2_b24le9.jpg')",
    }}
  >
    {/* TOP GRADIENT */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[150px] bg-gradient-to-b from-[#092e58]/95 via-[#123f70]/65 to-transparent" />

    {/* HEADER */}
    <Header />

    {/* DESKTOP CONTENT */}
    <div className="relative z-20 px-[150px] pt-[150px]">
      <p className="mb-1 text-[24px] font-black tracking-[6px] text-[#fdb52b]">
        FIGHTING FOR
      </p>

      <h1 className="text-[95px] font-black leading-[0.88] tracking-[-2px] text-white">
        OHIOANS
      </h1>

      <SignupForm />
    </div>
  </div>

</section>


      <section
        id="donate"
        className="relative bg-[#255890] px-5 py-10 sm:px-10 lg:px-[70px] lg:py-[38px]"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-9 lg:grid-cols-2">
          <div>
            <h2 className="max-w-[450px] text-[35px] font-black uppercase leading-[0.96] tracking-[-1px] sm:text-[45px] lg:text-[55px]">
              WHEN YOU
              <br />
              LOVE YOUR
              <br />
              COUNTRY,
              <br />
              YOU FIGHT
              <br />
              FOR THE
              <br />
              PEOPLE WHO
              <br />
              <span className="bg-[#fdb52b] px-1 text-[#12365f]">
                MAKE IT WORK.
              </span>
            </h2>
          </div>

          {/* DONATION CARD */}
          <div className="relative z-20 w-full max-w-[560px] bg-[#12365f] p-10 sm:p-16 lg:ml-auto lg:-mt-20 lg:min-h-[500px] lg:px-16 lg:py-20">
            <p className="mb-2 text-[9px] font-bold uppercase sm:text-[11px]">
              HELP SHERROD BROWN FIGHT FOR OHIO
            </p>

            <h3 className="mb-5 text-[52px] font-black leading-[0.82] sm:text-[64px]">
              DONATE
            </h3>

            <p className="mb-7 max-w-[400px] text-[9px] leading-[1.5] text-white/90 sm:text-[11px]">
              Citizens are required to give personal information with ActBlue
              Express, your contribution will go through immediately.
            </p>

            <div className="grid grid-cols-2 gap-1">
              {["$5", "$10", "$25", "$50", "$100", "OTHER"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => navigate("/donate")}
                  className="h-[42px] bg-[#fdb52b] text-[14px] font-black text-[#092e58] transition hover:bg-white sm:h-[52px] sm:text-[16px]"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      {/* ================= STORY ================= */}
<section className="bg-[#255890] px-4 pb-10 sm:px-8 lg:px-[19px] lg:pb-[45px]">
  <div
    className="
      mx-auto
      max-w-[1160px]
      border-r-[3px]
      border-[#fdb52b]
      bg-white
      px-5
      py-7
      text-[#1d1d1d]

      sm:px-8
      sm:py-8

      lg:min-h-[575px]
      lg:px-[50px]
      lg:py-[35px]
    "
  >
    {/* ================= STORY IMAGE ================= */}
    <div
      className="
        relative
        mb-8
        w-full

        lg:float-right
        lg:mb-5
        lg:ml-7
        lg:w-[50%]
        lg:max-w-[600px]
      "
    >
      {/* BLUE OFFSET BLOCK */}
      <div
        className="
          absolute
          -bottom-2
          -right-2
          h-full
          w-full
          bg-[#255890]
        "
      />

      {/* IMAGE */}
      <img
        src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789050747/sb_web-1_ln0ka2.jpg"
        alt="Community"
        className="
          relative
          z-10
          block
          h-auto
          w-full
          object-cover
        "
      />
    </div>

    {/* ================= STORY COPY ================= */}
    <div
      className="
        font-serif
        text-[13px]
        leading-[1.55]

        sm:text-[14px]

        lg:text-[15px]
      "
    >
      <p className="mb-5 font-bold text-[17px] leading-[1.3]">
        Sherrod Brown has always been a relentless fighter for the people
        of Ohio.
      </p>

      <p className="mb-5 font-medium">
        Born and raised in Mansfield, Sherrod saw firsthand how
        corporations lobbied for tax breaks and bad trade agreements that
        shipped Ohio jobs overseas. That’s why he’s always opposed unfair
        trade deals that hurt Ohio workers.
      </p>

      <p className="mb-5 font-medium">
        A tireless advocate in standing up for the dignity of work,
        Sherrod has never stopped fighting for Ohio families and workers
        across the country — and time and time again he’s delivered
        results.
      </p>

      <p className="mb-5 font-medium">
        When Wall Street banks gambled away workers’ hard-earned pensions,
        Sherrod led the charge to make sure over 100,000 Ohioans got the
        retirement they were owed.
      </p>

      <p className="mb-5 font-medium">
        When the drug companies jacked up prices, Brown successfully
        fought to cap the cost of insulin and reduce the price of other
        prescription drugs for Ohio seniors.
      </p>

      <p className="mb-5 font-medium">
        When millions of veterans returning from war who were exposed to
        highly toxic burn pits were being turned away by the VA as they
        suffered from severe illnesses like cancer and lung disease,
        Sherrod worked with Republicans to get them the care they
        deserved.
      </p>

      <p className="mb-5 font-medium">
        And because of Sherrod Brown, over 2 million former teachers, bus
        drivers, police officers, firefighters, and other workers are now
        receiving their full Social Security payments that previously were
        withheld by the federal government.
      </p>

      <p className="mb-5 font-medium">
        Called “a champion for workers and middle class” who “has
        advocated for Ohio and for ordinary people,” Sherrod Brown “has
        fought for affordable health care, fair wages, worker pensions and
        consumer protections.”
      </p>

      <p className="mb-5 font-medium">
        Sherrod believes too many people think of politics as left or
        right, but to him it’s all about whose side you’re on, and who you
        are fighting for.
      </p>

      <p className="mb-5 font-medium">
        With all the craziness coming out of Washington, including giving
        massive tax breaks to corporations and billionaires at the expense
        of hardworking Ohioans, Sherrod knows he has the ability to do
        something about it, and that’s why he’s running for Senate.
      </p>

      <p className="mb-0 font-medium">
        Sherrod lives in Columbus with his wife Connie Schultz, a Pulitzer
        Prize-winning columnist and author. Sherrod and Connie drive Jeeps
        made by union workers in Toledo, and are blessed with a growing
        family, including three daughters, a son, eight grandchildren, and
        their beloved rescue dogs, Franklin and Walter.
      </p>
    </div>

    {/* CLEAR DESKTOP FLOAT */}
    <div className="clear-both" />
  </div>
</section>


      {/* ================= SECOND IMAGE / SIGNUP ================= */}
      <section
        id="fight"
        className="relative min-h-[390px] bg-cover bg-center sm:min-h-[430px] lg:min-h-[535px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,45,82,.05), rgba(8,43,80,.82)), url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789052160/footer_ycusrr.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full px-7 sm:px-14 lg:w-[50%] lg:px-0 lg:pr-[90px]">
            <p className="mb-1 text-[12px]  font-black tracking-[6px] text-[#fdb52b] sm:text-[25px]">
              FIGHTING FOR
            </p>

            <h1 className="text-[53px] font-black leading-[0.88] tracking-[-2px] text-white sm:text-[75px] lg:text-[95px]">
              OHIOANS
            </h1>

            <SignupForm second />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#255890] px-5 py-12 text-center sm:py-16">
        {/* LOGO */}
        <div className="inline-block leading-[0.7]">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789052629/logo_zwocw0.png"
              alt="Sherrod Brown for Ohio"
              className="h-auto w-[250px] sm:w-[320px]"
            />
          </div>
        </div>

        {/* DONATE */}
        <div className="mt-8">
          <a
            onClick={() => navigate("/donate")}
            className="inline-block bg-[#fdb52b] cursor-pointer px-7 py-3 text-[24px] font-black text-[#092e58] transition hover:bg-white"
          >
            DONATE
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[26px] text-[#fdb52b]">
          <a href="https://www.facebook.com/sherrod" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/sherrod/" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://x.com/sherrodbrown" aria-label="X">
            <FaXTwitter />
          </a>

          <a
            href="https://bsky.app/profile/sherrodbrownoh.bsky.social"
            aria-label="Bluesky"
          >
            <FaBluesky />
          </a>

          <a
            href="https://www.youtube.com/channel/UCt_l7Nge_872rTm5Jvbo6Mw"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.flickr.com/photos/sherrodbrown/"
            aria-label="Flickr"
          >
            <FaFlickr />
          </a>

          <a href="https://www.tiktok.com/@sherrodbrown" aria-label="TikTok">
            <FaTiktok />
          </a>

          <a
            href="https://www.flickr.com/photos/sherrodbrown/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* CONTACT */}
        <div className="mt-8 text-[14px] font-bold leading-[1.8] text-white sm:text-[14px]">
          <p>Friends of Sherrod Brown</p>
          <p>3867 West Market Street, Ste. 289</p>
          <p>Akron, OH 44333</p>
        </div>

        {/* FOOTER LINKS */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-[13px] cursor-pointer font-black sm:text-[15px]">
          <a onClick={() => navigate("/privacypolicy")}>PRIVACY POLICY</a>
          <a onClick={() => navigate("/terms")}>TERMS OF SERVICE</a>
        </div>

        {/* PAID FOR */}
        <div className="mt-7">
          <span className="inline-block border border-white/80 px-5 py-2 text-[12px] font-black sm:text-[13px]">
            PAID FOR BY FRIENDS OF SHERROD BROWN
          </span>
        </div>
      </footer>
    </div>
  );
};

const SignupForm = ({ second = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/donate");
    }, 1200);
  };

  if (loading) {
    return (
      <div
        className={`mt-5 flex h-[220px] w-full max-w-[400px] items-center justify-center ${
          second ? "mt-6" : ""
        }`}
      >
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-5 w-full max-w-[400px] ${second ? "mt-6" : ""}`}
    >
      <div className="grid grid-cols-2 gap-[5px]">
        <input
          type="text"
          placeholder="First Name"
          required
          className="h-[40px] w-full bg-white px-2 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
        />

        <input
          type="text"
          placeholder="Last Name"
          required
          className="h-[40px] w-full bg-white px-2 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <input
        type="email"
        placeholder="Your Email"
        required
        className="mt-[5px] h-[40px] w-full bg-white px-2 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
      />

      <div className="mt-[5px] grid grid-cols-2 gap-[5px]">
        <input
          type="tel"
          placeholder="Mobile number"
          required
          className="h-[40px] w-full bg-white px-2 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
        />

        <input
          type="text"
          placeholder="Your ZIP"
          required
          className="h-[40px] w-full bg-white px-2 text-[9px] text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="mt-[5px] grid grid-cols-2 gap-[5px]">
        {!second && (
          <p className="text-[9px] font-black leading-[1.35] text-white sm:text-[10px]">
            Sign up here to receive text updates. By participating, you consent
            to recurring autodialed campaign & donation messages from Sherrod
            Brown to the phone number you provide. No consent required to buy.
            Message frequency varies. Text STOP to end. Msg&data rates may
            apply.{" "}
            <a
              href="https://www.sherrodbrowne.com/terms/"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#fdb52b]"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://www.sherrodbrowne.com/privacypolicy/"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#fdb52b]"
            >
              Privacy Policy
            </a>{" "}
            apply.
          </p>
        )}

        <button
          type="submit"
          className="mt-[5px] h-[36px] w-full bg-[#fdb52b] text-[15px] font-black tracking-wider text-[#092e58] transition hover:bg-white flex items-center justify-center"
        >
          Join Us
        </button>
      </div>
    </form>
  );
};

export default Home;
