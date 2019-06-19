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

module.exports = TeacherRole;