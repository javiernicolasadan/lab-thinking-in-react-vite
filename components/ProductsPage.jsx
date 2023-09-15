import { useState } from "react";
import jsonData from "/src/data.json"
import SearchBar from '../components/SearchBar'
import ProductTable from "../components/ProductTable";


const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState("")
    
    return ( 
    <>
        <h1>IronStore</h1>
        <SearchBar search={search} setSearch={setSearch}/>
        <ProductTable 
        products={products} 
        setProducts={setProducts}
        search={search}
        setSearch={setSearch}
        />
    </> 
    );
}
 
export default ProductsPage;