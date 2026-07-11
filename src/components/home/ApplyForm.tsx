"use client";

import { useState } from "react";


export default function ApplicationForm() {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",

  creatorHandle: "",
  contentNiche: "",

  primaryPlatforms: [] as string[],

  followersRange: "",
  averageViews: "",

  primaryProfileLink: "",
  otherSocialLinks: "",

  interestedIn: [] as string[],

  about: "",
  previousExperience: "",

  heardFrom: "",

  acceptedTerms: false,
  mediaConsent: false,
  newsletter: false,
});

const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value, type } = e.target;

  if (type === "checkbox") {
    const target = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: target.checked,
    }));

    return;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleArrayCheckbox = (
  field: "primaryPlatforms" | "interestedIn",
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: prev[field].includes(value)
      ? prev[field].filter((item) => item !== value)
      : [...prev[field], value],
  }));
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Application Submitted Successfully 🎉");

      // Form Reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",

        creatorHandle: "",
        contentNiche: "",

        primaryPlatforms: [],

        followersRange: "",
        averageViews: "",

        primaryProfileLink: "",
        otherSocialLinks: "",

        interestedIn: [],

        about: "",
        previousExperience: "",

        heardFrom: "",

        acceptedTerms: false,
        mediaConsent: false,
        newsletter: false,
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="apply"
      className="bg-[#0f0f11] py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-[#1a1a1e] p-8 md:p-14">

          {/* Heading */}

          <h2 className="font-[var(--font-anton)] text-[42px] uppercase leading-none text-white md:text-[64px]">
            APPLY AS A CREATOR
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Fill in the form below and we'll review your application
            within 5–7 business days.
          </p>

          {/* Divider */}

          <div className="my-12 border-b border-white/10"></div>

          {/* Personal Info */}

          <h3 className="mb-10 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            PERSONAL INFORMATION
          </h3>
     <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}

            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  FIRST NAME <span className="text-red-500">*</span>
                </label>

                <input
                   name="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
                   type="text"
                   placeholder="e.g. Alex"
                    className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  LAST NAME <span className="text-red-500">*</span>
                </label>

                <input
                   name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Rivera"
                  className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                />
              </div>

            </div>

            {/* Row 2 */}

            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>

                <input
                    type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
                  placeholder="hello@yoursite.com"
                  className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  PHONE NUMBER
                </label>

                <input
                  name="phone"
  value={formData.phone}
  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                />
              </div>

            </div>

            {/* Row 3 */}

            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  COUNTRY <span className="text-red-500">*</span>
                </label>

                <select
                 name="country"
  value={formData.country}
  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                >
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  CITY
                </label>

                <input
                     name="city"
                      type="text"
  value={formData.city}
  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
                />
              </div>

            </div>

  {/* ================= CREATOR PROFILE ================= */}

  <div className="mt-16 border-t border-white/10 pt-12">

    <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
      CREATOR PROFILE
    </h3>

    {/* Row 1 */}

    <div className="grid gap-8 md:grid-cols-2">

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
          PRIMARY CREATOR HANDLE / NAME
          <span className="text-red-500">*</span>
        </label>

        <input
          name="creatorHandle"
  value={formData.creatorHandle}
  onChange={handleChange}
  type="text"
          placeholder="@yourname"
          className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
        />
      </div>

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
          CONTENT NICHE
          <span className="text-red-500">*</span>
        </label>

        <select name="contentNiche"
  value={formData.contentNiche}
  onChange={handleChange} className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500">
          <option>Education & How-to</option>
          <option>Gaming</option>
          <option>Tech</option>
          <option>Lifestyle</option>
          <option>Comedy</option>
          <option>Travel</option>
          <option>Music</option>
          <option>Fitness</option>
        </select>
      </div>

    </div>

    {/* Platform */}

    <div className="mt-10">

      <label className="mb-5 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
        PRIMARY PLATFORM(S)
        <span className="text-red-500">*</span>
      </label>

      <div className="space-y-4">

        {[
          "YOUTUBE",
          "INSTAGRAM",
          "TIKTOK",
          "TWITCH",
          "PODCAST",
          "X (TWITTER)",
          "OTHER",
        ].map((item) => (

          <label
            key={item}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
             type="checkbox"
  checked={formData.primaryPlatforms.includes(item)}
  onChange={() => handleArrayCheckbox("primaryPlatforms", item)}
              className="h-5 w-5 accent-red-500"
            />

            <span className="text-lg font-bold uppercase text-red-500">
              {item}
            </span>

          </label>

        ))}

      </div>

    </div>

    {/* Followers */}

    <div className="mt-10 grid gap-8 md:grid-cols-2">

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
          TOTAL FOLLOWERS / SUBSCRIBERS
          <span className="text-red-500">*</span>
        </label>

        <select  name="followersRange"
  value={formData.followersRange}
  onChange={handleChange} className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500">
          <option>Select range</option>
          <option>1K - 10K</option>
          <option>10K - 50K</option>
          <option>50K - 100K</option>
          <option>100K - 500K</option>
          <option>500K+</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
          AVERAGE VIEWS PER POST
        </label>

        <select  name="averageViews"
  value={formData.averageViews}
  onChange={handleChange} className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500">
          <option>Select range</option>
          <option>1K - 10K</option>
          <option>10K - 50K</option>
          <option>50K - 100K</option>
          <option>100K+</option>
        </select>
      </div>

    </div>

    {/* Profile Link */}

    <div className="mt-10">

      <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
        PRIMARY CHANNEL / PROFILE LINK
        <span className="text-red-500">*</span>
      </label>

      <input
        name="primaryProfileLink"
  value={formData.primaryProfileLink}
  onChange={handleChange}
  type="url"
        placeholder="https://youtube.com/@yourchannel"
        className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
      />

    </div>

  </div>
  {/* Other Social Media Links */}

