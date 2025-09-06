import { ProductActionType } from "@/types/ProductActionTypes";
import { Brand, Category, MostRequestedProduct, ProductWithOffer } from "@/types/database.types";

type SetLoadingAction = {
  type: ProductActionType.SET_LOADING;
  payload: boolean;
};

type SetErrorAction = {
  type: ProductActionType.SET_ERROR;
  payload: string | null;
};

type SetProductsAction = {
  type: ProductActionType.SET_PRODUCTS;
  payload: ProductWithOffer[];
};

type SetCategoriesAction = {
  type: ProductActionType.SET_CATEGORIES;
  payload: Category[];
};

type SetBrandsAction = {
  type: ProductActionType.SET_BRANDS;
  payload: Brand[];
};

type SetMostRequestedAction = {
  type: ProductActionType.SET_MOST_REQUESTED;
  payload: MostRequestedProduct[];
};

type AddProductAction = {
  type: ProductActionType.ADD_PRODUCT;
  payload: ProductWithOffer;
};

type UpdateProductAction = {
  type: ProductActionType.UPDATE_PRODUCT;
  payload: ProductWithOffer;
};

type RemoveProductAction = {
  type: ProductActionType.REMOVE_PRODUCT;
  payload: string; // id
};

type AddCategoryAction = {
  type: ProductActionType.ADD_CATEGORY;
  payload: Category;
};

type UpdateCategoryAction = {
  type: ProductActionType.UPDATE_CATEGORY;
  payload: Category;
};

type RemoveCategoryAction = {
  type: ProductActionType.REMOVE_CATEGORY;
  payload: string; // id
};

type AddBrandAction = {
  type: ProductActionType.ADD_BRAND;
  payload: Brand;
};

type UpdateBrandAction = {
  type: ProductActionType.UPDATE_BRAND;
  payload: Brand;
};

type RemoveBrandAction = {
  type: ProductActionType.REMOVE_BRAND;
  payload: string; // id
};

export type ProductAction =
  | SetLoadingAction
  | SetErrorAction
  | SetProductsAction
  | SetCategoriesAction
  | SetBrandsAction
  | SetMostRequestedAction
  | AddProductAction
  | UpdateProductAction
  | RemoveProductAction
  | AddCategoryAction
  | UpdateCategoryAction
  | RemoveCategoryAction
  | AddBrandAction
  | UpdateBrandAction 
  | RemoveBrandAction;