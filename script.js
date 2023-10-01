const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 20
			},
			{
				"title": "Java Enterprise",
				"score": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 75
			},
			{
				"title": "Java Enterprise",
				"score": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
    constructor(obj){
        obj = JSON.parse(JSON.stringify(obj));
        Object.assign(this, obj);
    }

    render() {
        const roles = {
            student: 'Student',
            admin: 'Admin',
            lector: 'Lector'
        };
    
        const infoData = `
            <div class="user__info--data">
                <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                <div class="user__naming">
                    <p>Name: <b>${this.name}</b></p>
                    <p>Age: <b>${this.age}</b></p>
                </div>
            </div>`;
    
        const infoRole = `
                <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                <p>${roles[this.role]}</p>
                `;
    
        const userInfo = [infoData].map(item => `<div class="user__info">${item}</div>`).join('') + [infoRole].map(item => `<div class="user__info--role ${this.role}">${item}</div>`).join('');
        return `<div class="user__info">${userInfo}</div>`;
    }
    renderCourses(coursesClass, userCourses){
        if (!this.courses) {
            return ''; 
        }
        return `
        <div class="${coursesClass}">${userCourses}</div>`
        }
    }
class Student extends User{
    constructor(obj){
        super(obj); 
    }
    renderCourses() {
        const coursesHTML = this.courses.map(course => `
            <p class="user__courses--course ${this.role}">
                ${course.title} <span class="${getScore(course.score)}">${getScore(course.score)}</span>
            </p>`
        ).join('');

        return super.renderCourses('user__courses', coursesHTML);
    }
}
class Lector extends User{
    constructor(obj){
        super(obj);
    }
    renderCourses() {
        const coursesHTML = this.courses.map(course => `
            <div class="user__courses--course ${this.role}">
                <p>Title: <b>${course.title}</b></p>
                <p>Lector's score: <span class="${getScore(course.score)}">${getScore(course.score)}</span></p>
                <p>Average student's score: <span class="${getScore(course.studentsScore)}">${getScore(course.studentsScore)}</span></p>
            </div>`
        ).join('');

        return super.renderCourses('user__courses admin--info', coursesHTML);
    }
}
class Admin extends User{
    constructor(obj){
        super(obj);
    }
    renderCourses() {
        const coursesHTML = this.courses.map(course => `
            <div class="user__courses--course ${this.role}">
                <p>Title: <b>${course.title}</b></p>
                <p>Admin's score: <span class="${getScore(course.score)}">${getScore(course.score)}</span></p>
                <p>Lector: <b>${course.lector}</b></p>
            </div>`
        ).join('');

        return super.renderCourses('user__courses admin--info', coursesHTML);
    }
}

const getScore = score => {
    return gradation[score <= 20 ? 20 : score <= 55 ? 55 : score <= 85 ? 85 : 100];
};
const userRole = {
    student: obj => new Student(obj),
    admin: obj => new Admin(obj),
    lector: obj => new Lector(obj)
};

users.map(obj => userRole[obj.role] ? userRole[obj.role](obj) : ``).forEach(user => {
        document.write(`
            <div class="user">
                ${user.render()}
                ${user.courses ? user.renderCourses() : ``}
            </div>`
        );
    });