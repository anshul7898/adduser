import Card from "react-bootstrap/Card";
import classes from "./Sandwiches.module.css";
function Sandwiches() {
  let menuItems = [
    {
      id: 1,
      itemName: "PLAIN BREAD BUTTER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.createdby-diane.com/wp-content/uploads/2011/01/bread-fresh-baked-white-bread-with-butter-680x453.jpg",
      itemPrice: 90,
    },
    {
      id: 2,
      itemName: "VEG. CHEESE GRILL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
      itemPrice: 160,
    },
    {
      id: 3,
      itemName: "C.T. GRILL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://res.cloudinary.com/hsxfx8igq/image/upload/t_16x9_recipe_image,f_auto/v1617107267/Grilled_Cheese_with_Cauliflower_520x500_jkct59.jpg",
      itemPrice: 160,
    },
    {
      id: 4,
      itemName: "BOMBAY SANDWICH",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.panningtheglobe.com/wp-content/uploads/2022/08/mumbai-bombay-sandwich-square.jpg",
      itemPrice: 160,
    },
    {
      id: 5,
      itemName: "ALOO MUTTER CHEESE GRILL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/37/92/40/3792407d141a3562ce87a7c2f52f8c37.jpg",
      itemPrice: 180,
    },
    {
        id: 6,
        itemName: "C.T.C. GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i.ytimg.com/vi/yLDsh2iZreo/maxresdefault.jpg",
        itemPrice: 180,
      },
      {
        id: 7,
        itemName: "CHEESE GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg",
        itemPrice: 200,
      },
      {
        id: 8,
        itemName: "CHEESE CHILLI GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://dizzybusyandhungry.com/wp-content/uploads/2019/01/chili-cheese-grilled-sandwich.jpg",
        itemPrice: 200,
      },
      {
        id: 9,
        itemName: "PANEER CHILLI GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://asmallbite.com/wp-content/uploads/2019/05/Grilled-Paneer-Sandwich.jpg",
        itemPrice: 200,
      },
      {
        id: 10,
        itemName: "TIA-TA GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/assets/search/usecase/mayonnaise_grilled_sandwich_zdish.png",
        itemPrice: 220,
      },
      {
        id: 11,
        itemName: "SGS SPL. GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/651746d26afc87484b4104be/5kbjdqnnyphdm1nxjoimpsza_bnmpyesod72nn7gn0ws0bjkxnv9kpoxj9i5hwiuvor42lby_punhk66kgxk72j4xbw45hqy825cgvg6bq.jpg",
        itemPrice: 250,
      },
      {
        id: 12,
        itemName: "CORN CHEESE GRILL",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/corn-sandwich-recipe.jpg",
        itemPrice: 220,
      },
      {
        id: 13,
        itemName: "EXTRA CHEESE",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://sherebengal.com/wp-content/uploads/2017/09/Extra-cheese.jpg",
        itemPrice: 50,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SANDWICHES</u></p>
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

export default Sandwiches;
