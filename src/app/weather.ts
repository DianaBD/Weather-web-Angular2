// vremea (cu toate detaliile) dintr-o singura locatie
export interface Weather {
    id: number;
    name: string;
    coord: {
      lon: number,
      lat: number
    };
    main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number
    };
    dt: number;
    wind: {
        speed: number,
        deg: number
    };
    rain: Object;
    clouds: {
        all: number
    };
    weather: [Object]
  }