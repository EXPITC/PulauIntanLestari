"use client";

import Products, { products } from "./product";

const randomList: products = [
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/04/PRODUCT_9A.jpg",
    link: "/azure-jacquard",
    name: "azure jacquard",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/04/PRODUCT_8A.jpg",
    link: "/drop-needle",
    name: "drop needle",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_6A.jpg",
    link: "/teverde-jersey",
    name: "teverde jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_1A.jpg",
    link: "/tange-red-jersey",
    name: "tange red jersey",
  },
];

const RandomProduct = ({ variant2 }: { variant2: boolean }) => (
  <>
    <Products
      products={randomList}
      sectionTitle={variant2 ? "Other Products" : "Our Products"}
    />
  </>
);

export default RandomProduct;