<div className="mt-10">
  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
    OTHER SOCIAL MEDIA LINKS
  </label>

  <input
    type="text"
  name="otherSocialLinks"
  value={formData.otherSocialLinks}
  onChange={handleChange}
    placeholder="Paste links separated by commas"
    className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500"
  />
</div>

{/* Divider */}

<div className="my-12 border-b border-white/10"></div>

{/* ================= PARTICIPATION PREFERENCES ================= */}

<h3 className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
  PARTICIPATION PREFERENCES
</h3>

<div>
  <label className="mb-5 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
    INTERESTED IN (SELECT ALL THAT APPLY)
  </label>

  <div className="space-y-5">
    {[
      "HOSTING A PANEL OR TALK",
      "MEET & GREET BOOTH",
      "CREATOR COLLABORATIONS",
      "BRAND SPONSORSHIP OPPORTUNITIES",
      "LIVE CONTENT CHALLENGES",
    ].map((item) => (
      <label
        key={item}
        
        className="flex cursor-pointer items-center gap-4"
      >
        <input
          type="checkbox"
          checked={formData.interestedIn.includes(item)}
  onChange={() => handleArrayCheckbox("interestedIn", item)}
          className="h-5 w-5 accent-red-500"
        />

        <span className="text-lg font-bold uppercase text-red-500">
          {item}
        </span>
      </label>
    ))}
  </div>
</div>

{/* About Yourself */}

<div className="mt-10">
  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
    TELL US ABOUT YOURSELF & WHY YOU WANT TO JOIN
    <span className="text-red-500">*</span>
  </label>

  <textarea
   name="about"
  value={formData.about}
  onChange={handleChange}
    rows={6}
    placeholder="Tell us about your content, audience, achievements and why you'd like to join FanFest 2026..."
    className="w-full rounded-xl border border-transparent bg-[#0d0d0f] p-5 text-white outline-none transition focus:border-red-500"
  />
