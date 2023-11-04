import { createContext, useReducer, useEffect } from "react";
import { getCategoriesAndCollections } from "../utils/firebase/firebase.utils.js";
import { createAction } from "../utils/reducer/reducer.utils.js";
// This is one time data upload to the firestore database.
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

export const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categoriesMap: payload };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );
  const setCategories = (categories) => {
    dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories));
  };
  // This is a one-time operation to add the SHOP_DATA to the firestore database.
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndCollections();
      setCategories(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
