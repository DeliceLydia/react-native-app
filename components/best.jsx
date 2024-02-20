import {ScrollView, View } from "react-native";
import Card from "./card";

const BestSeller = () => {
  const data = [
    {
      id: 1,
      title: "Gj Jeans",
      price: '46.00',
      image:
       'https://images.unsplash.com/photo-1464917675507-01656d5a2257?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      title: "dresses",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "trousers",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View style={{ margin: 3 }}>
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BestSeller;
