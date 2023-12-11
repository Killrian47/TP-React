const ProductCard = ({product}) => {
    return (
        <div className="App-product-card">
            <h3 className="App-product-title">{product.title}</h3>
            <p className="App-product-price">Prix : {product.price}</p>
            <p className="App-product-rating">Sa note : {product.rating}</p>
        </div>
    );
};

export default ProductCard;