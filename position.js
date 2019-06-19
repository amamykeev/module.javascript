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

module.exports = Position;