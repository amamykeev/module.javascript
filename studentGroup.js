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

module.exports = StudentGroup;