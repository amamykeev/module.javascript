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

module.exports = Person;