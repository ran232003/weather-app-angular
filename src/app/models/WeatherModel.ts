export class Weather {
  constructor(
    public city: string,
    public country: string,
    public minTem: string,
    public maxTemp: string,
    public temp: number,
    public WeatherIcon: string
  ) {}
}
