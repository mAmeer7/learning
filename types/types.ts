// To parse this data:
//
//   import { Convert, Foj98TdR7Wbo6Vsq5HBWQQiMR3U6QFJBPq7N0KCCSTYs } from "./file";
//
//   const foj98TdR7Wbo6Vsq5HBWQQiMR3U6QFJBPq7N0KCCSTYs = Convert.toFoj98TdR7Wbo6Vsq5HBWQQiMR3U6QFJBPq7N0KCCSTYs(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ReciperRes {
    recipes: Recipe[];
    total:   number;
    skip:    number;
    limit:   number;
}

export interface Recipe {
    id:                 number;
    name:               string;
    ingredients:        string[];
    instructions:       string[];
    prepTimeMinutes:    number;
    cookTimeMinutes:    number;
    servings:           number;
    difficulty:         string;
    cuisine:            string;
    caloriesPerServing: number;
    tags:               string[];
    userId:             number;
    image:              string;
    rating:             number;
    reviewCount:        number;
    mealType:           string[];
}

