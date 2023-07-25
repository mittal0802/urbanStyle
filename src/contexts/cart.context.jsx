import { createContext, useEffect, useState, useContext } from "react";
import {
  UpdateDocument,
  onAuthStateChangedListener,
  getUserCartItems,
} from "../utils/firebase/firebase.utils";
import { UserContext } from "./user.context";

const addCartItem = (cartItems, productToAdd) => {
  //check for if item aleady exists in cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if item exists in cart, increase quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // if item exists in cart, decrease quantity by 1
  if (existingCartItem.quantity === 1) {
    return deleteCartItem(cartItems, productToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  deleteItemFromCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const { currentUser } = useContext(UserContext);

  //update cart count when cart items change
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //get cart items from firebase on user login
  useEffect(() => {
    const getCartItems = async () => {
      if (currentUser) {
        const userCartItems = await getUserCartItems("users", currentUser.uid);
        setCartItems(userCartItems);
      }
    };
    getCartItems();
  }, [currentUser]);

  //update cart items in firebase when cart items change
  useEffect(() => {
    if (currentUser) UpdateDocument("users", currentUser.uid, { cartItems });
  }, [cartItems]);

  //update cart total when cart items change
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  //clear cart items when user logs out as cart items are stored in firebase and user cannot add items when signed out
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        setCartItems([]);
      }
    });
    return unsubscribe;
  }, []);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    deleteItemFromCart,
    removeItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
