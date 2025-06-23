import InfoSlider from "@/components/general UI/InfoSlider";
import React from "react";

const page = () => {
  return (
    <div className="font-poppins">
      <div className="bg-[url(/HeaderNosotrosTulip.jpeg)] h-[380px] bg-cover flex items-center">
        {/* <img src="" alt="" /> */}
        <h1 className="transparent-text text-6xl font-bold pl-6">About Us</h1>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="md:flex py-6">
          <div className="border-b pb-8 w-1/2 px-4">
            <h3 className="text-2xl md:text-4xl font-bold mb-8">
              Since 2018,<span className="text-verde">Tulip Pictures</span> has
              been entirely focused on the acquisition and distribution of
              Mexican and international high quality films.
            </h3>
            <p className="text-[#d1d1d1] md:text-sm text-[11px]">
              In addition to film acquisition, we also develop distribution and
              sales strategies for the Mexican, U.S. and Latin American markets
              in order to maximize the potential for each one of our titles.
              <br />
              <br />
              Our VOD distribution catalogue currently offers a diverse range of
              titles from different genres which are available in the most
              prominent digital platforms, including Amazon Prime Video, iTunes,
              Claro Video, Google Play, among others.
              <br />
              <br />
              We also offer solutions for independent producers looking for
              services and expertise in distribution, fund application and
              festival routes.
              <br />
              <br />
              As an experienced team, we are committed to creating the best
              strategies in order to maximize the content&apos;s potential.
              <br />
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">01</span>Content
              Acquisition
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">02</span>Distribution
              Strategies
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">03</span>Pre buy Analysis
              from Production
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">04</span>Film Marketing
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <InfoSlider lang={"en"} />
        </div>
      </div>
    </div>
  );
};

export default page;
