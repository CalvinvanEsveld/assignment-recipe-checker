import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Card,
  Image,
  Text,
  Center,
  Flex,
  Box,
  IconButton,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const RecipeItemPage = ({ item, clickFn }) => {
  const cautions = item.cautions.map((item) => (
    <Tag size={"md"} m={1} bg={"red.100"}>
      {item}
    </Tag>
  ));

  const diet = item.dietLabels.map((item) => (
    <Tag size={"md"} m={1} bg={"green.100"}>
      {item}
    </Tag>
  ));

  const healthLabels = item.healthLabels.map((item) => (
    <Tag size={"md"} m={1} bg={"purple.100"}>
      {item}
    </Tag>
  ));

  const ingredients = item.ingredientLines.map((item) => <Text>{item}</Text>);

  return (
    <>
      <Center bg={"teal.200"} minHeight={"100vh"}>
        <Box
          borderRadius={5}
          width={{ base: "100%", lg: "40%" }}
          bg={"orange.50"}
        >
          <IconButton
            icon={<ArrowLeftIcon />}
            size={"sm"}
            width={"50px"}
            colorScheme="orange"
            onClick={() => clickFn()}
          ></IconButton>
          <Text fontSize={"5xl"} align={"center"}>
            {item.label}
          </Text>
          <Image
            src={item.image}
            width={"100%"}
            height={"300px"}
            objectFit={"cover"}
          />
          <SimpleGrid ml={8} mr={8} mt={2} mb={4} columns={{ base: 1, lg: 2 }}>
            <Box>
              <Text fontSize="lg"> {item.mealType}</Text>
              <Text
                mt={2}
                mr={2}
                lineHeight={1}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                {item.label}
              </Text>
              <Flex flexDirection={"row"} gap={1} mt={4}>
                <Text>Total cooking time:</Text>
                <Text fontWeight={"bold"}>{item.totalTime} Minutes</Text>
              </Flex>
              <Flex flexDirection={"row"} gap={1}>
                <Text>Servings: </Text>
                <Text fontWeight={"bold"}>{item.yield}</Text>
              </Flex>
              <Flex direction={"column"} gap={2}>
                <Text mt={4} fontWeight={"bold"}>
                  Ingredients:
                </Text>
                {ingredients}
              </Flex>
            </Box>

            <Box>
              <Text mt={2} fontWeight={"bold"}>
                Health labels:
              </Text>
              <Flex
                mt={2}
                direction={{ base: "column", lg: "row" }}
                flexWrap={"wrap"}
              >
                <Text>{healthLabels}</Text>
              </Flex>
              {item.dietLabels.length > 0 && (
                <Flex direction={"Column"}>
                  <Text fontWeight={"bold"} mt={4}>
                    Diet:
                  </Text>
                  <Text>{diet}</Text>
                </Flex>
              )}
              <Flex textTransform="capitalize" gap={2} fontSize={"lg"}>
                <Text mt={4} fontWeight={"bold"}>
                  Dish:
                </Text>
                <Text mt={4}>{item.dishType}</Text>
              </Flex>

              {item.cautions.length > 0 && (
                <Flex direction={"column"}>
                  <Text fontWeight={"bold"} mt={4}>
                    Cautions:
                  </Text>
                  <Flex>{cautions}</Flex>
                </Flex>
              )}
              <TableContainer>
                <Text fontWeight={"bold"} mt={4}>
                  Total Nutrients:
                </Text>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Nutrients</Th>
                      <Th>Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Calories</Td>
                      <Td>{Math.round(item.calories)}</Td>
                    </Tr>
                    <Tr>
                      <Td>Carbs</Td>
                      <Td>
                        {Math.round(item.totalNutrients.CHOCDF.quantity)} g
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Protein</Td>
                      <Td>
                        {Math.round(item.totalNutrients.PROCNT.quantity)} g
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Fat</Td>
                      <Td>{Math.round(item.totalNutrients.FAT.quantity)} g</Td>
                    </Tr>
                    <Tr>
                      <Td>Cholesterol</Td>
                      <Td>
                        {Math.round(item.totalNutrients.CHOLE.quantity)} mg
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Sodium</Td>
                      <Td>{Math.round(item.totalNutrients.NA.quantity)} mg</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
};
