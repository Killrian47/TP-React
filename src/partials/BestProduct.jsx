import ProductCard from "./ProductCard";

const BestProduct = ({productsForBestProduct}) => {

    let productsRating = [];
    productsForBestProduct.map((product) => {
        productsRating.push(product.rating);
    })
    let bestRate = Math.max(...productsRating);
    
    const theBestProduct = productsForBestProduct.filter((product) => {
        return product.rating === bestRate;
    })

    return (
        <>
            <div className="App-the-best-product">
                {theBestProduct.map((product) => {
                    return (
                    <ProductCard product={product}/>
                    )

                })}
            </div>
        </>
    );
};

export default BestProduct;