const EventCard = ({
  blog: { heading, subheading, category, link, readmin, img },
}) => {
  return (
    <div className="w-full p-4 sm:h-[calc(100vh/1.2)] rounded-2xl flex flex-col gap-5 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div className="h-[240px] overflow-hidden rounded-2xl">
        <img
          src={img}
          alt="event_img"
          className="w-full h-full object-cover object-center transition-transform transform hover:scale-110"
        />
      </div>
      <div className="flex gap-2 items-center">
        <p className="bg-gray-200 px-3 py-1.5 rounded-md text-sm lg:text-base xl:text-lg 2xl:text-xl">
          {category}
        </p>
        <p className="text-sm lg:text-base text-gray-500">{readmin} min read</p>
      </div>
      <div className="flex flex-col gap-2 mt-[-5px]">
        <p className="font-sans font-semibold text-xl md:text-2xl xl:text-3xl text-gray-800">
          {heading}
        </p>
        <p className="font-sans text-gray-600 text-sm">{subheading}</p>
      </div>
    </div>
  );
};

export default EventCard;

{
  /* Uncomment the section below if needed */
}
{
  /* <div className="flex items-center">
        <Link to={link} target='_blank'>
          <p className="font-sans text-blue-500">Get directions</p>
        </Link>
        <img src={rightArrow} alt="right_arrow" />
      </div> */
}
