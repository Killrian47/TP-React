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
                        <div className="App-best-product-card">
                            <h3 className="App-product-title">{product.title}</h3>
                            <p className="App-product-price">Prix : {product.price}</p>
                            <p className="App-product-rating">Sa note : {product.rating}</p>
                        </div>
                    )

                })}
            </div>
        </>
    );
};

export default BestProduct;