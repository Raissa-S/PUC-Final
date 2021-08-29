import React, { Component } from "react";
import "../styles/Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      isLoggedIn: false,
      pin: "",
      level: "",
      semester: "",
      year: "",
      courseRegistrationError: "",
      redirectToLogin: false,
    };

    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    let credUser1 = ["PUC/180108", "PUC/180108"];
    let credUser2 = ["PUC/180000", "PUC/180000"];

    sessionStorage.setItem("credUser1", JSON.stringify(credUser1));
    sessionStorage.setItem("credUser2", JSON.stringify(credUser2));
  }

  getFields = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  signIn = (e) => {
    e.preventDefault();

    let credUser1 = JSON.parse(sessionStorage.getItem("credUser1"));
    let credUser2 = JSON.parse(sessionStorage.getItem("credUser2"));

    if (this.state.username.length < 1 || this.state.password.length < 1) {
      this.setState({ errorMessage: "Please enter Username and Pin" });
      return;
    }

    if (
      this.state.username !== credUser2[0] ||
      this.state.password !== credUser2[0]
    ) {
      if (
        this.state.username !== credUser1[0] ||
        this.state.username !== credUser1[0]
      ) {
        this.setState({ errorMessage: "Username or password incorrect" });
      }
    }

    if (
      this.state.username === credUser2[0] ||
      this.state.username === credUser2[1]
    ) {
      this.setState({ isLoggedIn: true });
    }

    if (
      this.state.username === credUser1[0] ||
      this.state.username === credUser1[1]
    ) {
        let usernameField = document.querySelector('#inputEmail4')
        let passwordField = document.querySelector('#inputPassword4')


            usernameField.value = '';
            passwordField.value = ''


      this.setState({ isLoggedIn: true , username: '', password:''});
        
     
    }

    console.log(credUser2[1], credUser1);
  };

  register = (e) => {
    e.preventDefault();

    let { pin, level, semester, year } = this.state;

    if (
      pin.length < 1 ||
      level.length < 1 ||
      semester.length < 1 ||
      year.length < 1
    ) {
      this.setState({ courseRegistrationError: "Please fill all fields" });
      return;
    }

    this.setState({
      redirectToLogin: true,
      isLoggedIn: !this.state.isLoggedIn,
      
    });
  };

  render() {
    return (
      <>
        <form
          style={{ display: this.state.isLoggedIn ? "none" : "block" }}
          className="loginContainer"
        >
          <div style={{display : this.state.redirectToLogin ? "block": 'none'}}
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            You've Successfully Registered your course
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h2>Login</h2>
          <hr />
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Username</label>
              <input
                name="username"
                onInput={this.getFields}
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Username"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Pin</label>
              <input
                name="password"
                onInput={this.getFields}
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Pin"
              />
            </div>
          </div>
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          <button onClick={this.signIn} class="btn btn-primary">
            Sign in
          </button>
        </form>

        <form
          style={{ display: this.state.isLoggedIn ? "grid" : "none" }}
          className="loginContainer"
        >
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Login Successful
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <h2>Course Registration</h2>
          <hr />

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Academic year
              </label>
            </div>
            <select
              onInput={this.getFields}
              name="year"
              class="custom-select"
              id="inputGroupSelect01"
            >
              <option selected>Choose...</option>
              <option value="2019/2020">2019/2020</option>
              <option value="2020/2021">2020/2021</option>
              <option value="2021/2022">2021/2022</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">
                Semester/Trimester
              </label>
            </div>
            <select
              onInput={this.getFields}
              name="semester"
              class="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Choose...</option>
              <option value="1st Sem">1st Semester</option>
              <option value="2nd Sem">2nd Semester</option>
              <option value="1st Tri">1st Trimester</option>
              <option value="2nd Tri">2nd Trimester</option>
              <option value="3rd Tri">3rd Trimester</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect03">
                Level
              </label>
            </div>
            <select
              onInput={this.getFields}
              name="level"
              class="custom-select"
              id="inputGroupSelect03"
            >
              <option selected>Choose...</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="300">400</option>
            </select>
          </div>

          <div class="form-group col-md-12 cS">
            <label for="inputEmail5">Pin</label>
            <input
              name="pin"
              onInput={this.getFields}
              type="email"
              class="form-control"
              id="inputEmail5"
              placeholder="Pin"
            />
          </div>
          <p style={{ color: "red" }}>{this.state.courseRegistrationError}</p>
          <button onClick={this.register} class="btn btn-primary">
            Sign in
          </button>
        </form>
      </>
    );
  }
}

export default Login;
