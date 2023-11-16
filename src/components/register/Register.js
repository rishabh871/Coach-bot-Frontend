import {React,useState} from "react";
import "../../components/register/Register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authslice";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate =useNavigate()

  const [userRegister, setUserRegister] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  console.log(userRegister,"useregister")


  const handleChange = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };

  const disptach = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    // You can add your registration logic here
    disptach(registerUser({userRegister,navigate}));
  };
  return (
    <>
      <div >
        <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins bg_register">
          <div class="wrapper wrapper--w780">
            <div class="card card-3">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Registration Info</h2>
                <form  onSubmit={handleRegister}>
                  <div class="input-group">
                    <input class="input--style-3" type="text" placeholder="username" name="Username" onChange={handleChange} />
                  </div>
                  {/* <div class="input-group">
                    <input class="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthday" />
                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div> */}
                  {/* <div class="input-group">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select name="gender">
                        <option disabled="disabled" selected="selected">
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
                  </div> */}
                  <div class="input-group">
                    <input class="input--style-3" type="email" placeholder="Email" name="Email" onChange={handleChange} />
                  </div>
                  <div class="input-group">
                    <input class="input--style-3" type="password" placeholder="password" name="Password" onChange={handleChange} />
                  </div>
                  <div class="p-t-10">
                    <button class="btn btn--pill btn--green" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
