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

const Termsandcondition = () => {
 
    const navigate = useNavigate();
     
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#255890] text-white">
      {/* =========================================================
          HEADER / TOP SECTION
      ========================================================= */}
      {/* =========================================================
    TOP / TERMS HEADER
========================================================= */}
      <section className="relative overflow-hidden bg-[#092e58]">
        {/* Header */}
        <div className="relative z-30">
          <Header />
        </div>

        {/* Dark blue background */}
        <div className="absolute inset-0 bg-[#092e58]" />

        {/* Subtle darker gradient at the top */}
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
      text-[48px]
      font-black
      uppercase
      leading-[0.92]
      tracking-[-0.8px]
      text-white
      sm:text-[42px]
      sm:tracking-[-1px]
      lg:text-[70px]
      lg:tracking-[-1.5px]
    "
          >
            Terms and Conditions
            <br />
            of Use
          </h1>
        </div>
      </section>

      {/* =========================================================
          TERMS CONTENT
      ========================================================= */}
      <main className="bg-[#255890] px-3 pb-10 sm:px-6 lg:px-12">
        <article
          className="
            mx-auto
            max-w-[1024px]
            border
            border-[#d7d7d7]
            bg-white
            px-5
            py-8
            text-[10px]
            leading-[1.55]
            text-[#333]
            shadow-[0_0_10px_rgba(0,0,0,0.18)]
            sm:px-10
            sm:py-10
            sm:text-[12px]
            sm:leading-[1.6]
            lg:px-14
            lg:py-12
            lg:text-[13px]
          "
        >
          <h2 className="mb-5 text-[13px] font-bold text-[#222] sm:text-[15px]">
            Terms and Conditions of Use
          </h2>

          <p className="mb-4 font-bold uppercase">
            PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY. BY
            ACCESSING OR USING THIS SITE, YOU AGREE TO BE BOUND BY THE TERMS AND
            CONDITIONS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE.
            IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE THIS SITE.
          </p>

          <p className="mb-4">
            These Terms of Service (“Terms”) apply to your access to and use of
            the websites, mobile sites and other online offerings (collectively,
            the “Site”) provided by Friends of Sherrod Brown (the “Campaign,”
            “we,” or “us”) that link to these Terms. By accessing or by using
            our Site, you agree to these Terms, and any terms incorporated by
            reference. If you do not agree to these Terms, do not use our Site.
          </p>

          <p className="mb-4">
            We may make changes to these Terms from time to time. If we make
            changes, we will provide you with notice of such changes, such as by
            sending an email, providing a notice through our Site or updating
            the date at the top of these Terms. Unless we say otherwise in our
            notice, the amended Terms will be effective immediately, and your
            continued use of our Site after we provide such notice will confirm
            your acceptance of the changes.
          </p>

          <p className="mb-7">
            If you have any questions about these Terms or our Site, please
            contact us at{" "}
            <a
              href="mailto:info@sherrodbrown.com"
              className="font-semibold text-[#255890] underline"
            >
              info@sherrodbrown.com
            </a>
            .
          </p>

          <TermSection title="Privacy">
            <p>
              For information about how we collect, use, share and otherwise
              process information about you, please see our Privacy Policy.
            </p>
          </TermSection>

          <TermSection title="Consent to Use of Data and Mobile Communication; SMS Program Terms">
            <p>
              You consent to our communicating with you about the Site and the
              Campaign by SMS, text message, email or other electronic means.
              Your carrier’s normal messaging, data and other rates and fees
              will apply to these communications.
            </p>

            <p>
              By providing your mobile number and opting in, you agree to be
              contacted by or on behalf of the Campaign at the provided mobile
              number. This includes text messages, including automated text
              messages, for informational, product, or service-related purposes.
              Message frequency varies, and standard message and data rates may
              apply.
            </p>

            <p>
              To stop receiving text messages, reply with the word STOP. Txt
              HELP for help. We may confirm your opt-out by text message.
            </p>

            <p>
              Friends of Sherrod Brown shortcode provides subscribers with
              updates on campaign activities, donation asks, and ways to get
              involved. When you opt-in to receive text message communications
              from us, we will send you an SMS message to confirm your sign-up.
            </p>

            <p>
              You can unsubscribe from receiving short code messages at any
              time. Reply “STOP” to end messages. If you are experiencing issues
              with the messaging program you can reply with the keyword “HELP”
              for more assistance.
            </p>

            <p>
              Carriers are not liable for delayed or undelivered messages.
              T-Mobile is not liable for delayed or undelivered messages.
            </p>
          </TermSection>

          <TermSection title="User Content">
            <p>
              Our Site may allow you and other users to create, post, store and
              share content, including messages, comments, stories, text,
              photos, graphics, videos, music, and other materials
              (collectively, “User Content”).
            </p>

            <p>
              You may also submit User Content to the Campaign by other means,
              including email and text message. Except for the license you grant
              below, you retain all rights in and to your User Content, as
              between you and the Campaign.
            </p>

            <p>
              By posting, submitting or otherwise providing any User Content to
              the Campaign, you grant the Campaign and its independent
              contractors, service providers, consultants and joint committee
              members a perpetual, irrevocable, nonexclusive, royalty-free,
              worldwide, fully paid, and sublicensable license to use,
              reproduce, modify, adapt, publish, translate, create derivative
              works from, distribute, publicly perform and display your User
              Content.
            </p>
          </TermSection>

          <TermSection title="Prohibited Conduct and Content">
            <p>
              You will not violate any applicable law, contract, intellectual
              property right or other third-party right or commit a tort in
              connection with any User Content you post to the Site or otherwise
              provide to the Campaign.
            </p>

            <p>You will not:</p>

            <ul className="mb-4 list-disc space-y-1 pl-6">
              <li>
                Engage in any harassing, threatening, intimidating, predatory or
                stalking conduct;
              </li>
              <li>
                Use or attempt to use another user’s account without
                authorization;
              </li>
              <li>Impersonate or post on behalf of any person or entity;</li>
              <li>Sell, resell or commercially use our Site;</li>
              <li>
                Copy, reproduce, distribute, publicly perform or publicly
                display portions of our Site except as expressly permitted;
              </li>
              <li>Modify our Site or remove proprietary rights notices;</li>
              <li>
                Use our Site in a manner that could interfere with or disrupt
                other users;
              </li>
              <li>Reverse engineer any aspect of our Site;</li>
              <li>
                Use data mining, robots or similar data gathering methods;
              </li>
              <li>
                Develop applications that interact with our Site without prior
                written consent;
              </li>
              <li>
                Send or distribute spam or unsolicited commercial
                communications;
              </li>
              <li>
                Bypass or ignore instructions contained in our robots.txt file;
              </li>
              <li>Use our Site for any illegal or unauthorized purpose.</li>
            </ul>

            <p>
              You may only post, submit, or otherwise share User Content that is
              nonconfidential and that you have all necessary rights to
              disclose.
            </p>

            <p>
              You may not create, post, submit, store or share any User Content
              that is unlawful, defamatory, obscene, pornographic, indecent,
              harassing, threatening, invasive of privacy or publicity rights,
              abusive, inflammatory or fraudulent.
            </p>

            <p>
              You may not create content that infringes any patent, trademark,
              trade secret, copyright or other intellectual or proprietary right
              of any party.
            </p>

            <p>
              You may not provide private or personal information of a third
              party without that party’s consent.
            </p>
          </TermSection>

          <TermSection title="Ownership; Limited License">
            <p>
              The Site, including the text, graphics, images, photographs,
              videos, illustrations and other content contained therein, are
              owned by the Campaign or our licensors and are protected under
              both United States and foreign laws.
            </p>

            <p>
              Subject to your compliance with these Terms, you are granted a
              limited, nonexclusive, nontransferable, non-sublicensable,
              revocable license to access and use our Site for your own
              personal, noncommercial use.
            </p>
          </TermSection>

          <TermSection title="Trademarks">
            <p>
              Friends of Sherrod Brown and our logos, product or service names,
              slogans and the look and feel of the Site are trademarks of the
              Campaign and may not be copied, imitated or used without prior
              written permission.
            </p>

            <p>
              All other trademarks, registered trademarks, product names and
              Campaign names or logos mentioned on the Site are the property of
              their respective owners.
            </p>
          </TermSection>

          <TermSection title="Feedback">
            <p>
              You may voluntarily post, submit or otherwise communicate to us
              any questions, comments, suggestions, ideas, original or creative
              materials or other information about the Campaign or our Site
              (collectively, “Feedback”).
            </p>

            <p>
              You understand that we may use such Feedback for any purpose,
              commercial or otherwise, without acknowledgment or compensation to
              you.
            </p>
          </TermSection>

          <TermSection title="Repeat Infringer Policy; Copyright Complaints">
            <p>
              In accordance with the Digital Millennium Copyright Act and other
              applicable law, we have adopted a policy of terminating, in
              appropriate circumstances, the accounts of users who repeatedly
              infringe the intellectual property rights of others.
            </p>

            <p>
              If you believe that anything on our Site infringes any copyright
              that you own or control, you may notify the Campaign’s designated
              agent.
            </p>

            <div className="my-5 border-l-2 border-[#255890] pl-4">
              <p className="mb-1 font-semibold">
                Designated Agent: Josie Olsen
              </p>
              <p className="mb-1">3867 West Market Street</p>
              <p className="mb-1">Ste. 289</p>
              <p className="mb-1">Akron, OH 44333</p>
              <p className="mb-1">United States</p>
            </div>
          </TermSection>

          <TermSection title="Third-Party Content, Products, and Sites">
            <p>
              We may provide information about third-party organizations,
              events, products, services, or activities, or allow third parties
              to make their content and information available on or through the
              Site.
            </p>

            <p>
              We provide Third-Party Content as a service to those interested in
              such content. Your dealings or correspondence with third parties
              and your use of or interaction with any Third-Party Content are
              solely between you and the third party.
            </p>
          </TermSection>

          <TermSection title="Indemnification">
            <p>
              To the fullest extent permitted by applicable law, you will
              indemnify, defend and hold harmless the Campaign and its
              independent contractors, service providers, consultants, successor
              organizations, joint committee members, officers, directors,
              agents, partners and employees from and against losses,
              liabilities, claims, demands, damages, expenses or costs arising
              out of or related to your User Content, Feedback, violation of
              these Terms, violation of another party’s rights, or misconduct in
              connection with the Site.
            </p>
          </TermSection>

          <TermSection title="Dispute Resolution; Binding Arbitration">
            <p>
              Please read the following section carefully because it requires
              you to arbitrate certain disputes and claims with the Campaign and
              limits the manner in which you can seek relief from us, unless you
              opt out of arbitration by following the instructions set forth
              below.
            </p>

            <h3 className="mb-2 mt-5 font-bold">No Representative Actions</h3>

            <p>
              You and the Campaign agree that any dispute arising out of or
              related to these Terms or our Site is personal to you and the
              Campaign and will be resolved solely through individual action.
            </p>

            <h3 className="mb-2 mt-5 font-bold">Arbitration of Disputes</h3>

            <p>
              Except for qualifying small claims disputes, you and the Campaign
              waive your rights to a jury trial and to have disputes arising out
              of or related to these Terms or our Site resolved in court.
            </p>

            <p>
              Before submitting a dispute to arbitration, the parties agree to
              first attempt to resolve the matter informally through written
              notice and good-faith discussions.
            </p>

            <p>
              If the parties cannot reach an agreement within the applicable
              period, the dispute may be submitted to binding arbitration in
              accordance with the applicable arbitration rules.
            </p>

            <p>
              Any arbitration will be conducted in accordance with applicable
              federal law and the procedures described in these Terms.
            </p>
          </TermSection>

          <TermSection title="Disclaimers">
            <p>
              Your use of our Site is at your sole risk. Except as otherwise
              provided in writing by us, our Site and any content therein are
              provided “as is” and “as available” without warranties of any
              kind, either express or implied.
            </p>

            <p>
              The Campaign does not represent or warrant that our Site is
              accurate, complete, reliable, current or error-free.
            </p>
          </TermSection>

          <TermSection title="Limitation of Liability">
            <p className="font-bold uppercase">
              IN NO EVENT SHALL CAMPAIGN, OR OUR RESPECTIVE EMPLOYEES, AGENTS OR
              VOLUNTEERS BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT OR
              CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING
              BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA,
              ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR
              INABILITY TO USE THE SITE.
            </p>
          </TermSection>

          <TermSection title="Governing Law and Venue">
            <p>
              Any dispute arising from these Terms and your use of the Site will
              be governed by, construed, and enforced in accordance with the
              laws of Ohio, except to the extent preempted by U.S. federal law.
            </p>

            <p>
              Any dispute between the parties will be resolved in the state or
              federal courts of Ohio and the United States, respectively.
            </p>
          </TermSection>

          <TermSection title="Modifying and Terminating our Site">
            <p>
              We reserve the right to modify our Site or to suspend or stop
              providing all or portions of our Site at any time. You also have
              the right to stop using our Site at any time.
            </p>
          </TermSection>

          <TermSection title="Severability">
            <p>
              If any provision or part of a provision is unlawful, void or
              unenforceable, that provision or part of the provision is deemed
              severable from these Terms and does not affect the validity and
              enforceability of any remaining provisions.
            </p>
          </TermSection>

          <TermSection title="Miscellaneous">
            <p>
              These Terms constitute the agreement between you and the Campaign
              regarding your use of the Site and supersede prior agreements
              concerning the Site to the extent applicable.
            </p>
          </TermSection>
        </article>
      </main>

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
   REUSABLE TERMS SECTION
========================================================= */

const TermSection = ({ title, children }) => {
  return (
    <section className="mb-7">
      <h2 className="mb-3 text-[12px] font-bold text-[#222] sm:text-[14px]">
        {title}
      </h2>

      <div className="space-y-3">{children}</div>
    </section>
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


export default Termsandcondition;
