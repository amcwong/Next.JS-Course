import { Metadata } from "next";

// or just this
// export const generateMetadata = (params: { productId: string }): Metadata => {
//   return { title: `Product ${params.productId}` };
// };

// Generating dynamic meta data with promises
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return Promise.resolve({ title: `Product ${title}` });
};

type Props = { params: { productId: string } };

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product {params.productId}</h1>;
}

// Every page in the app router recieves route parameters as a props.
// Here we destructure it as params.
