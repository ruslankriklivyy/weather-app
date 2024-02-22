import React from "react";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { WeatherWidget } from "./WeatherWidget";
import { USER_COORDS_STORAGE_KEY } from "../components/hoc/WithCurrentLocation";
import { WEATHER_DATA_STORAGE_KEY } from "../hooks/useWeather";
import { DEGREE_TYPE_STORAGE_KEY } from "../components/hoc/WithWeather";
import { DegreeType } from "../types/general/DegreeType";

const nameToWidget = {
  Weather: WeatherWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];
  const userLocation = await AsyncStorage.getItem(USER_COORDS_STORAGE_KEY);
  const userLocationJson = userLocation ? JSON.parse(userLocation) : null;
  const weatherData = await AsyncStorage.getItem(WEATHER_DATA_STORAGE_KEY);
  const weatherDataJson = weatherData ? JSON.parse(weatherData) : null;
  const degreeType = await AsyncStorage.getItem(DEGREE_TYPE_STORAGE_KEY);

  switch (props.widgetAction) {
    case "WIDGET_ADDED":
      props.renderWidget(
        <Widget
          weatherData={weatherDataJson}
          userLocation={userLocationJson}
          degreeType={degreeType as DegreeType | null}
        />,
      );
      break;

    case "WIDGET_UPDATE":
      // Not needed for now
      break;

    case "WIDGET_RESIZED":
      // Not needed for now
      break;

    case "WIDGET_DELETED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      // Not needed for now
      break;

    default:
      break;
  }
}
