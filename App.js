import { View } from "react-native";
// import Navigation from "./src/navigator";
import Button from "./components/button";
import BestSeller from './components/best';
import Product from "./components/product";
import Title from './components/title';

const App = () => {
  return (
    <View>
      <Button />
      <BestSeller />
      <Title />
      <Product />
    
      {/* <Navigation /> */}
    </View>
  );
};

export default App;
