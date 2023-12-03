import Card from "react-bootstrap/Card";
import classes from "./Manchurians.module.css";
function Manchurians() {
  let menuItems = [
    {
      id: 1,
      itemName: "VEG LOLIPOP",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.tarladalal.com/members/9306/procstepimgs/veg-lollipop_dsc_2896-20-199990.jpg",
      itemPrice: 300,
    },
    {
      id: 2,
      itemName: "VEG CRUNCHY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://ranveerbrar.com/wp-content/uploads/2022/06/Veg-crispy.jpg",
      itemPrice: 300,
    },
    {
      id: 3,
      itemName: "GOBI MANCHURIAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/gobi-manchurian-cauliflower-manchurian.jpg",
      itemPrice: 280,
    },
    {
      id: 4,
      itemName: "VEG. MANCHURIAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://myfoodstory.com/wp-content/uploads/2021/10/Veg-Manchurian-FI-1.jpg",
      itemPrice: 280,
    },
    {
      id: 5,
      itemName: "CHILLI GOBI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2019/04/chilli-gobi-recipe.jpg",
      itemPrice: 280,
    },
    {
        id: 6,
        itemName: "GOBI 65",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/gobi-65-fry.jpg",
        itemPrice: 280,
      },
      {
        id: 7,
        itemName: "PANEER MANCHURIAN",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/paneer_manchurian_dry_zdish.png",
        itemPrice: 300,
      },
      {
        id: 8,
        itemName: "MUSHROOM MANCHURIAN",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cookingfromheart.com/wp-content/uploads/2017/07/Mushroom-Manchurian-7.jpg",
        itemPrice: 300,
      },
      {
        id: 9,
        itemName: "CHILLI MUSHROOM",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://1.bp.blogspot.com/-_QHI8lgj5n8/XuJ7chjrXYI/AAAAAAAAKQ0/tQuNDYLDYQ4YIhji0IVat-y7iLuutnVGwCLcBGAsYHQ/s1600/Chilli%2BMushroom%2BDry.JPG",
        itemPrice: 300,
      },
      {
        id: 10,
        itemName: "CHILLI MANCHURIAN",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/Soya-Chilli-Manchurian-scaled.jpg?v=1639370289",
        itemPrice: 300,
      },
      {
        id: 11,
        itemName: "CHILLI PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/chilli-paneer-recipe-03.jpg",
        itemPrice: 300,
      },
      {
        id: 12,
        itemName: "PANEER 65",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg",
        itemPrice: 300,
      },
      {
        id: 13,
        itemName: "MUSHROOM 65",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/mushroom-65-recipe.jpg",
        itemPrice: 300,
      },
      {
        id: 14,
        itemName: "CRISPY VEG",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://ranveerbrar.com/wp-content/uploads/2022/06/Veg-crispy.jpg",
        itemPrice: 300,
      },
      {
        id: 15,
        itemName: "CRISPY CORN",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/crispy-corn.jpg.webp",
        itemPrice: 300,
      },
      {
        id: 16,
        itemName: "VEG.BALL IN HOT GARLIC",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cdn.tarladalal.com/members/9306/big/big_vegetable_balls_in_hot_garlic_sauce-7789.jpg",
        itemPrice: 300,
      },
      {
        id: 17,
        itemName: "HOT GARLIC PANEER",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://i0.wp.com/www.dhabastyle.com/wp-content/uploads/2017/06/website.jpg?w=2200&ssl=1",
        itemPrice: 300,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>MANCHURIANS</u></p>
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

export default Manchurians;
