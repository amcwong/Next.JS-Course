import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
      <Link href={`/products/${productId}`}>Product {productId}</Link>
      <Link href="/">Home</Link>
    </>
  );
}
