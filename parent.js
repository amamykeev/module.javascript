var Person = require("./classroom");

class Parent extends Person {
	constructor(name, contact, jobPosition) {
		super(name, contact);
		this.setJobPosition(jobPosition)
	}
	setJobPosition(jobPosition) {
		this.jobPosition = jobPosition;
	}
}

console.log(1, 2, 3)