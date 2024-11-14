import PropTypes from "prop-types";
const BarRating = ({
  totalBars = 5,
  level = 0,
  barColor = "#059669",
  opacity,
  emptyBarColor = "#C8E6C9",
}) => {
  //   switch (level) {
  //     case 1:
  //       barColor = "rgb(248 113 113)";
  //       break;
  //     case 2:
  //       barColor = "rgb(250 204 21)";
  //       break;

  //     case 3:
  //       barColor = "rgb(163 230 53)";
  //       break;

  //     case 4:
  //       barColor = "rgb(45 212 191)";
  //       break;

  //     case 5:
  //       barColor = "rgb(74 222 128)";
  //       break;
  //     default:
  //       break;
  //   }
  switch (level) {
    case 1:
      opacity = 0.4;
      break;
    case 2:
      opacity = 0.5;
      break;
    case 3:
      opacity = 0.6;
      break;
    case 4:
      opacity = 0.7;
      break;
    case 5:
      opacity = 0.8;
      break;
    default:
      break;
  }
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(totalBars)].map((_, index) => (
        <div
          key={index}
          className="group-hover:!opacity-100 transition-opacity duration-300"
          style={{
            width: "32px",
            opacity: opacity,
            height: "4px",
            borderRadius: "1px",
            backgroundColor: index < level ? barColor : emptyBarColor,
          }}
        />
      ))}
    </div>
  );
};
BarRating.propTypes = {
  totalBars: PropTypes.number,
  opacity: PropTypes.number,
  level: PropTypes.number,
  initialRating: PropTypes.number,
  barColor: PropTypes.string,
  emptyBarColor: PropTypes.string,
};
export default BarRating;
