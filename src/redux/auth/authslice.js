import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, getBusdAbi, getBusdContract, setToken, setUserId, setUserRole } from "../../common/common";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  userDetails: {},
  addWalletToggle: false,
  addWalletAddress: [],
  allWalletAddress:{},
  userprofiledata:[]
};

export const LoginWithEmail = createAsyncThunk("counter/LoginWithEmail", async ({ formData, navigate, thunkAPI }) => {
  console.log(formData, "formdaata");
  const param = {
    Email: formData?.Email,
    Password: formData?.Password,
  };
  console.log(param, "param");

  try {
    const res = await axios.post(`${BASE_URL}/Signin`, param);
    if (res.data.body.token) {
      console.log(res,'resresresres');
      setToken(res.data.body.token);
      setUserRole(res.data.body.role);
      setUserId(res.data.body.user_id)
      toast.success("User Logged in successfully");
      navigate("/");
      return res.data;
    } 
    else 
     {
      toast.error("user not found")
    console.log("errorrr")
    }
  } catch (error) {
    toast.error("Please login with correct username password");
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const registerUser = createAsyncThunk("counter/registerUser", async ({userRegister,navigate, thunkAPI}) => {
  console.log(userRegister, "dataaa");
  const param = userRegister;
  // const navigate = data.navigate;
  try {
    const res = await axios.post(`${BASE_URL}/Signup`, param);
    if (!(res.status === 200 || res.status === 201)) {
      return thunkAPI.rejectWithValue(res.data.message);
    } else {
      toast.success("User Register Successfully");
      navigate("/login");
      return res.data;
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllNft = createAsyncThunk("counter/getAllNft", async (data, thunkAPI) => {
  const { callBack } = data;
  try {
    const res = await axios.get(`${BASE_URL}/getAllNft`);
    if (!(res.status === 200 || res.status === 201)) {
      return thunkAPI.rejectWithValue(res.data.message);
    } else {
      if (callBack) callBack(res.data.body);
      return res.data.body;
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const AddWalletAddress = createAsyncThunk("counter/AddWalletAddress", async (data, thunkAPI) => {
  console.log(data, "dataaa");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const param = {
    enc:  data,
  };
  // const navigate = data.navigate;
  try {
    const res = await axios.post(`${BASE_URL}/addWallet`, param, requestOptions);
    if (!(res.status === 200 || res.status === 201)) {
      return thunkAPI.rejectWithValue(res.data.message);
    } else {
      toast.success("Add Address Successfully");
      return res?.data;
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const buyToken = createAsyncThunk("counter/buyToken", async (data, thunkAPI) => {
  console.log(data, "dataaa");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const param = {
    enc:  data,
  };
  // const navigate = data.navigate;
  try {
    const res = await axios.post(`${BASE_URL}/buyToken`, param, requestOptions);
    if (!(res.status === 200 || res.status === 201)) {
      return thunkAPI.rejectWithValue(res.data.message);
    } else {
      toast.success(" Buy Token Successfully");
      return res?.data;
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});




export const getAllWalletAddress = createAsyncThunk("counter/getAllWalletAddress",async (thunkAPI) => {

  const id=localStorage.getItem("userId")
  
    try {
      const res = await axios.get(`${BASE_URL}/getWalletById/${id}`);
      if (!(res.status === 200 || res.status === 201)) {
        return thunkAPI.rejectWithValue(res.data.message);
      } else {
        return res.data
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const getUserprofile = createAsyncThunk("counter/getUserprofile",async (thunkAPI) => {

  const id=localStorage.getItem("userId")
  
    try {
      const res = await axios.get(`${BASE_URL}/UserProfile/${id}`);
      if (!(res.status === 200 || res.status === 201)) {
        return thunkAPI.rejectWithValue(res.data.message);
      } else
       {
        return res.data.body
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    categoryadd: (state, action) => {
      state.category = action.payload;
    },
    setAddWalletToggle: (state, actions) => {
      state.addWalletToggle = actions.payload;
    },
  },

  extraReducers: {
    [LoginWithEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [LoginWithEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    },
    [LoginWithEmail.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [AddWalletAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [AddWalletAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.addWalletAddress = action.payload;
    },
    [AddWalletAddress.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getAllWalletAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllWalletAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allWalletAddress = action.payload;
    },
    [getAllWalletAddress.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getUserprofile.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserprofile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userprofiledata = action.payload;
    },
    [getUserprofile.rejected]: (state, action) => {
      state.isLoading = false;
  },
  [buyToken.pending]: (state) => {
    state.isLoading = true;
  },
  [buyToken.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.allWalletAddress = action.payload;
  },
  [buyToken.rejected]: (state, action) => {
    state.isLoading = false;
  },
}
});

// Action creators are generated for each case reducer function
export const { categoryadd, setAddWalletToggle } = counterSlice.actions;

export default counterSlice.reducer;
