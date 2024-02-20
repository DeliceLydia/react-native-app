import { ScrollView, View, Text } from "react-native";
import ProductCard from "./productCard";

const Product = () => {
  const data = [
    {
      id: 1,
      title: "White T-shirt",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Purple T-shirt",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "trousers",
      price: 100,
      image:
        "https://unsplash.com/photos/man-leaning-on-red-muscle-car-in-street-6UEyVsw_1lU",
    },
    {
      id: 4,
      title: "trousers",
      price: 100,
      image:
        "https://unsplash.com/photos/man-leaning-on-red-muscle-car-in-street-6UEyVsw_1lU",
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => {
        return (
          <View style={{ margin: 3 }}>
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Product;
