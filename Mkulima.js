







//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity
class Mkulima{
    constructor(){
    this.groceryfarm = [];
    this.vendor = [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phoneNumber, address) => {//addFarm
    this.groceryfarm.push(farmId,farmName,farmer,phoneNumber,address)
    }
    this.removeFarm = (farmId) => {
    let specific = this.groceryfarm.find(item => item.farmId ===farmId);
    let farmIndex = this.groceryfarm.indexOf(specific);
    this.groceryfarm.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.groceryfarm.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phoneNumber =newPhoneNumber;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.groceryfarm.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProduct = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    let newlima = new Mkulima();
    newfarm.addFarm("1","Wangari","Mung'etho","0757552577", "Nakuru");
    newfarm.addFarm("2","Wanjiru","ManiaFarm"," O713199046", "Nakuru");
    newfarm.addFarm("3","Kamau","SubukiaFarm","072222222", "Nakuru");
    newfarm.addFarm("4","Macharia","Kwafamu","0745369203", "Nakuru");
    console.log(newfarm.groceryfarm);
    newfarm.removeFarm("4");
    console.log()
