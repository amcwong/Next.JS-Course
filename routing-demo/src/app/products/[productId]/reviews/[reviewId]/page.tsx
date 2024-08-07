import { notFound } from "../../../../../../node_modules/next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
    if(parseInt(params.reviewId) > 1000) {
        return notFound();
    }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
