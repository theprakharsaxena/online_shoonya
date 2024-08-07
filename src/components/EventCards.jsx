import EventCard from "./EventCard";
import BlogsList from "../utils/BlogsList";
import { Link } from "react-router-dom";

const EventCards = ({ shortened }) => {
  const newBlogsList = shortened ? BlogsList.slice(0, 3) : BlogsList;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {newBlogsList.map((blog) => (
        <Link
          to={blog?.link}
          target="_blank"
          key={blog.heading}
          className="block"
        >
          <EventCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default EventCards;
