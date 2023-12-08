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
                    <div className="App-product-card">
                        <h3 className="App-product-title">{product.title}</h3>
                        <p className="App-product-price">Prix : {product.price}</p>
                        <p className="App-product-rating">Sa note : {product.rating}</p>
                    </div>
                )
            })}
        </div>
            
        </>
    )
};

export default PublishedProduct;