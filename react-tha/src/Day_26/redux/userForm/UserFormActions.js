import { updateFirstName, updateLastName } from "./UserFormAction";
export const updateFirstNameInput = (input) => {
  "updateFirstNameInput";
  return {
    type: updateFirstName,
    payLoad: input,
  };
};
export const updateLastNameInput = (input) => {
  "updateLastNameInput";
  return {
    type: updateLastName,
    payLoad: input,
  };
};
