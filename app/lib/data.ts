import { Product, User } from "./models";
import { IProduct, IUser } from "./types";
import { connectToDB } from "./utils";

interface Card {
  id: number;
  title: string;
  number: number;
  change: number;
}

export const fetchUsers = async (
  q: string,
  page: number
): Promise<{ count: number; users: IUser[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string): Promise<IUser> => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (
  q: string,
  page: number
): Promise<{ count: number; products: IProduct[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id: string): Promise<IProduct> => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch product!");
  }
};

export const cards: Card[] = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
