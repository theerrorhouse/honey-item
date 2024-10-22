import productsData from "../public/products.json";

export function getProducts() {
  return productsData.products;
}

export function getProductById(id: number) {
  return productsData.products.find((product) => product.id === id);
}
