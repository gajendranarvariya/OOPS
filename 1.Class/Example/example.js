class Abc extends Error {
  constructor(message = "", statusCode = 500, data = null) {
    super(message);
    // this.message = message;
    this.status = statusCode;
    this.data = data;
  }
}

// console.log(new Abc("Gajendra", 200));
// console.log(new Abc("Gajendra", 200).getDelte());

let obj = new Abc("ddfdf", 200);
console.log(obj);
console.log(obj.message);
console.log(obj.status);
console.log(obj.data);

/* try {
  //   let obj = new Abc("ddfdf", 200);
  //   console.log(obj);

  throw new Abc("Example", 500);
} catch (error) {
    console.log(error);
} */
