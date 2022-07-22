

var kiosk=[
    {
        name :"Orange",
        price : 30,
    },
    {
        name :"Mango",
        price : 15,
    },
    {
        name :"Avocado",
        price : 40,
    }]
 function getTotalCost(name,quantity){
    let a=kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${a.price*quantity}`)
     
}
getTotalCost("Orange",3)