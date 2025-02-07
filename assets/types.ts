export type Product = {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
  picture: string;
  category: ProductCategory;
};

export type ProductCategory = "CARS" | "ELECTRONIC" | "FOOD" | "CLOTHING";
