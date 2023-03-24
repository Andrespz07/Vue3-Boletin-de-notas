<script setup>
import { ref } from "vue";
import TableComponent from "./TableComponent.vue";
import Class from '../assets/js/Class.js';
import Student from "../assets/js/Student.js";
import { existStudent } from '../assets/js/ExistStudent.js';
import { existClass } from '../assets/js/ExistClass';
import {IsEmpty} from '../assets/js/IsEmpty'

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
      addClassToStudent(students.find(element => element.NameStudent === student.NameStudent));
      return
    }
    if (!existStudent(students, student)) {
      students.push(student);
      addClassToStudent(student);
      NameInput.value = ''
    }
    return
  }
  if(IsEmpty(NameInput.value)){
    alert("The name student ")
  }
}
function addClassToStudent(student){
  if (!IsEmpty(schoolClass.value)){
    let classes = new Class(saveClassName(),saveClassNote());
    if(existClass(student.Class, classes)){
      
    }
    if(!existClass(student.Class, classes)){
      
      student.addClass(classes);
      schoolClass.value = ''
      return
    }
  }
  if(IsEmpty(schoolClass.value)){
    alert("The class name is empty")
  }
  
}

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
          <th>student</th>
          <th>Class</th>
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
table{
  border: dotted 3px green;
}
    
</style>