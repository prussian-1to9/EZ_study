let product: {
  id: string;
  name: string;
  price: number;
  membersOnly: boolean;
  sizes: string[];
} = {
  id: "c001",
  name: "codeit Black Hoodie",
  price: 129000,
  membersOnly: true,
  sizes: ["S", "M", "L"],
};

if (product.membersOnly) {
  console.log("This product is for memebers only.");
} else {
  console.log("Anyone can purchase this product.");
}

/* ========================= */
let field = "field name";
let obj = {
  [field]: "field value",
};

//console.log(obj); // { 'field name': 'field value' }

let stock: {
  [id: string]: number;
} = {
  c001: 100,
  c002: 200,
  c003: 300,
  c004: 400,
};

//console.log(stock); // { c001: 100, c002: 200, c003: 300, c004: 400 }
