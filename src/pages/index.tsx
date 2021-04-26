import {
  Box,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { MainSlider } from "../components/MainSlider";

export default function Home() {
  const mobileBanner = "/images/banner-mobile.png";
  const desktopBanner = "/images/banner.png";

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Header />
      <Image
        width="100%"
        src={isMobile ? mobileBanner : desktopBanner}
        alt="banner-principal"
      />
      <Flex
        as="section"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <SimpleGrid
          columns={[2, 3, 5]}
          spacing={5}
          width={["100%", "100%", "100%", 1240]}
          height={[340, 200, 145]}
          flexDirection="row"
          justifyContent="space-between"
          marginTop={81}
          paddingRight={[5, 5, 10, 40]}
          paddingLeft={[5, 5, 10, 40]}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
          >
            <Image
              width={[10, 35, 85]}
              height={[10, 35, 85]}
              marginBottom="2"
              src="/images/cocktail.svg"
              alt="vida noturna"
            />
            <p>vida noturna</p>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
          >
            <Image
              width={[10, 35, 85]}
              height={[10, 35, 85]}
              marginBottom="2"
              src="/images/surf.svg"
              alt="praia"
            />
            <p>praia</p>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
          >
            <Image
              width={[10, 35, 85]}
              height={[10, 35, 85]}
              marginBottom="2"
              src="/images/building.svg"
              alt="moderno"
            />
            <p>moderno</p>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
          >
            <Image
              width={[10, 35, 85]}
              height={[10, 35, 85]}
              marginBottom="2"
              src="/images/museum.svg"
              alt="clássico"
            />
            <p>clássico</p>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
          >
            <Image
              width={[10, 35, 85]}
              height={[10, 35, 85]}
              marginBottom="2"
              src="/images/earth.svg"
              alt="e mais..."
            />
            <p>e mais...</p>
          </Box>
        </SimpleGrid>
        <Divider
          width={90}
          borderColor="gray.600"
          border={1}
          mrginTop={80}
          marginBottom={50}
        />
        <Text fontSize="3xl" fontWeight="500">
          Vamos nessa?
        </Text>
        <br />
        <Text
          fontSize="3xl"
          fontWeight="500"
          marginBottom={30}
          paddingX={[10, 0]}
          textAlign="center"
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <MainSlider />
    </Flex>
  );
}
