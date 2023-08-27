"use client";

import Products, { products } from "@/components/Product";

const listProduct: products = [
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2XB-0286-1.jpg",
    link: "/oris-bowl",
    name: "oris-bowl",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2XE-0007-1.jpg",
    link: "/kikkou-jacquard",
    name: "kikkou jacquard",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2WL-0454-1.jpg",
    link: "/waffle-tuck",
    name: "waffle tuck",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2XD-0091-1.jpg",
    link: "/mesh-jacquard",
    name: "mesh-jacquard",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2YC-0186-1.jpg",
    link: "/kiiro-pinstripe",
    name: "kiiro pinstripe",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2WE-0008-1.jpg",
    link: "/deepmarine-jersey",
    name: "deepmarine jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2WB-0266-1.jpg",
    link: "/spacer-return",
    name: "spacer return",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2XL-0308-1.jpg",
    link: "/micro-jersey",
    name: "micro jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/2YA-0265-1.jpg",
    link: "/pinalime",
    name: "pinalime",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2UL-0040-1.jpg",
    link: "/rib-hole",
    name: "rib hole",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/3TD-4664-1.jpg",
    link: "/micro-pique",
    name: "micro pique",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2YA-0213-1.jpg",
    link: "/sunny-jersey",
    name: "sunny jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/3TD-4751-1-1.jpg",
    link: "/peachy-interlock-ii",
    name: "peachy interlock II",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2YA-0226-1.jpg",
    link: "/flexy-jersey",
    name: "flexy jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2YA-0206-1.jpg",
    link: "/berry-terry",
    name: "berry terry",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2XI-0187-1.jpg",
    link: "/single-hexagon",
    name: "single hexagon",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2XL-0142-1.jpg",
    link: "/mildew-mesh",
    name: "mildew mesh",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/06/2YA-0267-1.jpg",
    link: "/micro-lilac",
    name: "micro lilac",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_1A.jpg",
    link: "/tange-red-jersey",
    name: "tange red jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_2A.jpg",
    link: "/single-maze",
    name: "single maze",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_3A-1.jpg",
    link: "/horizon-lacoste",
    name: "horizon lacoste",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_4A.jpg",
    link: "/two-faced-crepe",
    name: "two faced crepe",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_5A.jpg",
    link: "/peachy-interlock",
    name: "peachy interlock",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_6A.jpg",
    link: "/teverde-jersey",
    name: "teverde jersey",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/04/PRODUCT_7A.jpg",
    link: "/chambray-lacoste",
    name: "chambray lacoste",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/04/PRODUCT_8A.jpg",
    link: "/drop-needle",
    name: "drop needle",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/04/PRODUCT_9A.jpg",
    link: "/azure-jacquard",
    name: "azure jacquard",
  },
];

const ProductsPage = () => (
  <Products
    products={listProduct}
    sectionTitle="Products Catalog"
    page={true}
  />
);

export { ProductsPage as default, listProduct };
