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

module.exports = Book;