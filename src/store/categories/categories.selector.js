import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories; //reducer
};

export const selectCategories = createSelector(
  //input selector
  [selectCategoryReducer],
  //output selector
  (categoriesReducerSliceState) => {
    return categoriesReducerSliceState.categories;
  }
);
// createSelector() creates a memoized selector, 
// it doesn't fires unless the input selector changes

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories)=>{const categoriesMap = categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;}
)
