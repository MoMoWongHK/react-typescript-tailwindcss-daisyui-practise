import { PRODUCT_CATEGORY } from "../Enum/PRODUCT_CATEGORY"

class Product {
  title: string
  description: string
  shopId: string
  price: number
  discount: number
  category: PRODUCT_CATEGORY

  // eslint-disable-next-line max-params
  constructor(
    title: string,
    description: string,
    shopId: string,
    price: number,
    discount: number,
    category: PRODUCT_CATEGORY
  ) {
    this.title = title
    this.description = description
    this.shopId = shopId
    this.price = price
    this.discount = discount
    this.category = category
  }
}

export default Product
