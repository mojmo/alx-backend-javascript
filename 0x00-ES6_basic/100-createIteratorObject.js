export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  let currentIndex = 0;
  return {
    next() {
      if (currentIndex < employees.length) {
        const value = employees[currentIndex];
        currentIndex += 1;
        return { value, done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
