import { Admin_FAILURE, Admin_REQUEST, Admin_SUCCESS } from "./Admin_Types.js";

const initialState = {
  AdminData: [],
  totalPages: null,
  isLoading: false,
  isError: false,
};

const Admin_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Admin_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        AdminData: payload.products,
        totalPages: payload.totalPages,
      };
    }
    case Admin_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case Admin_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }


    case AdminDelete_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AdminDelete_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminDelete_SUCCESS: {
      // const deleted_product = state.AdminData.filter(
      //   (item) => item.id !== payload
      // );
      return {
        ...state,
        // AdminData: deleted_product,
        // deletedID: payload,
        isLoading: false,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};

export { Admin_reducer };
