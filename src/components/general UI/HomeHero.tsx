import React from "react";

const HomeHero = () => {

  return (
    <div className="relative w-screen h-screen flex justify-center">
      <video
        data-testid="video"
        className="w-full  h-full absolute object-contain"
        // width="100%"
        // height="80%"
        muted
        autoPlay={true}
        aria-label="Video player"
      >
        <source
          src="https://cdn.sanity.io/files/yj63f9tw/production/a9b15ef6d0de21f23dbc43df0498fca6921436ad.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HomeHero;
