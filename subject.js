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

module.exports = Subject;
