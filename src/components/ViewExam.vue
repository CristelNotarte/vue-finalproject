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
        <a href="Exams">Exam</a>
      </div>
    </div>
    <h1>Exams</h1>
  </div>
  <div class="dueDate">
    <h2>November 2022</h2>
  </div>
  <hr style="width: 50%; display: inline-block; margin-top: -20px" />
  <ul id="myUL">
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first" />
        <a style="color: black; text-decoration: none" href="/ViewExam">
          <h4>Mathematics: Lesson 1.1 - 1.3</h4>
          <h3>9:00 AM November 29</h3>
        </a>

        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first1" />
        <h4>Science: Module 1</h4>
        <h3>2:00 PM November 29</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <div class="dueDate">
      <h2>December 2022</h2>
    </div>
    <hr style="width: 50%; display: inline-block; margin-top: -20px" />

    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Mathematics: Lesson 1.3 - 2.2</h4>
        <h3>1:00 PM December 2</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>

    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Web Systems: Module 1 and Module 2</h4>
        <h3>4:00 PM December 6</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>

    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Data Mining: Module 2</h4>
        <h3>4:00 PM December 8</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
    <li>
      <div class="TaskList">
        <input type="checkbox" id="first2" />
        <h4>Software Engineering: Module 4</h4>
        <h3>11:00 AM December 15</h3>
        <hr style="width: 50%; display: inline-block; margin-top: 15px" />
      </div>
    </li>
  </ul>
  <div class="vl"></div>

  <div class="container">
    <div class="container1">
      <span class="close">+</span>
    </div>
    <div class="title1">Mathematics</div>

    <form class="form">
      <img src="calendar-alt-regular.svg" />
      <h5>9:00 AM, November 19</h5>
      <hr style="width: 99.5%; margin-top: -10px; width: 112%" />
      <img src="clock-regular.svg" />
      <h5>60 minutes</h5>
      <hr style="width: 99.5%; margin-top: -20px; width: 112%" />
      <img src="location-dot-solid.svg" />
      <h5>DCST (Room 101)</h5>
      <button id="completeButton">Mark Complete</button>
    </form>
  </div>
</template>

<style scope>
.title1 {
  font-family: Arial;
  font-size: 20px;
  padding: 0px;
  position: absolute;
  left: 3%;
  top: 10px;
  font-size: 22px;
  color: white;
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
.container5 {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-decoration: none;
  position: relative;
  left: 950px;
  top: -230px;
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

.container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-decoration: none;
  position: relative;
  left: 950px;
  top: -230px;
}
.header {
  display: flex;
  align-items: center;
  background-color: #aedefc;
  height: 63px;
}

.header menu-btn {
  display: none;
}

.header h1 {
  margin-left: 33px;
  margin-top: 16px;
  font-family: "Arial";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
}
.header .menu-icon {
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 30px;
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
  margin-top: -27px;
  opacity: 0.7;
  margin-bottom: 0px;
}
.vl {
  border-left: 1px solid black;
  height: 600px;
  position: absolute;
  left: 50%;
  margin-left: 0px;
  top: 70px;
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
.dueDate h2 {
  font-family: "Arial";
  font-size: 18px;
  margin-left: 8px;
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

#completeButton {
  padding: 6px;
  font-family: "Arial";
  font-size: 14px;
  position: relative;
  margin-top: -30px;
  margin-left: 310px;
  margin-bottom: 8px;
}

.form img {
  height: 22px;
  width: 22px;
  margin-top: 23px;
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
  margin-top: -25px;
  margin-left: 65px;
  margin-bottom: 40px;
}

.container {
  border-style: solid;
  border: 1px solid #807979;
  height: 355px;
  width: 35%;
  position: absolute;
  top: 25%;
  left: 58.5%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
}
.container h3 {
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
}
</style>
