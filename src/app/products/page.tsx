"use client";

import Products from "@/components/product";
import listProduct from "@/libs/dataRaw/products";

const ProductsPage = () => (
  <Products
    products={listProduct}
    sectionTitle="Products Catalog"
    page={true}
  />
);

export default ProductsPage;