</div>
{/* Previous Event Experience */}

<div className="mt-10">
  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
    PREVIOUS EVENT EXPERIENCE
  </label>

  <textarea
   name="previousExperience"
  value={formData.previousExperience}
  onChange={handleChange}
    rows={4}
    placeholder="Have you attended or participated in fan conventions or creator events before? Tell us about it."
    className="w-full rounded-xl border border-transparent bg-[#0d0d0f] p-5 text-white outline-none transition focus:border-red-500"
  />
</div>

{/* How did you hear */}

<div className="mt-10">
  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
    HOW DID YOU HEAR ABOUT FANFEST 2026?
  </label>

  <select  name="heardFrom"
  value={formData.heardFrom}
  onChange={handleChange} className="h-14 w-full rounded-xl border border-transparent bg-[#0d0d0f] px-5 text-white outline-none transition focus:border-red-500">
    <option>Select one</option>
    <option>Instagram</option>
    <option>YouTube</option>
    <option>TikTok</option>
    <option>X (Twitter)</option>
    <option>Facebook</option>
    <option>Friend / Referral</option>
    <option>Google Search</option>
    <option>Other</option>
  </select>
</div>

{/* Divider */}

<div className="my-12 border-b border-white/10"></div>

{/* Agreements */}

<div className="space-y-8">

  <label className="flex cursor-pointer items-start gap-4">
    <input
  name="acceptedTerms"
  checked={formData.acceptedTerms}
  onChange={handleChange}
      type="checkbox"
      className="mt-1 h-6 w-6 accent-red-500"
    />

    <span className="text-lg font-bold uppercase leading-8 text-red-500">
      I AGREE TO FANFEST 2026'S TERMS & CONDITIONS AND CREATOR CODE OF CONDUCT.
      <span className="text-red-500"> *</span>
    </span>
  </label>

  <label className="flex cursor-pointer items-start gap-4">
    <input
       type="checkbox"
  name="mediaConsent"
  checked={formData.mediaConsent}
  onChange={handleChange}
      className="mt-1 h-6 w-6 accent-red-500"
    />

    <span className="text-lg font-bold uppercase leading-8 text-red-500">
      I CONSENT TO PHOTOS AND VIDEOS OF ME BEING USED IN FANFEST MARKETING MATERIALS.
    </span>
  </label>

  <label className="flex cursor-pointer items-start gap-4">
    <input
     type="checkbox"
  name="newsletter"
  checked={formData.newsletter}
  onChange={handleChange}
      className="mt-1 h-6 w-6 accent-red-500"
    />

    <span className="text-lg font-bold uppercase leading-8 text-red-500">
      KEEP ME UPDATED WITH FANFEST NEWS AND FUTURE OPPORTUNITIES.
    </span>
  </label>

</div>
{/* <button
  type="submit"
  disabled={loading}
    className="
    group relative mt-10
    w-full
    rounded-xl
    inline-flex items-center justify-center
    overflow-hidden
    border border-red-500
    bg-red-500
    px-12 py-5
    text-sm font-bold uppercase
    tracking-[0.3em]
    text-white
    transition-all duration-300
    hover:bg-transparent
    hover:text-red-500
  ">
  {loading ? "Submitting..." : "Submit My Application"}


  <span className="relative z-10 ">
    Submit My  Application
  </span>

  <span
    className="
      ml-4 text-2xl
      transition-transform duration-300
      group-hover:translate-x-2
    "
  >
    →
  </span>
</button> */}

<button
  type="submit"
  disabled={loading}
  className="group relative mt-10 w-full rounded-xl inline-flex items-center justify-center overflow-hidden border border-red-500 bg-red-500 px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-transparent hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <span className="relative z-10">
    {loading ? "Submitting..." : "Submit My Application"}
  </span>

  {!loading && (
    <span className="ml-4 text-2xl transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  )}
</button>

</form>


        </div>

      </div>
    </section>
  );
}
