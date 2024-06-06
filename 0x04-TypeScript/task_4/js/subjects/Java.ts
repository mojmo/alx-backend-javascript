namespace Subjects {
    // Interface declaration merging
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects.Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || !this.teacher.experienceTeachingJava) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
