import { Fragment } from "react";

const ProductRow = ({products, search}) => {
    
    return ( 
        <>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
        {products
        .filter((eachProduct) => {
            return eachProduct.name.toLowerCase().includes(search.toLowerCase())
        })
        .map((eachProduct)=> (
            <Fragment key={eachProduct.id}>
                <tr>
                    <td style={eachProduct.inStock ? {color:"black"} : {color:"red"}}>{eachProduct.name}</td>
                    <td>{eachProduct.price}</td>
                </tr>
            </Fragment>
        ))}
            </tbody>
            </table>
        </>
     );
}
 
export default ProductRow;