import styles from "./product-items.module.css";
function ButtonComponent(){
    return (
        <button>Submit</button>
    )
}



function ProductItem({singleProduct,key}){
    return (
        <>
        <p className={styles.text} key={key}>{singleProduct}</p>
        <ButtonComponent/>
         </>
    )
}

export default ProductItem;