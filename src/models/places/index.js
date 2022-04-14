class Place {
  constructor(id, name, image, address, latitude, longitude) {
    this.id = id.toString();
    this.name = name;
    this.image = image;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export default Place;
