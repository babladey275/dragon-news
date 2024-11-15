import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center bg-base-200 p-2 gap-2">
      <p className="bg-[#D72050] text-base-100 px-2 py-1 inline-block">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nam.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nam.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
