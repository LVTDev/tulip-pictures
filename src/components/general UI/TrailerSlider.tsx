// import { headers } from "next/headers";

// async function isMobileDevice(){
//   const headersList = await headers()
//   const userAgent = headersList.get('user-agent') || ''
//     return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)
// }
const TrailerSlide = ({
  url,
  urlVertical,
}: {
  url: string;
  urlVertical?: string;
}) => {
  //   const isMobile = await isMobileDevice()
  //   const videoUrl = isMobile ? urlVertical : url
  const videoUrl = url;
  return (
    // <div className="relative w-full pb-[75.25%] md:pb-[45.25%] max-h-[55vh] flex justify-center">
    <div className="relative min-h-screen">
      <video
        data-testid="video"
        className="bg-red-200 w-full h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
        width="100%"
        height="1000%"
        muted={true}
        autoPlay={true}
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute text-white bottom-0 w-full z-200">
        <img
          src={
            "https://cdn.sanity.io/images/yj63f9tw/production/c16b940093e06f810cd5a603315ba98fe5683b49-1520x174.png"
          }
          className="mx-auto md:mx-0"
          alt="Header"
        />
      </div>
    </div>
  );
};

export default TrailerSlide;
