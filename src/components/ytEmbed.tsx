import { Box, AspectRatio, AspectRatioProps } from "@chakra-ui/react";

interface props extends AspectRatioProps {
  src: string;
}

const YTEmbed = ({ src, ...props }: props) => (
  <AspectRatio maxW="full" ratio={1} {...props} display="block">
    <Box
      as="iframe"
      title="naruto"
      src={"https://www.youtube.com/embed/" + src}
      allowFullScreen
    />
  </AspectRatio>
);

export default YTEmbed;
