import React from "react";
import { FlexWidget, TextWidget } from "react-native-android-widget";

import { UserLocation } from "../types/entities/UserLocation";
import { getWidgetWeatherIcon } from "../helpers/getWidgetWeatherIcon";
import { getTemp } from "../helpers/getTemp";
import { DegreeType } from "../types/general/DegreeType";
import { WeatherData } from "../types/entities/WeatherData";

interface WeatherWidgetProps {
  weatherData: WeatherData;
  userLocation: UserLocation | null;
  degreeType: DegreeType | null;
}

export function WeatherWidget({
  weatherData,
  userLocation,
  degreeType,
}: WeatherWidgetProps) {
  if (!weatherData || !userLocation) {
    return (
      <FlexWidget
        style={{
          height: "match_parent",
          width: "match_parent",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: 16,
        }}
      >
        <TextWidget
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 24,
          }}
          text={`Open app for configuration widget`}
        />
      </FlexWidget>
    );
  }

  return (
    <FlexWidget
      style={{
        height: "match_parent",
        width: "match_parent",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 16,
      }}
    >
      {getWidgetWeatherIcon(weatherData?.current?.weather[0]?.id, 100)}

      <FlexWidget
        style={{
          height: "match_parent",
          width: "match_parent",
          justifyContent: "center",
          alignItems: "center",
          flexGap: 5,
        }}
      >
        <TextWidget
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 24,
          }}
          text={`${userLocation?.isoCountryCode}, `}
        />

        <TextWidget
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 24,
          }}
          text={userLocation?.cityName || ""}
        />
      </FlexWidget>

      <TextWidget
        style={{
          fontFamily: "Rubik_500Medium",
          fontSize: 34,
        }}
        text={`${getTemp(weatherData?.current?.temp, degreeType || "C")}°C`}
      />
    </FlexWidget>
  );
}
