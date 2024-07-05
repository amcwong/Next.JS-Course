export default function ProductDetails({ params }) {
  return <h1>Details about product {params.productId}</h1>;
}

// Every page in the app router recieves route parameters as a props.
// Here we destructure it as params.

