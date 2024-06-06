interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
