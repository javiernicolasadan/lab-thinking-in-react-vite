
import ProductRow from "./ProductRow";

const ProductTable = ({products, setProducts, search, setSearch}) => {
    console.log(products, setProducts)
    return ( 
        <>
            <p>ProductTable</p>
            <ProductRow  
            products={products} 
            setProducts={setProducts}
            search={search}
            /> 
        </>

     );
}
 
export default ProductTable;