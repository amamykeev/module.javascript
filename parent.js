var Person = require("./person");

class Parent extends Person {
	constructor(name, contact, jobPosition) {
		super(name, contact);
		this.setJobPosition(jobPosition)
	}
	setJobPosition(jobPosition) {
		this.jobPosition = jobPosition;
	}
}

module.exports = Parent;
