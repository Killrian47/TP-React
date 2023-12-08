import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";
import BestProduct from "../partials/BestProduct.jsx"
import PublishedProduct from "../partials/PublishedProduct.jsx";

const Home = ({products}) => {
    console.log(products);
    return (
        <>
        <Header />
        <BestProduct productsForBestProduct = {products}/>
        <PublishedProduct productsForPublishedProduct = {products}/>
        <Footer />
        </>
    )
}

export default Home;