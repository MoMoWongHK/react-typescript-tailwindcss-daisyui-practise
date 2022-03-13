export interface Position {
  lat: number
  lng: number
}

class Shop {
  shopName: string
  shopDescription: string
  position: Position
  address: string
  floor: number
  shopId: string

  // eslint-disable-next-line max-params
  constructor(
    shopName: string,
    shopDescription: string,
    position: Position,
    address: string,
    floor: number,
    shopId: string
  ) {
    this.shopName = shopName
    this.shopDescription = shopDescription
    this.position = position
    this.address = address
    this.floor = floor
    this.shopId = shopId
  }
}

export default Shop
