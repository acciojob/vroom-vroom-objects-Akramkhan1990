// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;

}
car.prototype.getMakeModel=function() {
	return '${this.make},{this.model}';
	
};
function SportsCar(make, model, topSpeed) {
	car.call(this,Make,model,);
	this.topspeed=topspeed;
}
SportsCar.prototype=oject.create(car.prototype);
SportsCar.prototype.constructor=SportsCar;
SportsCar.prototype.accelerat=function(){
	console.loge('${this.make} ${this.model} ${this.topspeed}mph');
	
	
};
const maycar=new car("Toyota","corolla")
console.log(myrcar.getmodel());
const sportscar=new sportscar("toyota","corolla"200);
console.log(sportscar.getmodel());

// Do not change the code below
window.car=car;
window.SportsCar =SportsCar;

