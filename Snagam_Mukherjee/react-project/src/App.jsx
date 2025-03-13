import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent';
import ProductList from './components/products';


const dummyProductData=['Product1','Product2','Product3'];
function App() {
 
  return (
    <>
      {/* <ProductList listOfProducts={dummyProductData}/> */}
      <ClassBasedComponent/>
    </>
  )
}

export default App
