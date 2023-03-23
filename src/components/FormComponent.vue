<script setup>
import { ref } from "vue";
import TableComponent from "./TableComponent.vue";
// import { computed } from "@vue/reactivity";
import Class from '../assets/js/Class.js';
import Student from "../assets/js/Student.js";
import { existStudent } from '../assets/js/ExistStudent.js';
import { existClass } from '../assets/js/ExistClass';

let students = new Array();

const NameInput = ref("");
const schoolClass = ref("");
const noteClass = ref(0);
// methods
function saveName(){
  return NameInput.value;
}
function saveClassName(){
  return schoolClass.value;
}
function saveClassNote(){
  return noteClass.value;
}
function createStudent(){ 
  if (!IsEmpty(NameInput.value)) {
    let student = new Student();
    student.setNameStudent(saveName());
    if (existStudent(students, student)) {
      addCourseToStudent(students.find(element => element.NameStudent === student.NameStudent));
      return
    }
    if (!existStudent(students, student)) {
      students.push(student);
      addCourseToStudent(student);
      NameInput.value = ''
    }
    return
  }
  if(IsEmpty(NameInput.value)){
    alert("The name student ")
  }
}
function addCourseToStudent(student){
  if (!IsEmpty(schoolClass.value)){
    let classes = new Course(saveClassName(),saveClassNote());
    if(existCourse(student.Class, classes)){
    //   if(confirm('The course exist but you can overide the note')){
    //     let index = student.Class.map(producto => producto.Name).indexOf(course.Name);
    //     student.modifyCourse(course, index);
    //     schoolClass.value = ''
        
    //     return
    //   }
      
      
    }
    if(!existCourse(student.Class, classes)){
      
      student.addCourse(course);
      schoolClass.value = ''
      return
    }
  }
  if(IsEmpty(schoolClass.value)){
    alert("The class name is empty")
  }
  
}
// function showStudents(){
//   console.log(students);
  
// }
</script>
<template>
    <section id="register-zone">
      <h1>Information of Student</h1>
      <input class="inputs" type="text" v-model="NameInput"  placeholder="Enter a student name"/>
      <input class="inputs" type="text" v-model="schoolClass" placeholder="Enter a class name"/>
      <input class="inputs" type="number" v-model="noteClass" minlength="1" maxlength="3" min="0" max="10" />
      <div class="buttons-apartate">
        <button class="buttons" @click="createStudent">Add</button>
        <button class="buttons" @click="showStudents">Send</button>
      </div>
    </section>
    <section id="table-zone">
      <table v-for="item in students">
        <tr>
          <th scope="row">student</th>
          <th>Course</th>
          <th>Note</th>
        </tr>
        
        <TableComponent v-for="element in item.Class"
          :name="item.NameStudent"
          :class="element.Name"
          :note="element.Note"
        />
        
      </table>
      
    </section>
  </template>

<style lang="scss" scoped>
    
</style>