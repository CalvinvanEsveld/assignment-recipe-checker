import {
  Card,
  Image,
  Text,
  Center,
  CardBody,
  Flex,
  CardFooter,
  Heading,
  Stack,
  Tag,
  Divider,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  const cautions = item.cautions.map((item) => (
    <Tag bg={"red.100"}>{item}</Tag>
  ));

  const diet = item.dietLabels.map((item) => (
    <Tag padding={1} fontSize={"md"} size={"md"} bg={"green.100"}>
      {item}
    </Tag>
  ));

  return (
    <>
      <Center cursor={"pointer"} onClick={() => clickFn(item)}>
        <Card
          minW={"xs"}
          maxW={"xs"}
          maxH={"md"}
          minH={"md"}
          borderRadius={"lg"}
          bg={"white"}
          boxShadow="dark-lg"
        >
          <Image
            src={item.image}
            borderTopRadius={"lg"}
            width={"100%"}
            height={"200px"}
            objectFit={"cover"}
          />
          <Center>
            <Stack mt={2}>
              <Flex direction={"column"} align={"center"} gap={1}>
                <Text fontSize="lg"> {item.mealType}</Text>
                <Text
                  lineHeight={"100%"}
                  align={"center"}
                  fontWeight={"bold"}
                  fontSize={"xl"}
                  ml={2}
                  mr={2}
                >
                  {item.label}
                </Text>
                <Center mt={2} gap={2}>
                  {item.healthLabels.includes("Vegetarian") && (
                    <Tag bg={"purple.100"} fontSize={"md"}>
                      Vegetarian
                    </Tag>
                  )}
                  {item.healthLabels.includes("Vegan") && (
                    <Tag bg={"purple.100"} fontSize={"md"}>
                      Vegan
                    </Tag>
                  )}
                </Center>
                {item.dietLabels.length > 0 && (
                  <Center flexWrap={"wrap"} gap={2}>
                    {diet}
                  </Center>
                )}
                <Center textTransform="capitalize" gap={2} fontSize={"lg"}>
                  Dish: <Text fontWeight={"bold"}>{item.dishType}</Text>
                </Center>
                {item.cautions.length > 0 && (
                  <>
                    <Text>Cautions:</Text>{" "}
                    <Center flexWrap={"wrap"} gap={2}>
                      {cautions}
                    </Center>
                  </>
                )}
              </Flex>
            </Stack>
          </Center>
        </Card>
      </Center>
    </>
  );
};
