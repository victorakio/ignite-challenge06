import {
  Flex,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface SliderItemProps extends ChakraLinkProps {
  image: string;
  link: string;
  title: string;
  subtitle: string;
}

export function SliderItem({ image, link, title, subtitle }: SliderItemProps) {
  return (
    <Flex
      width="100%"
      height="450px"
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      textAlign="center"
      _hover={{
        filter: "brightness(0.8)",
      }}
    >
      <Link
        href={link}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        _hover={{ textDecoration: "none" }}
      >
        <a>
          <Text color="gray.50" fontSize="48" fontWeight="700">
            {title}
          </Text>
          <Text color="gray.50" fontSize="24" fontWeight="700">
            {subtitle}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
