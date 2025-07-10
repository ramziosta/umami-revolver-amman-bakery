import NotFound from "./not-found";

export default async function ReviewDetails({params}:{params: Promise<{productId: string, reviewId:string}>}) {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 110){
        return <NotFound/>
    }
    return (
        <div>
            <h1>Product {productId}'s review {reviewId} details</h1>
        </div>
    );
}