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
    <h1>Exam</h1>
  </div>
  <div class="dueDate">
    <h2>November 2022</h2>
  </div>
  <hr style="width: 50%; display: inline-block; margin-top: -20px" />
  <div class="TaskList">
    <input type="checkbox" id="first" />
    <h4>Mathematics: Lesson 1.1 - 1.3</h4>
    <h3>9:00 AM November 29</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="TaskList">
    <input type="checkbox" id="first1" />
    <h4>Science: Module 1</h4>
    <h3>2:00 PM November 29</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="dueDate">
    <h2>December 2022</h2>
  </div>
  <hr style="width: 50%; display: inline-block; margin-top: -20px" />
  <div class="TaskList">
    <input type="checkbox" id="first2" />
    <h4>Mathematics: Lesson 1.3 - 2.2</h4>
    <h3>1:00 PM December 2</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="TaskList">
    <input type="checkbox" id="first2" />
    <h4>Web Systems: Module 1 and Module 2</h4>
    <h3>4:00 PM December 6</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="TaskList">
    <input type="checkbox" id="first2" />
    <h4>Data Mining: Module 2</h4>
    <h3>4:00 PM December 8</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="TaskList">
    <input type="checkbox" id="first2" />
    <h4>Software Engineering: Module 4</h4>
    <h3>11:00 AM December 15</h3>
    <hr style="width: 50%; display: inline-block; margin-top: 15px" />
  </div>
  <div class="vl"></div>
  <div class="container">
    <h3>New Exam</h3>

    <div class="container1">
      <div class="top">New Exam</div>
    </div>

    <form class="form">
      <label for="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="sub"
        placeholder=""
        style="width: 150%"
      />

      <label for="date">Exam Coverage</label>
      <input
        type="text"
        id="dueDate"
        name="date"
        placeholder=""
        style="width: 150%"
      />
      <label for="title">Date</label>
      <input
        type="text"
        id="title"
        name="Title"
        placeholder=""
        style="width: 120%"
      />
      <label for="room">Room Number</label>
      <input
        type="text"
        id="roomNumber"
        name="room"
        placeholder=""
        style="width: 90%"
      />
      <div class="short">
        <label for="duration">Duration</label>
        <input
          type="text"
          id="time"
          name="duration"
          placeholder=""
          style="width: 90%"
        />
      </div>
      <h5>minutes</h5>
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </form>
  </div>
</template>

<style scoped>
.top {
  font-family: Arial;
  font-size: 20px;
  color: white;
  margin-top: 18px;
  margin-left: 10px;
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
.header {
  display: flex;
  align-items: center;
  background-color: #aedefc;
  height: 63px;
  width: 100%;
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
  height: 95%;
  position: absolute;
  left: 50%;
  margin-left: 0px;
  top: 70px;
  border: 1px solid rgba(0, 0, 0, 0.2);
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

.form h5 {
  font-family: Arial;
  font-size: 17px;
  margin-left: 70%;
  font-weight: 400;
  margin-bottom: 0%;
  margin-top: -19%;
  margin-left: 105%;
}
.form short label {
  font-family: Arial;
  margin-left: 10px;
}
.form short input[type="text"] {
  width: 50%;
  height: 28px;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#save {
  padding: 7px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: 20%;
  margin-left: 100%;
  display: inline-block;
}

#cancel {
  padding: 6px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: -17%;
  margin-left: 135%;
  float: left;
  display: block;
}
.form label {
  font-family: Arial;
  margin-left: 10px;
}

input[type="text"] {
  width: 85%;
  height: 28px;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form select {
  width: 85%;
  height: 28px;
  margin-left: 10px;
  margin-top: 4px;
  margin-bottom: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 17px;
}

#completeButton {
  padding: 6px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: 5%;
  margin-left: 75%;
}

.container {
  border-style: solid;
  border: 1px solid #807979;
  height: 475px;
  width: 25%;
  position: absolute;
  top: 18%;
  left: 63.5%;
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

.container1 {
  margin-top: -75px;
  height: 57px;
  width: 100%;
  border: 0px;
  background-color: #249bc3;
}
</style>
