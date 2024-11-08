type Coordinates = {
  latitude: string;
  longitude: string;
};

type CoordinateProps = {
  coordinates: Coordinates[];
};

const StaticMap = ({ coordinates }: CoordinateProps) => {
  const generateMapUrl = (): string => {
    const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
    const zoom = 14;
    const size = "1200x200";
    const maptype = "roadmap";

    const markers = coordinates
      .map((coord, index) => {
        const markerIcon = `https://cdn-icons-png.flaticon.com/16/${index + 1}.png`;
        return `markers=icon:${encodeURIComponent(markerIcon)}|${coord.latitude},${coord.longitude}`;
      })
      .join("&");

    return `${baseUrl}?zoom=${zoom}&size=${size}&maptype=${maptype}&${markers}&key=${import.meta.env.YEXT_PUBLIC_STATIC_MAP_KEY}`;
  };

  return (
    <>
      <img className="w-full h-1/2" src={generateMapUrl()} alt="" />
    </>
  );
};

export default StaticMap;

// https://maps.googleapis.com/maps/api/staticmap?center=38.7882092,-89.9491142&zoom=14&size=600x200&maptype=roadmap&markers=color:red%7Clabel:LL%7C38.7882092,-89.9491142&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18

// https://maps.googleapis.com/maps/api/staticmap?center=52.446925,4.815730&zoom=10&size=600x600&maptype=roadmap&markers=icon:http://cdn2.iconfinder.com/data/icons/integers/60/number-one-32.png|52.373670, 4.896718&markers=icon:http://cdn2.iconfinder.com/data/icons/integers/60/number-two-32.png|52.489908, 4.658677&markers=icon:http://cdn2.iconfinder.com/data/icons/integers/60/number-three-32.png|52.553214, 4.673812&key=API_KEY

// https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=1200x200&maptype=roadmap&markers=size:tiny|icon:http%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fintegers%2F60%2Fnumber-1-32.png|38.788043,-89.948938&markers=size:tiny|icon:http%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fintegers%2F60%2Fnumber-2-32.png|38.7882092,-89.9491142&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18
