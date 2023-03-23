export function existStudent(listStudents, student){
    return (listStudents.find(element => element.NameStudent === student.NameStudent)!=undefined) ? true : false;}