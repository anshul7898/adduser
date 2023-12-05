import Card from "react-bootstrap/Card";
import classes from "./SabjiMandi.module.css";
function SabjiMandi() {
  let menuItems = [
    {
      id: 1,
      itemName: "VEG NOODLES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg",
      itemPrice: 250,
    },
    {
      id: 2,
      itemName: "VEG SINGAPOREAN NOODLES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cookingfromheart.com/wp-content/uploads/2019/11/Veg-Singapore-Noodles-1.jpg",
      itemPrice: 280,
    },
    {
      id: 3,
      itemName: "VEG. HAKKA NOODLES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://thechutneylife.com/wp-content/uploads/2023/06/Veg-Hakka-Noodles-The-Chutney-Life-4-1.jpg",
      itemPrice: 280,
    },
    {
      id: 4,
      itemName: "MUSHROOM NOODLES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://therecipecritic.com/wp-content/uploads/2018/09/Garlic-Mushroom-Noodles-1.jpg",
      itemPrice: 280,
    },
    {
      id: 5,
      itemName: "PANEER NOODLES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://herbivorecucina.com/wp-content/uploads/2015/06/Paneer-Chili-Noodles-2-scaled.jpg",
      itemPrice: 300,
    },
    {
        id: 6,
        itemName: "AMERICAN CHOPSUEY",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://herbivorecucina.com/wp-content/uploads/2022/09/American-Chopsuey-3-scaled.jpg",
        itemPrice: 300,
      },
      {
        id: 7,
        itemName: "PANEER HAKKA NOODLES",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i0.wp.com/tikkastotapas.com/wp-content/uploads/2021/06/IMG_8285-2-1.jpg?resize=800%2C534&ssl=1",
        itemPrice: 300,
      },
      {
        id: 8,
        itemName: "VEG. SCHEZWAN NOODLES",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-veg-schezwan-noodles-recipe-video-how-to-make-easy-veg-schezwan-noodles.jpg",
        itemPrice: 300,
      },
      {
        id: 9,
        itemName: "VEG. CHOPSUEY",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://myfoodstory.com/wp-content/uploads/2022/03/American-Chopsuey-1.jpg",
        itemPrice: 300,
      },
      {
        id: 10,
        itemName: "CHINESE BHEL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "http://t3.gstatic.com/images?q=tbn:ANd9GcQO8wko9FtQoRRf5qUIAQN19sRJ4uCkUTlFgJaBnMVoybwEotw84WwdJU_Yge_v-H_TkyDnOw",
        itemPrice: 300,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SABJI-MANDI</u></p>
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

export default SabjiMandi;
