import ProductItem from "./components/product-items"
import "../products/style.css";

const flag=true;

// function renderTextBlock(getFlag){
//     return getFlag ? <h2>when condition true</h2> : <h2>when condition false</h2>
// }

const renderTextBlock =flag?<h2>True block</h2>:<h2>false block</h2>;

function ProductList({listOfProducts}){
    return(
        <>
        <h1>Ecommerce project</h1>

        {renderTextBlock}
        
        <ul>
            {listOfProducts.map((item,index)=>(
                <ProductItem singleProduct={item} key={index}/>
            ))}
        </ul>
        
        </>
    )
}
export default ProductList;