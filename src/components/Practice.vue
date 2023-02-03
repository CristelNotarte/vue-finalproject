<template>
  <!-- <div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
      <a href="Tasks">Task</a>
      <a href="/Exams">Exam</a>
    </div>
  </div> -->

  <div class="container">
    <h3>Differentials</h3>
    <h4>Mathematics Assignment</h4>

    <div class="container1">
      <span class="close">+</span>
    </div>

    <form class="form">
      <img src="calendar-alt-regular.svg" />
      <h5>Due Tuesday, November 8</h5>
      <h6>Overdue by 15 days</h6>
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

<script>
import { ref, reactive, h } from "vue";
</script>

<style scoped>
/* .dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
  background-color: #3e8e41;
} */
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
  margin-top: 5%;
  margin-left: 75%;
}
.form img {
  height: 22px;
  width: 22px;
  margin-top: 28px;
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
  margin-top: -33px;
  margin-left: 65px;
}
.form h6 {
  font-family: "Arial";
  font-weight: 545;
  font-size: 15px;
  color: #ff0000;
  margin-top: -28px;
  margin-left: 65px;
}
.container {
  border-style: solid;
  border-width: 1px;
  height: 350px;
  width: 40%;
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
  margin-top: -82px;
  height: 69px;
  width: 100%;
  background-color: #249bc3;
}

/* input[type="text"], select, textarea { width: 100%; padding: 12px; border: 1px
solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px;
margin-bottom: 16px; resize: vertical; } input[type="submit"] {
background-color: #04aa6d; color: white; padding: 12px 20px; border: none;
border-radius: 4px; cursor: pointer; } input[type="submit"]:hover {
background-color: #45a049; } .container { border-radius: 5px; background-color:
#f2f2f2; padding: 20px; } */
</style>
