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


const Privacy = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#255890] text-white">
      {/* =========================================================
          TOP / PRIVACY HEADER
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#092e58]">
        <div className="relative z-30">
          <Header />
        </div>

        {/* Dark navy background */}
        <div className="absolute inset-0 bg-[#092e58]" />

        {/* Subtle gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[180px] bg-gradient-to-b from-[#061f3d] via-[#092e58] to-transparent" />

        {/* PAGE TITLE */}
           <div
          className="
    relative
    z-20
    flex
    min-h-[400px]
    items-center
    justify-center
    px-4
    pt-[95px]
    pb-8
    text-center
    sm:min-h-[400px]
    sm:px-6
    sm:pt-[110px]
    lg:min-h-[425px]
    lg:pt-[120px]
  "
        >
          <h1
            className="
      max-w-[700px]
      text-[62px]
      font-black
      uppercase
      leading-[0.92]
      tracking-[-0.8px]
      text-white
      sm:text-[52px]
      sm:tracking-[-1px]
      lg:text-[80px]
      lg:tracking-[-1.5px]
    "
          >
           Privacy
            <br />
           Policy
          </h1>
        </div>
      </section>

      {/* =========================================================
          PRIVACY POLICY CONTENT
      ========================================================= */}
      <main className="bg-[#255890]  px-3 py-3 sm:px-6 sm:py-5 lg:px-8">
        <article
          className="
            mx-auto
            max-w-[1024px]
            border
            border-[#d8d8d8]
            bg-white
            px-5
            py-7
            text-[9px]
            leading-[1.5]
            text-[#333333]
            shadow-[0_0_5px_rgba(0,0,0,0.15)]
            sm:px-8
            sm:py-9
            sm:text-[11px]
            sm:leading-[1.55]
            lg:px-10
            lg:py-10
            lg:text-[12px]
          "
        >
          <p className="mb-5">
            <span className="font-bold">Last Updated: August 11, 2025</span>
          </p>

          <p className="mb-5">
            At Friends of Sherrod Brown, we work to elect Sherrod Brown to the
            U.S. Senate. This Privacy Policy is designed to help you understand
            how Friends of Sherrod Brown (“the Campaign” “we”, “our”, “us”)
            collects, uses, and shares your personal information.
          </p>

          {/* TABLE OF CONTENTS */}
          <div className="mb-7">
            <PrivacyLink number="1" title="SCOPE" />
            <PrivacyLink
              number="2"
              title="PERSONAL INFORMATION WE COLLECT"
            />
            <PrivacyLink number="3" title="HOW WE USE INFORMATION" />
            <PrivacyLink
              number="4"
              title="HOW WE DISCLOSE YOUR INFORMATION"
            />
            <PrivacyLink
              number="5"
              title="YOUR PRIVACY CHOICES AND RIGHTS"
            />
            <PrivacyLink
              number="6"
              title="SECURITY OF YOUR INFORMATION"
            />
            <PrivacyLink
              number="7"
              title="INTERNATIONAL DATA TRANSFERS"
            />
            <PrivacyLink
              number="8"
              title="RETENTION OF PERSONAL INFORMATION"
            />
            <PrivacyLink number="9" title="CHILDREN’S INFORMATION" />
            <PrivacyLink number="10" title="OTHER PROVISIONS" />
            <PrivacyLink number="11" title="CONTACT US" />
          </div>

          {/* =====================================================
              1. SCOPE
          ===================================================== */}
          <PrivacySection number="1" title="SCOPE">
            <p>
              This Privacy Policy applies to personal information processed by
              us, including on our websites, applications, and other online or
              offline offerings. To make this Privacy Policy easier to read,
              our websites, applications, and other offerings are collectively
              called the “Services.”
            </p>

            <p className="font-bold uppercase">
              ATTENTION: PLEASE READ OUR PRIVACY POLICY CAREFULLY BEFORE
              ACCESSING OR USING THE SERVICE. ACCESSING OR USING THE SERVICES
              INDICATES THAT YOU ACCEPT AND AGREE TO BE BOUND BY THIS PRIVACY
              POLICY IN FULL. IF YOU DO NOT ACCEPT THIS PRIVACY POLICY, DO NOT
              ACCESS OR USE THE SERVICES.
            </p>

            <p>
              You acknowledge (a) that You have read and understood this
              Privacy Policy; and (b) that this Privacy Policy shall have the
              same force and effect as a signed agreement.
            </p>
          </PrivacySection>

          {/* =====================================================
              2. PERSONAL INFORMATION
          ===================================================== */}
          <PrivacySection
            number="2"
            title="PERSONAL INFORMATION WE COLLECT"
          >
            <p>
              The categories of personal information we collect depend on how
              you interact with us, our Services, and the requirements of
              applicable law. We collect information that you provide to us,
              information we obtain automatically when you use our Services,
              and information from other sources such as third-party services
              and organizations, as described below.
            </p>

            <PrivacySubSection title="Information You Provide to Us Directly">
              <p>
                We may collect the following personal information that you
                provide to us.
              </p>

              <PrivacyBullet title="Donations">
                We may collect personal information when you make donations,
                including name, email address, and cell phone. Federal law also
                requires us to use our best efforts to collect certain
                employment information, including your occupation and name of
                employer if your contributions exceed $200 in an election
                cycle. Your donations are processed by a third-party payment
                processor through our online fundraising platforms, including
                ActBlue and NGP VAN. We do not directly collect or store any
                payment card information entered through our Services, but we
                will receive information associated with your payment card
                information, as described above.
              </PrivacyBullet>

              <PrivacyBullet title="Petitions">
                If you decide to participate in our petitions, you may be asked
                to provide certain information, which may include personal
                information. We may treat your name, city, state, and any
                comments as public information.
              </PrivacyBullet>

              <PrivacyBullet title="Your Communications with Us">
                We may collect personal information, such as name, email
                address, phone number, or mailing address when you contact us
                through the Services, apply for a job, or otherwise communicate
                with us.
              </PrivacyBullet>

              <PrivacyBullet title="Social Sharing Features">
                We and others who use our Services may collect personal
                information that you submit or make available through our
                interactive features, including social media pages.
              </PrivacyBullet>

              <PrivacyBullet title="Strategic Partnerships">
                We may collect personal information from individuals and third
                parties to assess and pursue potential strategic partnerships.
              </PrivacyBullet>

              <PrivacyBullet title="Job Applications">
                We may post job openings and opportunities on our Services. If
                you reply to one of these postings by submitting your
                application, CV and/or cover letter to us, we will collect and
                use your information to assess your qualifications.
              </PrivacyBullet>
            </PrivacySubSection>

            <PrivacySubSection title="Information Collected Automatically">
              <p>
                We may collect personal information automatically when you use
                our Services.
              </p>

              <PrivacyBullet title="Automatic Data Collection">
                We may collect certain information automatically when you use
                our Services, such as your Internet Protocol (IP) address,
                user settings, MAC address, cookie identifiers, mobile carrier,
                mobile advertising and other unique identifiers, browser or
                device information, location information, and Internet Service
                Provider.
              </PrivacyBullet>

              <PrivacyBullet title="Cookies, Pixel Tags/Web Beacons, and Other Technologies">
                We, as well as third parties that provide content, advertising,
                or other functionality on our Services, may use cookies, pixel
                tags, local storage, and other technologies (“Technologies”) to
                automatically collect information through your use of our
                Services.
              </PrivacyBullet>

              <PrivacyBullet title="Cookies">
                A cookie is a small file containing a string of characters that
                is sent to your computer when you visit a website or use an
                online service.
              </PrivacyBullet>

              <PrivacyBullet title="Pixel Tags/Web Beacons">
                A pixel tag, also known as a web beacon, is a piece of code
                embedded in our Services that collects information about
                engagement on our Services.
              </PrivacyBullet>

              <PrivacyBullet title="Duration of Cookies">
                We may use “session cookies” or “persistent cookies.” Session
                cookies are temporary and expire once you close your browser or
                once your session ends. Persistent cookies remain on your device
                for much longer or until you or your browser erases them.
              </PrivacyBullet>

              <PrivacyBullet title="How do I control cookies">
                Web browsers allow some control of most cookies through the
                browser settings. Most mobile devices also offer settings to
                reject mobile device identifiers. Although users are not
                required to accept cookies or mobile device identifiers,
                blocking or rejecting them may prevent access to some features
                available through the Services or impair functionality.
              </PrivacyBullet>
            </PrivacySubSection>

            <PrivacySubSection title="Analytics">
              <p>
                We may use Technologies and other third-party tools to process
                analytics information on our Services. Some of our analytics
                partners include:
              </p>

              <ul className="list-disc space-y-1 pl-6">
                <li>Google Analytics</li>
                <li>Google Advertising</li>
                <li>Mixpanel</li>
                <li>Facebook Connect</li>
                <li>X Pixel</li>
              </ul>
            </PrivacySubSection>

            <PrivacySubSection title="Information Collected from Other Sources">
              <p>
                We may obtain information about you from other sources,
                including through third-party services.
              </p>
            </PrivacySubSection>
          </PrivacySection>

          {/* =====================================================
              3. HOW WE USE
          ===================================================== */}
          <PrivacySection number="3" title="HOW WE USE YOUR INFORMATION">
            <p>
              We use your information for a variety of purposes, including to
              provide our Services, for administrative purposes, and to market
              our Services, as described below.
            </p>

            <p>
              Text messaging originator opt-in data and consent will not be
              shared with third parties, provided that we may share text
              messaging originator opt-in data and consent with our third-party
              vendors, consultants and other service providers who need access
              to such information to carry out work on our behalf.
            </p>

            <PrivacySubSection title="Provide Our Services">
              <p>We use your information to provide you with our Services, such as:</p>

              <ul className="list-disc space-y-1 pl-6">
                <li>Managing your information;</li>
                <li>
                  Providing access to certain areas, functionalities, and
                  features of our Services;
                </li>
                <li>Answering requests for customer or technical support;</li>
                <li>
                  Sending you newsletters and alerts and otherwise providing
                  you with news and information;
                </li>
                <li>
                  Connecting you with other supporters and soliciting
                  volunteers, donations and support;
                </li>
                <li>Reminding you to vote and register to vote;</li>
                <li>Communicating with you about policy changes;</li>
                <li>
                  Processing your financial information and other payment
                  methods for donations;
                </li>
                <li>Processing job applications;</li>
                <li>Allowing you to join campaigns and donate.</li>
              </ul>
            </PrivacySubSection>

            <PrivacySubSection title="Administrative Purposes">
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Pursuing legitimate interests such as soliciting donations
                  and managing volunteers;
                </li>
                <li>Detecting security incidents;</li>
                <li>Measuring interest and engagement;</li>
                <li>Improving, upgrading or enhancing our Services;</li>
                <li>Ensuring internal quality control and safety;</li>
                <li>Authenticating and verifying identities;</li>
                <li>Debugging and repairing errors;</li>
                <li>Auditing;</li>
                <li>Enforcing agreements and policies;</li>
                <li>Complying with legal obligations.</li>
              </ul>
            </PrivacySubSection>

            <PrivacySubSection title="Marketing and Advertising our Services">
              <p>
                We may use personal information to tailor and provide you with
                content and advertisements. We may provide you with these
                materials as permitted by applicable law.
              </p>

              <p>
                Some of the ways we market to you include email campaigns,
                text messages, phone calls, custom audience advertising, and
                interest-based or personalized advertising, including through
                cross-device tracking.
              </p>
            </PrivacySubSection>

            <PrivacySubSection title="Other Purposes">
              <p>
                We also use your information for other purposes as requested by
                you or as permitted by applicable law.
              </p>

              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong>Consent.</strong> We may use personal information for
                  other purposes clearly disclosed to you.
                </li>
                <li>
                  <strong>De-identified and Aggregated Information.</strong>{" "}
                  We may use personal information and other information about
                  you to create de-identified and/or aggregated information.
                </li>
              </ul>
            </PrivacySubSection>
          </PrivacySection>

          {/* =====================================================
              4. DISCLOSURE
          ===================================================== */}
          <PrivacySection
            number="4"
            title="HOW WE DISCLOSE YOUR INFORMATION"
          >
            <p>
              We disclose your information to third parties for a variety of
              business purposes, including to provide our Services, to protect
              us or others, or in the event of a major business transaction.
            </p>

            <PrivacySubSection title="Disclosures to Provide our Services">
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong>Individuals You Share or Interact With.</strong> The
                  Services may include tools that permit you to share personal
                  information with others.
                </li>
                <li>
                  <strong>Service Providers.</strong> We may share your
                  personal information with third-party service providers who
                  help us provide our Services.
                </li>
                <li>
                  <strong>Partners.</strong> We may share personal information
                  with partners and organizations that have similar missions or
                  goals.
                </li>
                <li>
                  <strong>Affiliates.</strong> We may share your information
                  with Campaign affiliates, including other political
                  committees.
                </li>
                <li>
                  <strong>Advertising Partners.</strong> We may share your
                  personal information with third-party advertising partners.
                </li>
              </ul>
            </PrivacySubSection>

            <PrivacySubSection title="Disclosures to Protect Us or Others">
              <p>
                We may access, preserve, and disclose information we store
                associated with you to external parties if we, in good faith,
                believe doing so is required or appropriate to comply with law
                enforcement or legal process, protect rights, property or
                safety, enforce policies, collect amounts owed, or assist with
                an investigation.
              </p>
            </PrivacySubSection>

            <PrivacySubSection title="Disclosure in the Event of Merger, Sale, or Other Asset Transfers">
              <p>
                If we are involved in a merger, acquisition, financing due
                diligence, reorganization, bankruptcy, receivership, purchase
                or sale of assets, or transition of service to another
                provider, your information may be sold or transferred as part
                of such a transaction, as permitted by law and/or contract.
              </p>
            </PrivacySubSection>
          </PrivacySection>

          {/* =====================================================
              5. PRIVACY CHOICES
          ===================================================== */}
          <PrivacySection
            number="5"
            title="YOUR PRIVACY CHOICES AND RIGHTS"
          >
            <p>
              The privacy choices you may have about your personal information
              are determined by applicable law and are described below.
            </p>

            <PrivacyBullet title="Email and Telephone Communications">
              If you receive an unwanted email from us, you can use the
              unsubscribe link found at the bottom of the email to opt out of
              receiving future emails. We process requests to be placed on
              do-not-mail, do-not-phone, and do-not-contact lists as required
              by applicable law.
            </PrivacyBullet>

            <PrivacyBullet title="Text Messages">
              To stop receiving text messages, reply with the word STOP or by
              following the instructions in the text message you have received
              from us. We may confirm your opt-out by text message.
            </PrivacyBullet>

            <PrivacyBullet title="Do Not Track">
              Do Not Track (“DNT”) is a privacy preference that users can set
              in certain web browsers. Please note that we do not respond to or
              honor DNT signals or similar mechanisms transmitted by web
              browsers.
            </PrivacyBullet>

            <PrivacyBullet title="Cookies and Interest-Based Advertising">
              You may stop or restrict the placement of Technologies on your
              device or remove them by adjusting your preferences as your
              browser or device permits.
            </PrivacyBullet>
          </PrivacySection>

          {/* =====================================================
              6. SECURITY
          ===================================================== */}
          <PrivacySection
            number="6"
            title="SECURITY OF YOUR INFORMATION"
          >
            <p>
              We take steps to ensure that your information is treated
              securely and in accordance with this Privacy Policy.
              Unfortunately, no system is 100% secure, and we cannot ensure or
              warrant the security of any information you provide to us.
            </p>

            <p>
              By using our Services or providing personal information to us,
              you agree that we may communicate with you electronically
              regarding security, privacy, and administrative issues relating
              to your use of our Services.
            </p>
          </PrivacySection>

          {/* =====================================================
              7. INTERNATIONAL
          ===================================================== */}
          <PrivacySection
            number="7"
            title="INTERNATIONAL DATA TRANSFERS"
          >
            <p>
              Friends of Sherrod Brown is based in the United States and the
              information we collect is governed by U.S. law. By accessing or
              using the Sites or otherwise providing information to us, you
              consent to the processing and transfer of information in and to
              the U.S. and other countries.
            </p>

            <p>
              All information processed by us may be transferred, processed,
              and stored anywhere in the world, including, but not limited to,
              the United States or other countries, which may have data
              protection laws that are different from the laws where you live.
            </p>
          </PrivacySection>

          {/* =====================================================
              8. RETENTION
          ===================================================== */}
          <PrivacySection
            number="8"
            title="RETENTION OF PERSONAL INFORMATION"
          >
            <p>
              We store the personal information we collect as described in this
              Privacy Policy for as long as you use our Services or as
              necessary to fulfill the purpose(s) for which it was collected,
              provide our Services, resolve disputes, establish legal
              defenses, conduct audits, pursue legitimate business purposes,
              enforce our agreements, and comply with applicable laws.
            </p>
          </PrivacySection>

          {/* =====================================================
              9. CHILDREN
          ===================================================== */}
          <PrivacySection number="9" title="CHILDREN’S INFORMATION">
            <p>
              The Services are not directed to children under 13 (or other age
              as required by local law), and we do not knowingly collect
              personal information from children.
            </p>

            <p>
              If you are a parent or guardian and believe your child has
              uploaded personal information to our site without your consent,
              you may contact us as described in “Contact Us” below.
            </p>
          </PrivacySection>

          {/* =====================================================
              10. OTHER PROVISIONS
          ===================================================== */}
          <PrivacySection number="10" title="OTHER PROVISIONS">
            <PrivacySubSection title="Third-Party Services">
              <p>
                Certain features and functionalities of the Services may link
                to or allow you to interface, interact, or share information
                with third-party websites, services, products, and technology.
              </p>

              <p>
                The Campaign does not provide or control any aspect of the
                Third-Party Services and is not responsible for their privacy
                practices or content.
              </p>
            </PrivacySubSection>

            <PrivacySubSection title="Changes to our Privacy Policy">
              <p>
                We may revise this Privacy Policy from time to time in our sole
                discretion. If we make changes, we will notify you by revising
                the date at the top of the policy and, in some cases, we may
                provide you with additional notice.
              </p>

              <p>
                We encourage you to review the Privacy Policy whenever you
                access the Sites to stay informed about our information
                practices.
              </p>
            </PrivacySubSection>
          </PrivacySection>

          {/* =====================================================
              11. CONTACT
          ===================================================== */}
      
        </article>
      </main>

      {/* =========================================================
          BOTTOM OHIOANS / FOOTER
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
                    className="inline-block bg-[#fdb52b] px-7 py-3 text-[24px] font-black text-[#092e58] transition hover:bg-white"
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
                <div className="mt-8 flex flex-wrap justify-center gap-5 text-[13px] font-black sm:text-[15px]">
                  <a href="#privacy">PRIVACY POLICY</a>
                  <a href="#terms">TERMS OF SERVICE</a>
               
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

/* =========================================================
   COMPONENTS
========================================================= */

const PrivacySection = ({ number, title, children }) => {
  return (
    <section className="mb-7">
      <h2 className="mb-3 text-[11px] font-bold uppercase text-[#222] sm:text-[13px] lg:text-[14px]">
        {number}. {title}
      </h2>

      <div className="space-y-3">{children}</div>
    </section>
  );
};

const PrivacySubSection = ({ title, children }) => {
  return (
    <div className="mt-5">
      <h3 className="mb-2 text-[10px] font-bold text-[#222] sm:text-[12px]">
        {title}
      </h3>

      <div className="space-y-3">{children}</div>
    </div>
  );
};

const PrivacyBullet = ({ title, children }) => {
  return (
    <div className="relative pl-5">
      <span className="absolute left-1 top-[6px] h-1 w-1 rounded-full bg-[#333]" />

      <p>
        <span className="font-semibold">{title}.</span> {children}
      </p>
    </div>
  );
};

const PrivacyLink = ({ number, title }) => {
  return (
    <p className="mb-1 font-semibold">
      {number}. {title}
    </p>
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


export default Privacy;
