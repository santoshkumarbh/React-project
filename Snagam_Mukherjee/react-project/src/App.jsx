
import ClassBasedComponent from './components/ClassBasedComponent';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import ProductList from './components/products';
import UseReducerExample from './components/use-reducer-example';
import Users from './components/users';


const dummyProductData=['Product1','Product2','Product3'];
function App() {
 
  return (
    <>
      {/* <ProductList listOfProducts={dummyProductData}/> */}
      {/* <ClassBasedComponent/> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      <UseReducerExample/>
    </>
  )
}

export default App
