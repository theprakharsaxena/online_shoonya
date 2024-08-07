const RotationalImage = () => {
  return (
    <div className="mt-8">
      <div id="circle-orbit-container">
        <div id="central-image">
          <img src="/about/logo.webp" alt="Central" />
        </div>
        <div id="inner-orbit">
          <div className="inner-orbit-cirlces"></div>
        </div>
        {/* <div id="inner-orbit-1"></div> */}
        <div id="middle-orbit">
          <div className="middle-orbit-cirlces"></div>
        </div>
        {/* <div id="middle-orbit-2"></div> */}
        <div id="outer-orbit">
          <div className="outer-orbit-cirlces"></div>
        </div>
      </div>
    </div>
  );
};

export default RotationalImage;
