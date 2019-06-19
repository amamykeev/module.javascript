var Person = require("./person");
var StudentGroup = require("./studentGroup");
var Position = require("./position");
var Subjects = require("./subject");

class Teacher extends Person {
	constructor(name, contact, isActive, dateOfBirth, subjects = [], studentGroup = [], salary, position) {
		super(name, contact, isActive, dateOfBirth);
		this.setSalary(salary);
		this.setPosition(position);
		this.addSubject(subjects);
		this.addStudentGroup(studentGroup);
	}
	setSalary(salary) {
		this.salary = salary;
	}
	setPosition(position) {
		this.position = new Position;
	}
	addSubject(subjects) {
		this.subjects.push(new Subjects);
	}
	addStudentGroup(studentGroup) {
		this.studentGroup.push(new StudentGroup(studentGroup));
	}
}
