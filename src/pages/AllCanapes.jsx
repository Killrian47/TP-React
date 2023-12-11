import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ProductCard from "../partials/ProductCard";

const AllCanapes = ({products}) => {
    return (
        <>
        <Header />
        <h2 className="App-published-products-title">Tout les canapés</h2>
        <div className="App-products-card">
            {products.map((product) => {
                return (
                    <ProductCard product={product}/>
                )
            })}
        </div>
        <Footer />
        </>
    );
};

export default AllCanapes;