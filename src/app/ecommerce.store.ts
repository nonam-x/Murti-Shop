import { computed, inject } from '@angular/core';
import { product } from './models/products';
import { CartItemsModal } from './models/cartModal';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap, switchMap } from 'rxjs/operators';

import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Product } from './components/product/product';
import Wishlist from './pages/wishlist/wishlist';
import { Toaster } from './sevices/toaster';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { SignInDialog } from './components/sign-in-dialog/sign-in-dialog';
import { SignInParams, SignUpParams, User } from './models/user';
import { Router } from '@angular/router';
import { Order } from './models/order';
import { promises } from 'dns';
import { resolve } from 'path';
import { withStorageSync } from '@angular-architects/ngrx-toolkit';

export type EcommerceState = {
  products: product[];
  category: string;
  vendor: string;
  wishlistItems: product[];
  cartItems: CartItemsModal[];
  loading: boolean;
  error: string | null;
  user: User | undefined;
  selectedProductId: string | undefined;
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },

  // initial stats or values
  withState({
    // initial Satats or values of the singnals(variables)

    // products
    products: [
      {
        id: '1',
        name: 'Classic White T-Shirt',
        description: 'Premium cotton t-shirt with a comfortable fit',
        price: 599,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        rating: 4.5,
        inStock: true,
        category: 't-shirts',
        vendor: 'kartik',
      },
      {
        id: '2',
        name: 'Denim Blue Jeans',
        description: 'Stylish slim-fit jeans with stretch comfort',
        price: 1499,
        imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
        rating: 4.7,
        inStock: true,
        category: 'jeans',
        vendor: 'ravi singh',
      },
      {
        id: '3',
        name: 'Black Hoodie',
        description: ' Perfect for cold weather.',
        price: 1299,
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
        rating: 4.8,
        inStock: true,
        category: 'hoodies',
        vendor: 'Kumar Viswash',
      },
      {
        id: '4',
        name: 'Formal Shirt Blue',
        description: 'Professional formal shirt with wrinkle-free',
        price: 899,
        imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
        rating: 4.3,
        inStock: true,
        category: 'shirts',
        vendor: 'Adarsh',
      },
      {
        id: '5',
        name: 'Leather Jacket Brown',
        description: 'Genuine leather jacket with premium finish',
        price: 3999,
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        rating: 4.9,
        inStock: false,
        category: 'jackets',
        vendor: 'kartik',
      },
      {
        id: '6',
        name: 'Graphic Print T-Shirt',
        description: 'Trendy graphic t-shirt comfortable fit.',
        price: 699,
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500',
        rating: 4.4,
        inStock: true,
        category: 't-shirts',
        vendor: 'ravi singh',
      },
      {
        id: '7',
        name: 'Black Skinny Jeans',
        description: 'Modern skinny fit jeans with stretch',
        price: 1699,
        imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500',
        rating: 4.6,
        inStock: true,
        category: 'jeans',
        vendor: 'Kumar Viswash',
      },
      {
        id: '8',
        name: 'Grey Zip Hoodie',
        description: 'Premium hoodie with soft fleece lining',
        price: 1599,
        imageUrl: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500',
        rating: 4.7,
        inStock: true,
        category: 'hoodies',
        vendor: 'Adarsh',
      },
      {
        id: '9',
        name: 'Checkered Casual Shirt',
        description: 'Stylish checkered pattern shirt for casual outings',
        price: 799,
        imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        rating: 4.2,
        inStock: true,
        category: 'shirts',
        vendor: 'kartik',
      },
      {
        id: '10',
        name: 'Bomber Jacket Olive',
        description: 'Military-inspired Lightweight and stylish.',
        price: 2499,
        imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
        rating: 4.8,
        inStock: true,
        category: 'jackets',
        vendor: 'ravi singh',
      },
      {
        id: '1',
        name: 'Classic White T-Shirt',
        description: 'Premium cotton basic tee with a relaxed fit.',
        price: 699,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        rating: 4.5,
        inStock: true,
        category: 't-shirts',
        vendor: 'kartik',
      },
      {
        id: '2',
        name: 'Black Crew Neck T-Shirt',
        description: 'Essential wardrobe staple in pure cotton.',
        price: 649,
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
        rating: 4.7,
        inStock: true,
        category: 't-shirts',
        vendor: 'ravi singh',
      },
      {
        id: '3',
        name: 'Navy Blue Polo Shirt',
        description: 'Classic polo with button collar and short sleeves.',
        price: 1299,
        imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99',
        rating: 4.3,
        inStock: true,
        category: 't-shirts',
        vendor: 'ravi singh',
      },

      {
        id: '5',
        name: 'Graphic Print T-Shirt',
        description: 'Trendy graphic design on soft cotton fabric.',
        price: 799,
        imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
        rating: 4.2,
        inStock: false,
        category: 't-shirts',
        vendor: 'Adarsh',
      },
      {
        id: '6',
        name: 'Grey Hoodie',
        description: 'Cozy pullover hoodie with kangaroo pocket.',
        price: 1599,
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
        rating: 4.8,
        inStock: true,
        category: 'hoodies',
        vendor: 'Adarsh',
      },
      {
        id: '7',
        name: 'Striped Casual Shirt',
        description: 'Button-down shirt with vertical stripes.',
        price: 1499,
        imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
        rating: 4.4,
        inStock: true,
        category: 'shirts',
        vendor: 'Adarsh',
      },
      {
        id: '8',
        name: 'Black Leather Jacket',
        description: 'Premium faux leather biker jacket.',
        price: 3999,
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
        rating: 4.9,
        inStock: true,
        category: 'jackets',
        vendor: 'Adarsh',
      },
    ],
    // category
    category: 'all',
    vendor: 'all',
    wishlistItems: [],
    cartItems: [],
    loading: false,
    error: null,
    user: undefined,
    selectedProductId: undefined,
  } as EcommerceState),

  // localStorage save
  // withStorageSync({key: 'modern-store' , select: ({ wishlistItems, cartItems , user}) => ({wishlistItems, cartItems , user})}),

  // computed Signals (dirived from other signals)
  withComputed(({ category, products, wishlistItems, cartItems, vendor, selectedProductId }) => ({
    // filteredProducts: computed(() => {
    //   if (category() === 'all') return products();
    //   return products().filter((p) => p.category === category().toLocaleLowerCase());
    // }),

    selectedProduct: computed(() => products().find((p) => p.id === selectedProductId())),

    filteredProducts: computed(() => {
      let filtered = products();

      // Category filter (agar empty nahi hai)
      if (category()) {
        filtered = filtered.filter((p) => p.category.toLowerCase() === category().toLowerCase());
      }

      // Vendor filter (agar empty nahi hai)
      if (vendor()) {
        filtered = filtered.filter((p) => p.vendor.toLowerCase() === vendor().toLowerCase());
      }

      return filtered;
    }),

    //product by vendor names
    // filteredProductsVendor: computed(() => {
    //   if (vendor() === 'all') return products();
    //   return products().filter((p) => p.vendor === vendor().toLocaleLowerCase());
    // }),
    wishlistCount: computed(() => wishlistItems().length),

    cartItemCount: computed(() => cartItems().length),
  })),

  // methods (functions) for all the actions we ill create them here and use them into components
  withMethods(
    (store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({
      //  api calls

      // loadProduct: rxMethod<void>(
      //   pipe(
      //     tap(()=> store.patchState({ loading:true,error: null}) ),
      //     switchMap(()=> http.get)
      //   )
      // )

      setCategory: signalMethod<string>((cat: string) => {
        patchState(store, { category: cat });
      }),

      setProductId: signalMethod<string>((productId: string) => {
        patchState(store, { selectedProductId: productId });
      }),

      // vendor method added
      setVendor: signalMethod<string>((seller: string) => {
        patchState(store, { vendor: seller });
      }),

      clearFilters() {
        patchState(store, { category: '', vendor: '' });
      },
      // addToWishlist: (products: Product) => {
      //   const updatedWishlistItem = produce(store.wishlistItems(), (draft) => {
      //     if (draft.find((p) => p.id === products.id)) {
      //       draft.push(product);
      //     }
      //   })
      //   patchState(store,(wishlistItems: updatedWishlistItem));
      // }

      // function to add the product into wishlisht
      addToWishlist: (product: product) => {
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { wishlistItems: updatedWishlistItems });
        toaster.success('Product Added To Wishlist');
      },
      // function to remove the product from wishlisht
      removeFromWishlist(product: product) {
        patchState(store, {
          wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
        });
        toaster.success('Product Removed From Wishlist');
      },
      // function clear all the product from wishlisht
      clearWishlist() {
        patchState(store, { wishlistItems: [] });
      },

      addToCart: (product: product, quantity = 1) => {
        const existingItemIndex = store
          .cartItems()
          .findIndex((indexofcartitem) => indexofcartitem.product.id === product.id);
        const updatedCartItem = produce(store.cartItems(), (draft) => {
          if (existingItemIndex !== -1) {
            draft[existingItemIndex].quantity += quantity;
          }
          draft.push({
            product,
            quantity,
          });
        });

        patchState(store, { cartItems: updatedCartItem });
        toaster.success(existingItemIndex == -1 ? 'Product Added' : 'Product Added Again');
      },

      setItemQuantity(params: { productId: string; quantity: number }) {
        const index = store.cartItems().findIndex((c) => c.product.id === params.productId);
        const updated = produce(store.cartItems(), (draft) => {
          draft[index].quantity = params.quantity;
        });
        patchState(store, { cartItems: updated });
      },

      // moveTocart:(product: product) =>{
      // const updatedWishlistItems = store.wishlistItems().filter((p => p.product !== product.id));
      // const updatedCartItems = produce(store.cartItems(), (draft)=>{
      //   if (!draft.find(p => p.id === product.id)){
      //     draft.push(product)
      //   }
      // });

      // patchState(store, {cartItems:updatedCartItems, wishlistItems:updatedWishlistItems})

      // },

      clearCart() {
        patchState(store, { cartItems: [] });
      },

      // move to wishlist and remove from cart

      moveToWishlist: (product: product) => {
        const updatedCartItems = store.cartItems().filter((p) => p.product.id !== product.id);
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { cartItems: updatedCartItems, wishlistItems: updatedWishlistItems });
      },

      removeFromCartItems: (product: product) => {
        patchState(store, {
          cartItems: store.cartItems().filter((c) => c.product.id !== product.id),
        });
      },
      //  after selecting product move to checout
      proceedToCheckout: () => {
        if (!store.user()) {
          matDialog.open(SignInDialog, {
            disableClose: true,
            data: {
              checkout: true,
            },
          });
          return;
        }
        router.navigate(['/checkout']);
      },

      placeOrder: async () => {
        // if (!router.url.includes('/order-success')) {
        //   return; // Early exit
        // }

        patchState(store, { loading: true });
        const user = store.user();
        if (!user) {
          toaster.error('please loging before placing the order');
          patchState(store, { loading: false });
          return;
        }

        const order: Order = {
          id: crypto.randomUUID(),
          userId: user.id,
          total: Math.round(
            store.cartItems().reduce((acc, item) => acc + item.quantity * item.product.price, 0)
          ),
          items: store.cartItems(),
          paymentStatus: 'success',
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));

        patchState(store, { loading: false, cartItems: [] });

        router.navigate(['order-success']);
      },

      //  after clickin on chekout sign in pagge if u did't sign in
      signIn: ({ email, password, checkout, dialogId }: SignInParams) => {
        patchState(store, {
          user: {
            id: '1',
            email: 'jone@gmail.com',
            name: 'jone',
            imageUrl: '/',
          },
        });
        matDialog.getDialogById(dialogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signUp: ({ email, password, name, checkout, dialogId }: SignUpParams) => {
        patchState(store, {
          user: {
            id: '1',
            email: 'jone@gmail.com',
            name: 'jone',
            imageUrl: '/',
          },
        });
        matDialog.getDialogById(dialogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      // optional sign out button on header
      signOut: () => {
        patchState(store, { user: undefined });
      },
    })
  )

  //
);
