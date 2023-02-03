<script setup>
import { ref } from "vue";
</script>

<template>
  <body>
    <div class="box">
      <form class="login-form">
        <h1>Create Account</h1>
        <input type="text" name="FirstName" placeholder="First Name" required />
        <input type="text" name="LastName" placeholder="Last Name" required />
        <input type="text" name="Email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div class="condition">
          <input type="checkbox" id="Condition" name="Condition" />
          <h4>I agree to the Terms and Conditions</h4>
        </div>

        <div class="links">
          <a href="/Tasks"> <input type="button" value="Sign Up" /></a>
        </div>
      </form>
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
.box {
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-color: #e6bbad;
  background-size: cover;
  height: 100vh;
}
.login-form {
  width: 350px;
  height: 600px;
  left: 789px;
  border-radius: 24px;
  padding: 15px;
  background-color: #aedefc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.login-form h1 {
  text-align: center;
  font-family: "Montserrat";
  margin-top: 70px;
}

.login-form input[type="text"] {
  margin-top: 0px;
}
.login-form input[type="password"] {
  margin-top: 10px;
}
input {
  outline: none;
}

.condition h4 {
  font-size: 13px;
  font-family: "Montserrat";
  margin-left: 58px;
  margin-top: -17px;
}

.condition input[type="checkbox"] {
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
  margin-left: 24px;
}
.links {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-decoration: none;
}
.links > a:first-of-type {
  margin-right: 5px;
}
.links > a {
  margin-left: 80px;
  margin-top: 30px;
  font-family: "Montserrat";
  font-size: 15px;
  text-decoration: none;
}
.links > a:hover {
  opacity: 0.6;
}

.login-form input[type="submit"] {
  background: linear-gradient(135deg, #fff886 0%, #f072b6 100%);
  color: rgb(0, 0, 0);
  border: none;
  margin-top: 17px;
  cursor: pointer;
  padding: 10px;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: bold;
  border-radius: 24px;
  transition: 0.25s;
  width: 155px;
  height: 37px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 0px;
}
.login-form input[type="submit"]:hover {
  opacity: 0.8;
}
.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
  border: 2px #21d4fd solid;
}
.login-form input[type="text"],
.login-form input[type="password"] {
  width: 315px;
  height: 40px;
  border: none;
  border-radius: 24px;
  font-family: "Montserrat";
  font-size: 1rem;
  font-family: "Raleway", sans-seriff;
  background-color: white;
  padding: 15px;
  margin-top: 15px;
}

.links input[type="button"] {
  background: linear-gradient(135deg, #fff886 0%, #f072b6 100%);
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: bold;
  border-radius: 24px;
  transition: 0.25s;
  width: 155px;
  height: 37px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 20px;
}
</style>
