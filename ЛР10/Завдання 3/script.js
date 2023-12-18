class Student {
    constructor(lastName, firstName, mats,history,js) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.mats = mats;
        this.history = history;
        this.js = js;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = '<table class="student-table">';
        table += '<tr><th>Name</th><th>LastName</th><th>Math</th><th>History</th><th>JS</th><th>Avg</th></tr>';

        this.students.forEach(student => {
            table += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.mats}</td><td>${student.history}</td><td>${student.js}</td></td><td>${((student.mats+student.js+student.history)/3).toFixed(2)}</td></tr>`;
        });

        table += '</table>';
        return table;
    }
}

class StylesTable extends ListOfStudents {
    getStyles() {
        return '<style>.student-table {font-family: Arial, sans-serif;} </style>';
    }

    getTableList() {
        return this.getStyles() + super.getTableList();
    }

    getAvg(mats,js,history) {
        const sum = mats+js+history;
        return sum / 3;
    }

}

const students = [
    new Student('Захарчук', 'Володимир', 3, 5, 5),
    new Student('Білий', 'Михайло', 5, 5, 5),
    new Student('Пономарчук', 'Марія', 4,2,5),
];


const listWithStyles = new StylesTable(students);
document.getElementById('resultWithStyles').innerHTML = listWithStyles.getTableList();
document.getElementById('resultAvg').innerHTML = listWithStyles.getTotalAvg();
