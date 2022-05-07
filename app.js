const obj = {
    name:"C class",
    brand: "Mercedes",
    model:2022,
    log:function(){
        console.log(this)
    }
}
obj.log()
const Car = function(name,brand,model){
    console.log(this)
    this.name = name
    this.brand = brand
    this.model = model
    return this
}

const car1 = Car('C 200D','Mercedes',2022)
// const car2 = new Car('M2 Comp','BMW',2022)

console.log(car1)