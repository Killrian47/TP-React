import Footer from "../partials/Footer";
import Header from "../partials/Header";

const AllCanapes = ({products}) => {
    return (
        <>
        <Header />
        <h2 className="App-published-products-title">Tout les canapés</h2>
        <div className="App-products-card">
            {products.map((product) => {
                return (
                    <div className="App-product-card">
                        <h3 className="App-product-title">{product.title}</h3>
                        <p className="App-product-price">Prix : {product.price}</p>
                        <p className="App-product-rating">Sa note : {product.rating}</p>
                    </div>
                )
            })}
        </div>
        <Footer />
        </>
    );
};

export default AllCanapes;