// The magical sorting Hat: Imagine you are creating magical sorting hat for a wizard school. Implement a javascript function that takes an array of student names and assigns them to one of the four houses (Grayffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the lentth of their names.

let students = ["shubh", "anajali", "Shivangi", "Annapuranam", "Dilkhush", "Roshan", "Amar", "Nitish", "Raja", "Shivam", "Pujesh"]

let houses = []

for (const student of students) {
    if(student.length <6){
        houses.push("Ganga")
    }
    else if(student.length < 8){
        houses.push("Koshi")
    }
    else if(student.length < 12){
        houses.push("Yamuna")
    }
    else{
        houses.push("Bhramhputra")
    }
}
console.log(houses);

