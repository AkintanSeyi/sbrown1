import React, { useState, useEffect, useRef } from "react";
import {
  FaHospital,
  FaPrescriptionBottleMedical,
  FaMicrochip,
  FaPlug,
  FaChartLine,
  FaPlay,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaBluesky,
  FaFlickr,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Others = () => {
       const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#255890] text-white">
      {/* =========================================================
          HEADER + HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#092e58]">
        <div className="relative z-30">
          <Header />
        </div>

        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[500px]">
          {/* HERO IMAGE */}
          <img
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789131375/fight3_eqtwx1.jpg"
            alt="Our Fight"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[#092e58]/75" />

          {/* CENTER CONTENT */}
          <div className="relative z-10 flex min-h-[280px] items-center justify-center sm:min-h-[380px] lg:min-h-[500px]">
            <div className="text-center">
             
              <h1 className="text-[46px] font-black uppercase leading-[0.85] tracking-[-2px] text-white sm:text-[65px] lg:text-[86px]">
                OUR FIGHT
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#255890] px-5 py-9 text-center sm:px-10 sm:py-12 lg:py-14">
        <h2 className="text-[30px] font-black uppercase leading-tight sm:text-[34px]">
          LIFE IS TOO EXPENSIVE.
        </h2>

        <p className="mx-auto mt-2 max-w-[550px] text-[23px] font-semibold leading-[1.5] sm:text-[25px]">
          Paychecks are too low. Costs are too high – utilities, health care,
          groceries… everything.
        </p>

        <h3 className="mt-6 text-[28px] font-black uppercase leading-[1.05] sm:text-[35px]">
          THE SYSTEM IS RIGGED – BUT WE’RE
          <br />
          FIGHTING TO FIX IT:
        </h3>
      </section>

      {/* =========================================================
          ISSUE 1
      ========================================================= */}
      <section className="bg-[#255890] px-[10px] pb-5">
        <div className="relative border-b-[2px] border-[#fdb52b] bg-white px-7 py-6 text-[#111] sm:px-12 sm:py-8">
          <div className="mx-auto max-w-[1040px] px-2 sm:px-4">
            {/* VIDEO */}
              <div className="relative float-right mb-4 ml-6 mt-1 w-[330px] max-w-[100%]">
<div className="relative float-right mb-4 ml-6 mt-1 w-[330px] max-w-[100%]">
  <div className="relative h-[205px] w-full overflow-hidden bg-black sm:h-[235px]">
    <iframe
      className="h-full w-full"
      src="https://www.youtube-nocookie.com/embed/8C8ZKPyGFqQ"
      title="YouTube video"
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>
</div>


            <FaHospital className="mb-3 text-[27px] text-[#fdb52b] sm:text-[32px]" />

            <h2 className="text-[38px] font-black uppercase leading-[0.92] text-[#20528c] sm:text-[42px]">
              HOLDING
              <br />
              HEALTH
              <br />
              INSURANCE
              <br />
              COMPANIES
              <br />
              ACCOUNTABLE
            </h2>

            <div className="mt-5 text-[18px] leading-[1.6] sm:text-[19px]">
              <p>
                It’s time to ban health insurance companies from denying the
                care your doctor says you need. And if they try to deny your
                claims, we’ll fine them.
              </p>

              <p className="mt-3">
                Your care should be between you and your doctor. You work too
                hard and pay too much for the insurance companies to prevent you
                from getting the treatment your doctor prescribes.
              </p>
            </div>

            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* =========================================================
          ISSUE 2
      ========================================================= */}
      <section className="bg-[#255890] px-[10px] pb-5">
        <div className="border-b-[2px] border-[#fdb52b] bg-white px-7 py-6 text-[#111] sm:px-12 sm:py-8">
          <div className="mx-auto max-w-[1040px]">
            <FaPrescriptionBottleMedical className="mb-3 text-[27px] text-[#fdb52b] sm:text-[32px]" />

            <h2 className="text-[50px] font-black uppercase leading-[0.92] text-[#20528c] sm:text-[53px]">
              BRINGING DOWN PRESCRIPTION
              <br />
              DRUG COSTS
            </h2>

            <div className="mt-5 max-w-[900px] text-[18px] leading-[1.6] sm:text-[19px]">
              <p>
                Let’s make it illegal for drug companies to charge Americans
                more than they do in other countries, because the same pill
                should be the same price.
              </p>

              <p className="mt-3">
                Folks in Toledo shouldn’t pay more for medication than folks in
                Toronto. Americans are getting ripped off by the drug companies
                because Congress won’t hold them accountable, but I will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ISSUE 3
      ========================================================= */}
      <section className="bg-[#255890] px-[10px] pb-5">
        <div className="border-b-[2px] border-[#fdb52b] bg-white px-7 py-6 text-[#111] sm:px-12 sm:py-8">
          <div className="mx-auto max-w-[1040px] px-2 sm:px-4">
            {/* VIDEO */}
           <div className="relative float-right mb-4 ml-6 mt-1 w-[330px] max-w-[100%]">
<div className="relative float-right mb-4 ml-6 mt-1 w-[330px] max-w-[100%]">
  <div className="relative h-[205px] w-full overflow-hidden bg-black sm:h-[235px]">
    <iframe
      className="h-full w-full"
      src="https://youtu.be/8jBuRldidV8?si=OmuzOBoe7m390RbL"
      title="YouTube video"
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>
</div>


            <FaMicrochip className="mb-3 text-[27px] text-[#fdb52b] sm:text-[32px]" />

            <h2 className="text-[38px] font-black uppercase leading-[0.92] text-[#20528c] sm:text-[42px]">
              Making
              <br />
              Data
              <br />
              Centers
              <br />
              Pay
            </h2>

            <div className="mt-5 text-[18px] leading-[1.6] sm:text-[19px]">
              <p>
                Jon Husted gave $2.5 billion in out-of-control tax breaks to big
                corporations bringing data centers to our state. They gobble up
                energy, devour our land, suck up our water, then they leave you
                with the bill – not anymore.
              </p>
              <p className="mt-3">
                We’re fighting to require data centers to pay the full cost of
                their utilities so your bills don’t go up.
              </p>
              <p className="mt-3">
                Ohioans shouldn’t be forced to subsidize these costs and Ohioans
                – not Jon Husted and his billionaire friends – should get to
                decide if data centers are built in their community.
              </p>
              <p className="mt-3">
                Ohio deserves a leader who will fight to protect our communities
                instead of plotting to give sweetheart tax breaks to giant
                corporations.
              </p>
            </div>

            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* =========================================================
          ISSUE 4
      ========================================================= */}
      <section className="bg-[#255890] px-[10px] pb-5">
        <div className="border-b-[2px] border-[#fdb52b] bg-white px-7 py-6 text-[#111] sm:px-12 sm:py-8">
          <div className="mx-auto max-w-[1040px]">
            <FaPlug className="mb-3 text-[27px] text-[#fdb52b] sm:text-[32px]" />

            <h2 className="text-[50px] font-black uppercase leading-[0.92] text-[#20528c] sm:text-[53px]">
              CAPPING UTILITY RATE
              <br />
              INCREASES
            </h2>

            <div className="mt-5 max-w-[900px] text-[18px] leading-[1.6] sm:text-[19px]">
              <p>
                While utility CEOs are raking in millions of dollars a year,
                your rates keep going up and up and up. Now, utilities cost more
                than ever and for many hardworking families, it’s impossible to
                keep up.
              </p>

              <p className="mt-3">
                We’re fighting to cap how much utility companies can raise your
                rates, to make sure your bills are affordable and predictable.
                We’ll take on the utility companies because no Ohioan should
                have to choose between keeping the lights on and putting food on
                the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ISSUE 5
      ========================================================= */}
    

      {/* =========================================================
          YOU DESERVE A SENATOR
      ========================================================= */}
      <section className="bg-[#255890] px-6 py-11 text-center sm:px-10 sm:py-14">
        <h2 className="text-[24px] font-black uppercase leading-[1.05] sm:text-[29px]">
          YOU DESERVE A SENATOR WHO WILL
          <br />
          WORK FOR OHIO.
        </h2>

        <p className="mx-auto mt-5 max-w-[650px] text-[18px] font-semibold uppercase leading-[1.5] sm:text-[20px]">
          NOT for the utility companies, NOT for the drug companies, NOT for the
          insurance companies, and NOT for big oil. Someone who will be on YOUR
          side.
        </p>

        <p className="mx-auto mt-4 max-w-[650px] text-[18px] font-semibold leading-[1.5] sm:text-[20px]">
          Together, we’re going to win. And I’m in this fight with you,
          alongside you, every step of the way.
        </p>

        <h3 className="mt-7 text-[24px] font-black uppercase leading-[1.05] sm:text-[28px]">
          BECAUSE WHEN YOU LOVE THIS
          <br />
          COUNTRY, YOU FIGHT FOR THE PEOPLE
          <br />
          WHO MAKE IT WORK.
        </h3>
      </section>

      {/* =========================================================
          FIGHTING FOR OHIOANS
      ========================================================= */}
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
           
                     <a href="https://bsky.app/profile/sherrodbrownoh.bsky.social" aria-label="Bluesky">
                       <FaBluesky />
                     </a>
           
                     <a href="https://www.youtube.com/channel/UCt_l7Nge_872rTm5Jvbo6Mw" aria-label="YouTube">
                       <FaYoutube />
                     </a>
           
                     <a href="https://www.flickr.com/photos/sherrodbrown/" aria-label="Flickr">
                       <FaFlickr />
                     </a>
           
                     <a href="https://www.tiktok.com/@sherrodbrown" aria-label="TikTok">
                       <FaTiktok />
                     </a>
           
                     <a href="https://www.flickr.com/photos/sherrodbrown/" aria-label="LinkedIn">
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


export default Others;
