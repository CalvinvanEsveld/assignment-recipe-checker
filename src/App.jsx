import React, { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      {selectedItem ? (
        <RecipeItemPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipeListPage clickFn={setSelectedItem} />
      )}
    </>
  );
};
