class AutoMobile{
    constructor(br,ty,ctgry,tpspd,fuel,arbg )
    {
     this.brand = br
     this.type = ty
     this.category= ctgry
     this.topSpeed = tpspd
     this.fuel = fuel
     this.airbags = arbg
 

    }
}

class Mercedes extends AutoMobile{
    constructor(br,ty,ctgry,tpspd,fuel,arbg, trnsmis,safety,headlamp,gear)
    {
        super(br,ty,ctgry,tpspd,fuel,arbg)
        this.transmission = trnsmis
        this.safety= safety
         this.headlamp = headlamp
         this.gear= gear
    }
}


class Bike extends AutoMobile{
    constructor(br,ty,ctgry,tpspd,fuel,arbg, trnsmis,headlamp,gear)
    {
        super(br,ty,ctgry,tpspd,fuel,arbg)
        this.transmission = trnsmis
        this.headlamp= headlamp
        this.gear= gear

    }
    
}


let car1 = new Mercedes("Mercedes",'Car','Sedan','299 kmph','Petrol','8 Airbags','Automatic','5 Star','Projector','False')

let bike1 = new Bike('BMW','Bike','Two-Wheeler','140 kmph','Petrol',false,'Manual','LED','No. of Gear: 6')

console.log(car1)
console.log(bike1)





// Inheritance using Object.create()


const Vehicle = {
    brand: 'Audi',
    category :'Sedan',
    transmission:'Automatic',
    gearbox:false,
    mileage : '8 kmpl',
    fuel:"Petrol"

}

let bike = Object.create(Vehicle, {brand:{value:'BMW'}})
// console.log(Vehicle)
// bike.brand= 'BMW'
console.log(bike)