import DrizzleSvg from "../assets/drizzle.svg";
import CloudySvg from "../assets/cloudy.svg";
import ShowersSvg from "../assets/showers.svg";
import ClearCloudySvg from "../assets/clear-cloudy.svg";
import FoggySvg from "../assets/foggy.svg";
import ThunderStromSvg from "../assets/isolated-thunderstroms.svg";
import MostlyCloudySvg from "../assets/mostly-cloudy.svg";
import SleetSvg from "../assets/sleet.svg";
import SnowSvg from "../assets/snow.svg";
import SnowFlurriesSvg from "../assets/snow-flurries.svg";
import SunnySvg from "../assets/sunny.svg";
import TornadoSvg from "../assets/tornado.svg";
import WindySvg from "../assets/windy.svg";

const SIZE = 220;

export const getWeatherIcon = (weatherId: number) => {
  if (weatherId >= 200 && weatherId <= 232) {
    return <ThunderStromSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId >= 300 && weatherId <= 321) {
    return <ShowersSvg width={SIZE} height={SIZE} />;
  }
  if (weatherId >= 520 && weatherId <= 531) {
    return <ShowersSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId >= 500 && weatherId <= 504) {
    return <DrizzleSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 511 || weatherId === 621) {
    return <SleetSvg width={SIZE} height={SIZE} />;
  }
  if (weatherId >= 611 && weatherId <= 616) {
    return <SleetSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 600 || weatherId === 620) {
    return <SnowFlurriesSvg width={SIZE} height={SIZE} />;
  }
  if (weatherId >= 600 && weatherId <= 622) {
    return <SnowSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId >= 701 && weatherId <= 762) {
    return <FoggySvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 771) {
    return <WindySvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 781) {
    return <TornadoSvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 800) {
    return <SunnySvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 801) {
    return <ClearCloudySvg width={SIZE} height={SIZE} />;
  }
  if (weatherId === 802) {
    return <CloudySvg width={SIZE} height={SIZE} />;
  }

  if (weatherId === 803 || weatherId === 804) {
    return <MostlyCloudySvg width={SIZE} height={SIZE} />;
  }
};
