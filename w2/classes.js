// //declaring class

// class Product{
//     constructor(itemName, price, discount, productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
// }

// // let pen = new Product("Pen", 10, 1,"P10");

// const newProduct =class{
//     constructor(itemName, price, discount, productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get discountedValue(){
//         return (this.price-((this.discount*this.price)/100));
//     }
   
//     set setDiscount(discount){
//         this.discount=discount;
//     }
// };

// let phone=new newProduct('Iphone 13 pro max', 1500, 5,'iphone');

// phone.setDiscount=15


// Inheritance of classes

class Product{
    constructor(item){
        this.item=item;
    }
    getName(){
        return this.item+" is a product.";
    }
}

//super() calls constructor of the parent class.

class Phone extends Product{
    constructor(item){
        super(item);
    }

    getName(){
        return this.item +" is a smart phone.";
    }
}

let phone = new Phone('iPHONE');
let p= new Product('Smart phone.');
