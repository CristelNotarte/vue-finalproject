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
        <a style="color: black; text-decoration: none" href="/ViewTask">
          <h4>Differentials</h4>
          <h3>Mathematics Assignment</h3>
        </a>
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
    <div class="container1"></div>

    <form class="form">
      <label for="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="sub"
        placeholder=""
        style="width: 150%"
      />

      <label for="type">Type</label>
      <select name="type" id="typeofTask" style="width: 90%">
        <option value="Assignment">Assignment</option>
        <option value="Project">Project</option>
      </select>
      <label for="date">Due Date</label>
      <input
        type="text"
        id="dueDate"
        name="date"
        placeholder=""
        style="width: 130%"
      />
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="Title"
        placeholder=""
        style="width: 150%"
      />
      <label for="describe">Description</label>
      <div class="description">
        <textarea
          id="subject"
          name="subject"
          placeholder=""
          style="
            height: 60px;
            width: 150%;
            margin-left: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 5px;
          "
        ></textarea>
      </div>
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </form>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

.title11 {
  font-family: Arial;
  font-size: 20px;
  padding: 0px;
  position: absolute;
  left: 3%;
  top: 10px;
  font-size: 22px;
  color: white;
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

#save {
  padding: 7px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: 15%;
  margin-left: 114%;
}

#cancel {
  padding: 6px;
  font-family: "Arial";
  font-size: 14px;
  margin-top: -17.5%;
  margin-left: 150%;
  float: left;
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

/* .container1 {
  border-style: solid;
  border-width: 1px;
  height: 350px;
  width: 40%;
  margin-bottom: 10px;
} */

.container {
  border-style: solid;
  border: 1px solid #807979;
  height: 530px;
  width: 27%;
  position: absolute;
  top: 15%;
  left: 63%;
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

.container1 {
  margin-top: 0px;
  position: relative;
  height: 57px;
  width: 100%;
  border: 0px;
  background-color: #249bc3;
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
  border-left: 1px solid black;
  height: 90%;
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
</style>
