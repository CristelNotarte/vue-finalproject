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
  <div class="container3">
    <a href="/NewTask">
      <button id="addButton">New Task</button>
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

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

.container h3 {
  font-family: "Arial";
  font-weight: 500;
  font-size: 22px;
  margin-left: 20px;
  margin-top: 15px;
  color: white;
}

.container1 {
  margin-top: -63px;
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

#addButton {
  padding: 10px;
  font-family: "Arial";
  font-size: 17px;
}
.container3 {
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
