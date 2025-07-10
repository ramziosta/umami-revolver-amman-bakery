export default async function ProductDetails({params}:{params: Promise<{productId:string}>}) {
    const productId = (await params).productId;
    return (
        <div>
            <h1>Product {productId} details</h1>
        </div>
    );
}