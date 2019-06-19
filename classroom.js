class Person {
	constructor(name, contact, isActive, dateOfBirth) {
			this.setName(name);
			this.setContact(contact);
			this.setActive(isActive);
			this.setDate(dateOfBirth);
	}
	setName(name) {
			this.name = name;
	}
	setContact(contact) {
			this.contact = contact;
	}
	setActive(isActive) {
			this.isActive = isActive;
	}
	setDate(dateOfBirth) {
			this.dateOfBirth = dateOfBirth;
	}
}

class Book {
	constructor(name, subject) {
		this.setName(name);
		this.setSubject(subject);
	}
	setName(name) {
		this.name = name;
	}
	setSubject(subject) {
		this.subject = subject;
	}
}

class Position {
	constructor(name, quote) {
		this.setName(name);
		this.setQuote(quote);
	}
	setName(name) {
		this.setName = name;
	}
	setQuote(quote) {
		this.quote = quote;
	}
}

class Subject {
	constructor(name, level, hours, books = [], quote) {
		this.setName(name);
		this.setLevel(level);
		this.setHours(hours);
		this.setBooks(books);
		this.setQuote(quote);
	}
	setName(name) {
		this.name = name;
	}
	setLevel(level) {
		this.level = level;
	}
	setHours(hours) {
		this.hours = hours;
	}
	setBooks(books) {
		this.books = books;
	}
	setQuote(quote) {
		this.quote = quote;
	}
}

class TeacherRole {
	constructor(teacher, subject) {
		this.setTeacher(teacher);
		this.setSubject(subject);
	}
	setTeacher(teacher) {
		this.teacher = teacher;
	}
	setSubject(subject) {
		this.subject = subject;
	}
}

class StudentGroup {
	constructor(student = [], level, groupNumber, teacherRole) {
		this.setStudent(student);
		this.setLevel(level);
		this.setGroupNumber(groupNumber);
		this.setTeacherRole(teacherRole);
	}
	setStudent(student) {
		this.student = student;
	}
	setLevel(level) {
		this.level = level;
	}
	setGroupNumber(groupNumber) {
		this.groupNumber = groupNumber;
	}
	setTeacherRole(teacherRole) {
		this.teacherRole = teacherRole;
	}
}

module.exports = Person;