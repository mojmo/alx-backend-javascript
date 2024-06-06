// Interface for Director methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Interface for Teacher methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// String literal type for subjects
type Subjects = "Math" | "History";

// Function to teach based on subject
function teachClass(todayClass: Subjects): string {

    switch (todayClass) {
        case "Math":
            return "Teaching Math";
        case "History":
            return "Teaching History";
    }
}
