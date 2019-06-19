var Person = require("./classroom");
var Parent = require("./parent");
var StudentGroup = require("./studentGroup");

class Student extends Person {
	constructor(name, contact, isActive, dateOfBirth, studentGroup, parent = []) {
		super(name, contact, isActive, dateOfBirth, studentGroup, parent);
		this.setStudentGroup(studentGroup);
	}
	setStudentGroup(studentGroup) { 
		this.studentGroup = studentGroup;
	}
	addParent(parent) {
		this.parent.push(new Parent)
	}
}
let studentGroup = new Student();
let parent = new Student();

module.exports = Person;