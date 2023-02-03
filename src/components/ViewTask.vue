<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="header">
    <div class="dropdown">
      <button class="dropbtn">
        <img src="bars-solid.svg" />
      </button>
      <div class="dropdown-content">
        <a href="/Tasks">Task</a>
        <a href="/Exams">Exam</a>
      </div>
    </div>
    <h1>Task</h1>
  </div>

  <div class="dueDate">
    <h2>Overdue</h2>
  </div>
  <hr style="width: 50%; display: inline-block; margin-top: -20px" />

  <ul id="myUL">
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first" />
        <h4>Research about Ethical Dilemma</h4>
        <h3>English Assignment</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>

    <li>
      <div class="TaskList">
        <input type="checkbox" id="first1" />
        <h4>Differentials</h4>
        <h3>Mathematics Assignment</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Solar System Model</h4>
        <h3>Science Assignment</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <div class="dueDate">
      <h2>Due next month</h2>
    </div>
    <hr style="width: 50%; display: inline-block; margin-top: -20px" />
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Derivatives</h4>
        <h3>Mathematics Assignment</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Create Final Report about the Theory of Evolution</h4>
        <h3>Science Assignment</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
  </ul>
  <div class="vl"></div>

  <div class="container">
    <div class="container1">
      <span class="close">+</span>
      <div class="small">Mathematics Assignment</div>
    </div>
    <div class="title">Differentials</div>
    <form class="form">
      <img src="calendar-alt-regular.svg" />
      <h5>Due Tuesday, November 8</h5>
      <h6>Overdue by 70 days</h6>
      <hr style="width: 99.5%; margin-top: -10px" />
      <h2>
        Lorem ipsum dolor sit amet, con adipiscing elit. Praesent vitae exid
        eros placerat vehicula. Lorem ipsum dolor sit amet, con adipiscing elit.
        Praesent vitae ex id eros placerat vehicula.
      </h2>
      <button id="completeButton">Mark Complete</button>
    </form>
  </div>
</template>

<style scoped>
.small {
  font-family: Arial;
  color: white;
  margin-left: 10px;
  margin-top: -5px;
  opacity: 0.6;
}
.title {
  font-family: Arial;
  font-size: 20px;
  padding: 0px;
  position: absolute;
  left: 2%;
  top: 13px;
  font-size: 22px;
  color: white;
}
.close {
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
  margin-left: 94%;
  margin-top: 5px;
  transform: rotate(45deg);
  color: white;
}
.container1 {
  border-style: solid;
  border-width: 1px;
  height: 350px;
  width: 40%;
}
#completeButton {
  padding: 6px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: 3%;
  margin-left: 70%;
}
.form img {
  height: 22px;
  width: 22px;
  margin-top: 30px;
  margin-left: 20px;
}
.form h2 {
  font-family: "Arial";
  font-weight: 500;
  font-size: 17px;
  color: black;
  margin-top: 25px;
  margin-left: 20px;
}
.form h5 {
  font-family: "Arial";
  font-weight: 500;
  font-size: 17px;
  color: black;
  margin-top: -30px;
  margin-left: 65px;
  margin-bottom: 30px;
}
.form h6 {
  font-family: "Arial";
  font-weight: 545;
  font-size: 15px;
  color: #ff0000;
  margin-top: -30px;
  margin-left: 65px;
}
.container {
  border-style: solid;
  border-width: 1px;
  height: 358px;
  width: 35%;
}

.container h7 {
  font-family: "Arial";
  font-weight: 500;
  font-size: 22px;
  margin-left: 20px;
  margin-top: 15px;
  color: white;
}
.container h4 {
  font-family: "Arial";
  font-weight: 500;
  font-size: 17.5px;
  margin-left: 20px;
  margin-top: -25px;
  opacity: 0.7;
  color: white;
}
.container1 {
  margin-top: 0px;
  height: 69px;
  width: 100%;
  background-color: #249bc3;
  border: none;
}
.dropbtn {
  background-color: #249bc3;
  color: white;
  padding: 16px;
  font-size: 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 50%;
  border-radius: 7px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  padding: 5px;
  font-weight: 300;
  font-family: Arial;
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-size: 17px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #045874;
}

ul li {
  cursor: pointer;
  position: relative;
  font-size: 18px;
  transition: 0.2s;
}

ul {
  margin-left: -40px;
}

.header {
  display: flex;
  align-items: center;
  background-color: #aedefc;
}

.menu-btn {
  display: none;
}

.header h1 {
  margin-left: 30px;
  font-family: "Arial";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
}
.header .menu-icon {
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
}
.TaskList input[type="checkbox"] {
  margin-top: 15px;
  margin-left: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 2px;
}
.TaskList h4 {
  font-family: "Arial";
  font-weight: 400;
  font-size: 20px;
  margin-left: 50px;
  margin-top: -30px;
}
.TaskList h3 {
  font-family: "Arial";
  font-weight: 400;
  font-size: 18px;
  margin-left: 50px;
  margin-top: -30px;
  opacity: 0.7;
  margin-bottom: 0px;
}
.vl {
  height: 600px;
  position: absolute;
  left: 50%;
  margin-left: 0px;
  top: 70px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.dueDate h2 {
  font-family: "Arial";
  font-size: 18px;
  margin-left: 8px;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
  }

  .header h1 {
    text-align: center;
  }
  .menu-btn {
    display: block;
  }

  .header .menu-icon {
    display: none;
  }
}
</style>
