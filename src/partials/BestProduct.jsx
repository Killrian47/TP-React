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
            <h2 className="App-the-best-product-title">Le meilleur produit</h2>
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