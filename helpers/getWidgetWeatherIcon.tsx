import { SvgWidget } from "react-native-android-widget";

export const getWidgetWeatherIcon = (
  weatherId: number,
  defaultSize?: number,
) => {
  const SIZE = defaultSize || 220;

  if (weatherId >= 200 && weatherId <= 232) {
    return (
      <SvgWidget
        svg={require("../assets/isolated-thunderstroms.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId >= 300 && weatherId <= 321) {
    return (
      <SvgWidget
        svg={require("../assets/showers.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }
  if (weatherId >= 520 && weatherId <= 531) {
    return (
      <SvgWidget
        svg={require("../assets/showers.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId >= 500 && weatherId <= 504) {
    return (
      <SvgWidget
        svg={require("../assets/drizzle.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 511 || weatherId === 621) {
    return (
      <SvgWidget
        svg={require("../assets/sleet.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }
  if (weatherId >= 611 && weatherId <= 616) {
    return (
      <SvgWidget
        svg={require("../assets/sleet.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 600 || weatherId === 620) {
    return (
      <SvgWidget
        svg={require("../assets/snow-flurries.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }
  if (weatherId >= 600 && weatherId <= 622) {
    return (
      <SvgWidget
        svg={require("../assets/snow.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId >= 701 && weatherId <= 762) {
    return (
      <SvgWidget
        svg={require("../assets/foggy.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 771) {
    return (
      <SvgWidget
        svg={require("../assets/windy.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 781) {
    return (
      <SvgWidget
        svg={require("../assets/tornado.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 800) {
    return (
      <SvgWidget
        svg={require("../assets/sunny.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 801) {
    return (
      <SvgWidget
        svg={require("../assets/clear-cloudy.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }
  if (weatherId === 802) {
    return (
      <SvgWidget
        svg={require("../assets/cloudy.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }

  if (weatherId === 803 || weatherId === 804) {
    return (
      <SvgWidget
        svg={require("../assets/mostly-cloudy.svg")}
        style={{ width: SIZE, height: SIZE }}
      />
    );
  }
};
