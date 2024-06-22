// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Adminregconsole, UserSideInterfaceOutputs, CartProduct, Productitems, Product, Blog, Post, Comment } = initSchema(schema);

export {
  Adminregconsole,
  UserSideInterfaceOutputs,
  CartProduct,
  Productitems,
  Product,
  Blog,
  Post,
  Comment
};