import { Weather } from '../models/WeatherModel';

export const makeFiveDaysObject = (
  fiveDaysWeather: any,
  locationWeather: any
) => {
  let title = fiveDaysWeather.Headline.Text;
  let tempArray: any = [];
  fiveDaysWeather.DailyForecasts.forEach((element: any) => {
    let weather = new Weather(
      locationWeather.key,
      locationWeather.city,
      locationWeather.country,
      element.Temperature.Minimum.Value,
      element.Temperature.Maximum.Value,
      999,
      element.Day.Icon
    );
    weather.setIconText(element.Day.IconPhrase);
    tempArray.push(weather);
  });
  return { title, tempArray };
};
