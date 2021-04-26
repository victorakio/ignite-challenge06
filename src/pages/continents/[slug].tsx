import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { RiInformationLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface City {
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface Continent {
  name: string;
  description: string;
  countries: string;
  languages: string;
  cities100: string;
  banner: string;
  cities: City[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Europa({ continent }: ContinentProps) {
  return (
    <Flex flexDirection="column">
      <Header />
      <Flex
        width="100%"
        height={["250px", "500px"]}
        backgroundImage={`url(${continent.banner})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Text
          as="h1"
          color="gray.50"
          fontSize="48"
          fontWeight="600"
          width="100%"
          alignSelf="end"
          padding={["50px", "88px"]}
        >
          {continent.name}
        </Text>
      </Flex>
      <Flex
        as="section"
        flexDirection={["column", "column", "column", "row"]}
        width={[343, 600, 750, 1240]}
        alignSelf="center"
        justifyContent="space-between"
        marginTop="55"
        marginBottom="55"
        paddingLeft={[2, 10]}
        paddingRight={[2, 10]}
      >
        <Text width={[80, 600]} fontSize={[14, 24]} lineHeight={[2, 10]}>
          {continent.description}
        </Text>
        <Flex
          flexDirection="row"
          width={[80, 490]}
          justifyContent="space-between"
          alignItems="center"
          marginTop={[10, 10, 10, 0]}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            fontWeight="600"
          >
            <Text color="yellow.100" fontSize={[25, 30, 48]}>
              {continent.countries}
            </Text>
            <Text fontWeight="600" fontSize={[15, 20, 24]}>
              países
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            fontWeight="600"
          >
            <Text color="yellow.100" fontSize={[25, 30, 48]}>
              {continent.languages}
            </Text>
            <Text fontWeight="600" fontSize={[15, 20, 24]}>
              línguas
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            fontWeight="600"
          >
            <Text color="yellow.100" fontSize={[25, 30, 48]}>
              {continent.cities100}
            </Text>
            <Text
              fontWeight="600"
              fontSize={[15, 20, 24]}
              display="flex"
              alignItems="center"
            >
              cidades +100
              <Icon
                as={RiInformationLine}
                fontSize="15px"
                color="gray.300"
                marginLeft="1"
              />
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignSelf="center"
        width={[343, 600, 750, 1240]}
        paddingLeft={[5, 10]}
        paddingRight={[5, 10]}
      >
        <Text as="h2" fontSize={36} fontWeight="500" marginBottom="40px">
          Cidades +100
        </Text>
        <SimpleGrid width="100%" columns={[1, 2, 3, 4]} spacing={[5, 10]}>
          {continent.cities.map((city) => (
            <Box marginBottom="48px" key={city.name}>
              <Image
                src={city.image}
                alt={city.name}
                width={["100%", "256"]}
                height="173"
                objectFit="cover"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
              />
              <Flex
                flexDirection="row"
                alignItems="center"
                padding="24px"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="yellow.100"
                justifyContent="space-between"
                borderTop="none"
                borderBottomRadius="5px"
              >
                <Flex flexDirection="column">
                  <Text>{city.name}</Text>
                  <Text>{city.country}</Text>
                </Flex>
                <Image
                  src={city.flag}
                  alt={city.country}
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/continents");

  const paths = data.map((continent) => {
    return {
      params: {
        slug: continent.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/continents?slug=${slug}`);

  const continent = {
    name: data[0].name,
    description: data[0].description,
    countries: data[0].countries,
    languages: data[0].languages,
    cities100: data[0].cities100,
    banner: data[0].banner,
    cities: data[0].cities,
  };

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
