import ProductCard from "./ProductCard";

const PublishedProduct = ({productsForPublishedProduct}) => {
    
    const publishedProducts = productsForPublishedProduct.filter((product) => {
        return product.isPublished == true;
    });
    
    const fiveLastPublishedProdcuts = publishedProducts.slice(-5);
    
    return (
        <>
        <h2 className="App-published-products-title">Les produits publiés</h2>
        <div className="App-products-card">
            {fiveLastPublishedProdcuts.map((product) => {
                return (
                    <ProductCard product={product}/>
                )
            })}
        </div>
            
        </>
    )
};

export default PublishedProduct;