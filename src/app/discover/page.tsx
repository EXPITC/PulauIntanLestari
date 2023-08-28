"use client";

import ArticleCard, { articleCard } from "@/components/articleCard";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const articles: articleCard[] = [
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/05/Unveiling-the-Strength-and-Durability-of-Circular-Knit-Fabric-thumbnail.jpg",
    title: "Unveiling the Strength and Durability of Circular Knit Fabric",
    summary:
      "Clothes are not just a source of comfort and fashion but also a reflection of how smart we are in choosing the suitable fabric for a particular climate and purpose. There are endless fabrics available…",
    link: "/unveiling-the-strength-and-durability-of-circular-knit-fabric",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/03/pulauintanlestari.com-enhance-yarn-quality-through-material-blending-cover.jpg",
    title: "Enhance Yarn Quality Through Material Blending",
    summary:
      "Every yarn material comes with different feel and characteristics that make them suitable for different purposes and applications. This difference is caused by different fibers that are used in yarn production…",
    link: "/enhance-yarn-quality-through-material-blending",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-whats-new-in-textile-technology-cover.jpg",
    title: "What’s New in Textile Technology?",
    summary:
      "New technology is constantly being developed and adopted across a wide range of business fields. In fact, many industries are actively investing in research and development to stay ahead of their competitors and take…",
    link: "/whats-new-in-textile-technology",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-what-is-a-computerized-jacquard-cover.jpg",
    title: "What is Computerized Jacquard?",
    summary:
      "Computerized jacquard is a textile technique to make patterned fabric with a complex pattern on it. Computerized terms refer to electronic features to automatically control the machine…",
    link: "/what-is-computerized-jacquard",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-understand-about-fabric-weight-cover.jpg",
    title: "Understand About Fabric Weight",
    summary:
      "In the textile, fabric weight can be measured in GSM (grams per square meter) or OZ (ounces per square yard). OZ is commonly used in the United States, while GSM is more popular everywhere…",
    link: "/understand-about-fabric-weight",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-what-is-a-double-face-flat-knit-cover.jpg",
    title: "What is Double Face Flat Knit?",
    summary:
      "Double face flat knit is a kind of flat knit with two sides that looks different, it can be made from a different kind of flat knit technique like plain…",
    link: "/what-is-double-face-flat-knit",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-challenges-for-the-textile-industry-in-2023-cover.jpg",
    title: "Challenges for the Textile Industry in 2023",
    summary:
      "From a Bloomberg article about the economy, there is research that says 2023 it’s likely the world economy will face…",
    link: "/challenges-for-the-textile-industry-in-2023",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/01/pulauintanlestari.com-sustainability-initiative-from-fashion-brands-cover.jpg",
    title: "Sustainability Initiative from Fashion Brands",
    summary:
      "Fashion industry is one of the most polluting industries besides the oil and gas sector, a fact that cannot be denied…",
    link: "/sustainability-initiative-from-fashion-brands",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/01/pulauintanlestari.com-what-is-fabric-finishing-cover.jpg",
    title: "What is Fabric Finishing?",
    summary:
      "Fabric finishing can be explained as the process to improve the appearance and quality of the fabric. Based on the technique…",
    link: "/what-is-fabric-finishing",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/05/Unveiling-the-Strength-and-Durability-of-Circular-Knit-Fabric-thumbnail.jpg",
    title: "Unveiling the Strength and Durability of Circular Knit Fabric",
    summary:
      "Clothes are not just a source of comfort and fashion but also a reflection of how smart we are in choosing the suitable fabric for a particular climate and purpose. There are endless fabrics available…",
    link: "/unveiling-the-strength-and-durability-of-circular-knit-fabric",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/03/pulauintanlestari.com-enhance-yarn-quality-through-material-blending-cover.jpg",
    title: "Enhance Yarn Quality Through Material Blending",
    summary:
      "Every yarn material comes with different feel and characteristics that make them suitable for different purposes and applications. This difference is caused by different fibers that are used in yarn production…",
    link: "/enhance-yarn-quality-through-material-blending",
  },
  {
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2023/02/pulauintanlestari.com-whats-new-in-textile-technology-cover.jpg",
    title: "What’s New in Textile Technology?",
    summary:
      "New technology is constantly being developed and adopted across a wide range of business fields. In fact, many industries are actively investing in research and development to stay ahead of their competitors and take…",
    link: "/whats-new-in-textile-technology",
  },
];

const Discover = () => {
  return (
    <Grid
      w="full"
      py="4"
      gap="2"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
    >
      {articles.map((a, i) => (
        <GridItem key={i}>
          <Flex align="center" justify="center" py="1">
            <ArticleCard {...a} />
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Discover;
