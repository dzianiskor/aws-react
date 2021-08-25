import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  image?: string,
  description: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  image: Yup.string(),
  description: Yup.string(),
  price: Yup.number().required(),
});
