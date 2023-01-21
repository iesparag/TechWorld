import axios from "axios";
import {
  AllUsers_Request,
  AllUsers_Success,
  AllUsers_Failure,
  AllUsers_Delete_REQUEST,
  AllUsers_Delete_SUCCESS,
  AllUsers_Delete_FAILURE,
  AllUsers_Patch_REQUEST,
  AllUsers_Patch_SUCCESS,
  AllUsers_Patch_FAILURE,
} from "./AllUsers.types.jsx";

export const AllUserData =
  ({ page, limit, query }) =>
  async (dispatch) => {
    console.log(page);
    dispatch({ type: AllUsers_Request });
    try {
      let res = await axios.get(
        `https://fine-cyan-millipede-boot.cyclic.app/admin/user?page=${page}&limit=${limit}&find=${query}`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
          },
        }
      );
      console.log(res.data.users);
      dispatch({ type: AllUsers_Success, payload: res.data.users });
    } catch (e) {
      dispatch({ type: AllUsers_Failure });
    }
  };

export const AllUserDelete = (id) => async (dispatch) => {
  dispatch({ type: AllUsers_Delete_REQUEST });
  try {
    await axios
      .delete(`https://fine-cyan-millipede-boot.cyclic.app/admin/user/${id}`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
        },
      })
      .then((res) => {
        console.log("response from deleteItem :-", res.data);
        dispatch({ type: AllUsers_Delete_SUCCESS, payload: id });
      });
  } catch (e) {
    dispatch({ type: AllUsers_Delete_FAILURE });
  }
};

export const AllUserPatch = (id, payload) => async (dispatch) => {
  console.log(id, payload);
  dispatch({ type: AllUsers_Patch_REQUEST });
  try {
    await axios
      .patch(
        `https://fine-cyan-millipede-boot.cyclic.app/admin/user/${id}`,
        payload,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
          },
        }
      )
      .then((res) => {
        console.log("response from deleteItem :-", res.data);
        dispatch({ type: AllUsers_Patch_SUCCESS, payload: { id, payload } });
      });
  } catch (e) {
    dispatch({ type: AllUsers_Patch_FAILURE });
  }
};
