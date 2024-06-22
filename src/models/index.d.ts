import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerAdminregconsole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Adminregconsole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Mac_id?: string | null;
  readonly Unique_id: string;
  readonly Password: string;
  readonly Manu_date?: string | null;
  readonly Min_price?: number | null;
  readonly Max_price: number;
  readonly Product_status?: boolean | null;
  readonly Encripted_code?: string | null;
  readonly user_sub?: string | null;
  readonly activity_status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminregconsole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Adminregconsole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Mac_id?: string | null;
  readonly Unique_id: string;
  readonly Password: string;
  readonly Manu_date?: string | null;
  readonly Min_price?: number | null;
  readonly Max_price: number;
  readonly Product_status?: boolean | null;
  readonly Encripted_code?: string | null;
  readonly user_sub?: string | null;
  readonly activity_status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Adminregconsole = LazyLoading extends LazyLoadingDisabled ? EagerAdminregconsole : LazyAdminregconsole

export declare const Adminregconsole: (new (init: ModelInit<Adminregconsole>) => Adminregconsole) & {
  copyOf(source: Adminregconsole, mutator: (draft: MutableModel<Adminregconsole>) => MutableModel<Adminregconsole> | void): Adminregconsole;
}

type EagerUserSideInterfaceOutputs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSideInterfaceOutputs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Unique_id: string;
  readonly Service_Req?: string[] | null;
  readonly Name: string;
  readonly Phone_no: number;
  readonly Address?: string | null;
  readonly City?: string | null;
  readonly Pin_code: number;
  readonly Country: string;
  readonly userSub: string;
  readonly Adminregconsole?: Adminregconsole | null;
  readonly Product_id?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSideInterfaceOutputsAdminregconsoleId?: string | null;
}

type LazyUserSideInterfaceOutputs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSideInterfaceOutputs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Unique_id: string;
  readonly Service_Req?: string[] | null;
  readonly Name: string;
  readonly Phone_no: number;
  readonly Address?: string | null;
  readonly City?: string | null;
  readonly Pin_code: number;
  readonly Country: string;
  readonly userSub: string;
  readonly Adminregconsole: AsyncItem<Adminregconsole | undefined>;
  readonly Product_id?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSideInterfaceOutputsAdminregconsoleId?: string | null;
}

export declare type UserSideInterfaceOutputs = LazyLoading extends LazyLoadingDisabled ? EagerUserSideInterfaceOutputs : LazyUserSideInterfaceOutputs

export declare const UserSideInterfaceOutputs: (new (init: ModelInit<UserSideInterfaceOutputs>) => UserSideInterfaceOutputs) & {
  copyOf(source: UserSideInterfaceOutputs, mutator: (draft: MutableModel<UserSideInterfaceOutputs>) => MutableModel<UserSideInterfaceOutputs> | void): UserSideInterfaceOutputs;
}

type EagerCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly wishlist?: boolean | null;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartProductProductId?: string | null;
}

type LazyCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly wishlist?: boolean | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartProductProductId?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}

type EagerProductitems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Productitems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price?: number | null;
  readonly oldPrice?: number | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly options?: (string | null)[] | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductitems = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Productitems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price?: number | null;
  readonly oldPrice?: number | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly options?: (string | null)[] | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Productitems = LazyLoading extends LazyLoadingDisabled ? EagerProductitems : LazyProductitems

export declare const Productitems: (new (init: ModelInit<Productitems>) => Productitems) & {
  copyOf(source: Productitems, mutator: (draft: MutableModel<Productitems>) => MutableModel<Productitems> | void): Productitems;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly water_quantity?: number | null;
  readonly tds_registered?: number | null;
  readonly Ph_reg?: number | null;
  readonly user_sub?: string | null;
  readonly Adminregconsole?: Adminregconsole | null;
  readonly Product_id: string;
  readonly Sold_Price?: number | null;
  readonly Sold_Date?: string | null;
  readonly Status?: boolean | null;
  readonly Product_TDS_condition?: (string | null)[] | null;
  readonly Product_Water_condition?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productAdminregconsoleId?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly water_quantity?: number | null;
  readonly tds_registered?: number | null;
  readonly Ph_reg?: number | null;
  readonly user_sub?: string | null;
  readonly Adminregconsole: AsyncItem<Adminregconsole | undefined>;
  readonly Product_id: string;
  readonly Sold_Price?: number | null;
  readonly Sold_Date?: string | null;
  readonly Status?: boolean | null;
  readonly Product_TDS_condition?: (string | null)[] | null;
  readonly Product_Water_condition?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productAdminregconsoleId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Blog | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}