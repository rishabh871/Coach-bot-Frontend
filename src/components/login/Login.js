import {React,useState} from "react";
import "../../components/login/Login.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginWithEmail } from "../../redux/auth/authslice";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginWithEmail({ formData, navigate }));
  };
  return (
    <div>
      <div>
        <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins bg_register">
          <div class="wrapper wrapper--w780">
            <div class="card card-3">
              <div class="card-heading"></div>
              <div class="card-body">
                <h2 class="title">Login Info</h2>
                <form onSubmit={handleLogin}>
                  {/* <div class="input-group">
                    <input class="input--style-3" type="text" placeholder="username" name="username"/>
                  </div> */}
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
                    <input class="input--style-3" type="email" placeholder="Email" name="Email" onChange={handleInputChange} />
                  </div>
                  <div class="input-group">
                    <input class="input--style-3" type="password" placeholder="password" name="Password" onChange={handleInputChange} />
                  </div>
                  <div class="p-t-10">
                    <button class="btn btn--pill btn--green" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
