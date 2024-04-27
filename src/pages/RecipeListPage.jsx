import { Center, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeItemCard } from "./RecipeItemCard";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((item) => {
    const matchedRecipeLabels = item.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const matchedHealthLabels = item.recipe.healthLabels.some((item) => {
      return item.toLowerCase().includes(searchField.toLowerCase());
    });
    return matchedHealthLabels || matchedRecipeLabels;
  });

  return (
    <>
      <Box minHeight={"100vh"} bg={"blue.300"} >
        <Text
          align={"center"}
          fontWeight={"bold"}
          fontSize={"6xl"}
        >
          Recipe Checker
        </Text>
        <Center >
          <TextInput
            changeFn={handleChange}
            margin={4}
            width={{ base: "300px", lg: "400px" }}
            bg={"white"}
            placeholder="Type in recipe."
          />
        </Center>
        <Center>
          <SimpleGrid
            m={{ base: 0, lg: 10 }}
            columns={{ sm: 1, md: 2, xl: 4 }}
            gap={{ base: 3, md: 12 }}
          >
            {matchedRecipes.map((item) => (
              <RecipeItemCard
                item={item.recipe}
                key={item.label}
                clickFn={clickFn}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
};
