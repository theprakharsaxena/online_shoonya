const EventCard = ({
  blog: { heading, subheading, category, link, readmin, img },
}) => {
  return (
    <div className="w-full p-4 rounded-2xl flex flex-col gap-5 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div className="h-[240px] overflow-hidden rounded-2xl">
        <img
          src={img}
          alt="event_img"
          className="w-full h-full object-cover object-center transition-transform transform hover:scale-110"
        />
      </div>
      <div className="flex gap-2 items-center">
        <p className="bg-gray-200 p-2 rounded-md text-sm lg:text-base xl:text-lg 2xl:text-xl">
          {category}
        </p>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500">
          {readmin} min read
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-[-5px]">
        <p className="font-sans font-semibold text-xl sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[1.875rem] text-gray-800">
          {heading}
        </p>
        <p className="font-sans text-gray-600">{subheading}</p>
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
