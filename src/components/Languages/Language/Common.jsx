import PropTypes from "prop-types";
import BarRating from "../../Common/BarRating";

export default function Common({ level, language, greeting }) {
  return (
    <div className="flex w-[80%] mx-auto gap-x-3 items-center group bg-black px-2 py-1 rounded-lg">
      <div className="relative inline-block border-[1px] border-gray-500/60 rounded-lg group-hover:border-transparent transition-all duration-300">
        <div className="absolute blur rounded-lg bg-gradient-to-r from-teal-600 -inset-0.5 to-emerald-600 opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
        <div className="shadow-lg bg-black w-24 h-16 xl:h-18 xl:w-28 px-4 py-2 rounded-lg relative text-center flex justify-center items-center">
          <p className="text-lg xl:text-xl font-semibold cursor-default">
            {greeting}
          </p>
        </div>
      </div>
      <div>
        <p className="font-bold text-lg xl:text-xl">{language}</p>
        <div className="mt-2">
          <BarRating level={level}></BarRating>
        </div>
      </div>
    </div>
  );
}
Common.propTypes = {
  level: PropTypes.number,
  language: PropTypes.string,
  greeting: PropTypes.string,
};
