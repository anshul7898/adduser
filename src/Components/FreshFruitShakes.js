import Card from "react-bootstrap/Card";
import classes from "./FreshFruitShakes.module.css";
function FreshFruitShakes() {
  let menuItems = [
    {
      id: 1,
      itemName: "COLD COFFEE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
      itemPrice: 130,
    },
    {
      id: 2,
      itemName: "PINEAPPLE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.theendlessmeal.com/wp-content/uploads/2023/04/pineapple-smoothie-3.jpg",
      itemPrice: 130,
    },
    {
      id: 3,
      itemName: "CHICKOO",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.ticklingpalates.com/wp-content/uploads/2022/07/chikoo-milkshake.jpg",
      itemPrice: 140,
    },
    {
      id: 4,
      itemName: "BANANA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.allrecipes.com/thmb/NHlDzARQoQZnqQOYpEOkZyjJLYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20804banana-shakeTammyLynn4x3-f07c53dc309143619f2ed3aefdabe4ae.jpg",
      itemPrice: 130,
    },
    {
      id: 5,
      itemName: "MANGO",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg",
      itemPrice: 130,
    },
    {
      id: 6,
      itemName: "CHOCOLATE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzi_KTQBapKfSN380v2_IapMCTpQs1RaZYw&usqp=CAU",
      itemPrice: 130,
    },
    {
      id: 7,
      itemName: "VANILLA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://bakingmischief.com/wp-content/uploads/2020/03/vanilla-milkshake-photo.jpg",
      itemPrice: 130,
    },
    {
      id: 8,
      itemName: "STRAWBERRY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.sharmispassions.com/wp-content/uploads/2012/02/StrawberryMilkshake4.jpg",
      itemPrice: 130,
    },
    {
      id: 9,
      itemName: "BUTTER SCOTCH",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/butterscotch_shake_zdish.png",
      itemPrice: 150,
    },
    {
      id: 10,
      itemName: "LITCHEE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shireenanwer.com/wp-content/uploads/2023/02/Untitled-design-2023-02-26T021141.292.png",
      itemPrice: 160,
    },
    {
      id: 11,
      itemName: "BLACK CURRANT",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/blackcurrant_shake_zdish.png",
      itemPrice: 160,
    },
    {
      id: 12,
      itemName: "COLD COFFEE WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2022/07/Iced-Mocha.jpg",
      itemPrice: 150,
    },
    {
      id: 13,
      itemName: "KESAR PISTA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandhini/KESAR_PISTA_FALOODA.jpg",
      itemPrice: 170,
    },
    {
      id: 14,
      itemName: "DRY FRUITS BADAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/dry_fruit_milkshake_zdish.png",
      itemPrice: 180,
    },
    {
      id: 15,
      itemName: "DRY FRUITS ANJEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://4.bp.blogspot.com/-1pgwIfDhDzk/Vd9cJTzscHI/AAAAAAAABbE/icC2mHXMjbI/s1600/Khajur%2BAnjeer%2BShake.jpg",
      itemPrice: 180,
    },
    {
      id: 16,
      itemName: "COCKTAIL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/736x/9e/04/de/9e04de6756049e8c210e5a64796f0dec.jpg",
      itemPrice: 180,
    },
    {
      id: 17,
      itemName: "SITAFAL (SEASONAL)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/736x/4f/62/28/4f62285535e2c045d481645025ea3ae6.jpg",
      itemPrice: 200,
    },
    {
      id: 18,
      itemName: "EXTRA-ICE CREAM WITH SHAKE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/63971154.cms?width=573&height=430",
      itemPrice: 40,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>FRESH FRUIT SHAKES</u></p>
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

export default FreshFruitShakes;
