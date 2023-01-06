// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    const isValidString = typeof input === 'string';
    const isValidNumber = typeof input === 'number' && inRange(input, 0, 100);
    if (!isValidString && !isValidNumber) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      let d = 60
      let c = 70
      let b = 80
      let a = 90
      response ="F"
      if(input>=d){
        response = "D"
      }
      if(input>=c){
        response = "C"
      }
      if(input>=b){
        response = "B"
      }
      if(input>=a){
        response = "A"
      }

      return response;
    } 
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      let gradeRanges = {
        A:"90-100",
        B:"80-90",
        C:"70-80",
        D:"60-70",
        F:"0-60"
      }
      response = gradeRanges[input];
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(5));
console.log('John.displayGrade():', John.displayGrade('D'));
console.log('John.displayGrade():', John.displayGrade(-5));
// console.log('John.displayGrade():', John.displayGrade(105));
