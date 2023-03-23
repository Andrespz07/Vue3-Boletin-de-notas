// import { IsEmpty } from '../js/IsEmpty';
export default class Student {
  #NameStudent;
  #Class;
  constructor() {
    this.#NameStudent = '';
    this.#Class = new Array();
  }
  setNameStudent(nameStudent) {
    
    this.#NameStudent = nameStudent;
  }
  get NameStudent() {
    return this.#NameStudent;
  }
  set Class(course) {
    this.#Class = course;
  }
  get Class() {
    return this.#Class;
  }
  addCourse(course){
    this.#Class.push(course);
  }
  modifyCourse(course, index){
    this.#Class.splice(index, 1, course)
  }
}
