import Card from "react-bootstrap/Card";
import classes from "./FreshFruitJuices.module.css";
function FreshFruitJuices() {
  let menuItems = [
    {
      id: 1,
      itemName: "LEMON JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://images.healthshots.com/healthshots/en/uploads/2022/04/26153314/lemonade.jpg",
      itemPrice: 50,
    },
    {
      id: 2,
      itemName: "LEMON MINT JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.middleeasteye.net/sites/default/files/styles/max_2600x2600/public/images-story/dsc_0035.jpg?itok=akunhUqR",
      itemPrice: 60,
    },
    {
      id: 3,
      itemName: "MOSAMBI JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianmasalarecipe.com/wp-content/uploads/2023/08/Mosambi-juice-recipe-compressed-4.jpg",
      itemPrice: 90,
    },
    {
      id: 4,
      itemName: "ORANGE JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.12taste.com/in/wp-content/uploads/2019/11/fresh-orange-juice-glass-dark-background-scaled.jpg",
      itemPrice: 90,
    },
    {
      id: 5,
      itemName: "ORANGE-MOSAMBI JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/mosambi_juice_zdish.png",
      itemPrice: 90,
    },
    {
      id: 6,
      itemName: "PINEAPPLE JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2021/1/DI/OO/KX/26394442/rani-float-fruit-juice-drink-pineapple-500x500.jpg",
      itemPrice: 90,
    },
    {
      id: 7,
      itemName: "WATER MELON (Seasonal) JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.halfpasthungry.com/wp-content/uploads/2022/07/Watermelon-Juice-with-Mint..jpg",
      itemPrice: 90,
    },
    {
      id: 8,
      itemName: "GRAPE JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.theseasonedmom.com/wp-content/uploads/2022/09/Grape-Juice-12.jpg",
      itemPrice: 100,
    },
    {
      id: 9,
      itemName: "MANGO JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://vaya.in/recipes/wp-content/uploads/2018/02/mango-frooti.jpg",
      itemPrice: 100,
    },
    {
      id: 10,
      itemName: "COCKTAIL JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://realhousemoms.com/wp-content/uploads/Giggle-Juice-RECIPE-CARD.jpg",
      itemPrice: 120,
    },
    {
      id: 11,
      itemName: "APPLE JUICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://8thwondertea.com/cdn/shop/articles/custom_resized_175073ac-3882-473d-9cc7-b98eebd67d13.jpg?v=1678563564",
      itemPrice: 120,
    },
    {
      id: 12,
      itemName: "ANAR JUICE (POMEGRANATE)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/04/06183829/pomegranate-fi.jpg?tr=w-1200,h-900",
      itemPrice: 120,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>FRESH FRUIT JUICES</u></p>
      {menuItems.map((menuItems) => (
        <Card className={classes.input}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={menuItems.itemImageUrl}
          />
          <Card.Body>
            <Card.Title>{menuItems.itemName} - ₹ {menuItems.itemPrice}/-</Card.Title>
            {/* <Card.Text>{menuItems.itemDescription}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FreshFruitJuices;
