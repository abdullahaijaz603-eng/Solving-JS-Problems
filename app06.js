var shoppingBill = prompt("Product 01 Price")
var shoppingBill2 = prompt("Product 02 Price")
var shoppingBill3 = prompt("Product 03 Price")

 console.log("Total Shopping Bill: Rs" + (Number(shoppingBill) + Number(shoppingBill2) + Number(shoppingBill3)))
 console.log("Discount: Rs" + (0.1 * (Number(shoppingBill) + Number(shoppingBill2) + Number(shoppingBill3))))
 console.log("After Discount: Rs" + (Number(shoppingBill) + Number(shoppingBill2) + Number(shoppingBill3) - (0.1 * (Number(shoppingBill) + Number(shoppingBill2) + Number(shoppingBill3)))))
