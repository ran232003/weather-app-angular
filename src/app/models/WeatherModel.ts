export class Weather {
  public iconText: any;
  public favorite: any;
  constructor(
    public key: string,
    public city: string,
    public country: string,
    public minTemp: string,
    public maxTemp: string,
    public temp: number,
    public WeatherIcon: string
  ) {
    this.favorite = false;
  }
  setIconText(iconText: any) {
    this.iconText = iconText;
  }
  getIconText() {
    return this.iconText;
  }
  setFavorite(favorite: any) {
    this.favorite = favorite;
  }
  getFavorite() {
    return this.favorite;
  }
}
