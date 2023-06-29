import "./styles.css";

import Select from "react-select";

import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";


import { useForm, Controller, useController } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { addToEmployeesList } from "../../store/employeesSlice";

import { states, departments } from "../../variables";

const Form = ({ setModalIsOpen }) => {

  const dispatch = useDispatch();
  const subForm = (data) => {
    setModalIsOpen(true);
    dispatch(addToEmployeesList(data));
  };

  const { register, handleSubmit, control, formState } = useForm();
  const {
    field: { value: stateValue, onChange: stateOnChange, ...restStateField },
  } = useController({ name: "state", control });

  const {
    field: {
      value: departmentValue,
      onChange: departmentOnChange,
      ...restDepartmentField
    },
  } = useController({ name: "department", control });

  const { errors } = formState;

  // const cart = useSelector((state) => state.cart);

  return (
    <form onSubmit={handleSubmit(subForm)}>
      <div className="labelContainer">
        <label htmlFor="firstname">First Name</label>
        <input
          className={errors.firstname?.message ? "errorInput" : "input"}
          id="firstname"
          type="text"
          placeholder="Théodore"
          enterKeyHint="next"
          {...register("firstname", {
            required: "please provide this field",
            // pattern: {
            //   value:
            //     /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
            //   message: "please provide valid data",
            // },
          })}
        />
        <p className="errorMessage">{errors.firstname?.message}</p>
      </div>
      <div className="labelContainer">
        <label htmlFor="lastname">Last Name</label>
        <input
          className={errors.lastname?.message ? "errorInput" : "input"}
          id="lastname"
          type="text"
          placeholder="Kaczynski"
          enterKeyHint="next"
          {...register("lastname", {
            required: "please provide this field",
            // pattern: {
            //   value:
            //     /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
            //   message: "please provide valid data",
            // },
          })}
        />
        <p className="errorMessage">{errors.lastname?.message}</p>
      </div>

      <div className="labelContainer">
        <label htmlFor="birthdate">Birth Date</label>
        {/* <input
          type="date"
          id="birthdate"
          className={errors.birthdate?.message ? "errorInput" : "input"}
          enterKeyHint="next"
          {...register("birthdate", {
            required: "please provide this field",
          })}
        ></input>
        <p className="errorMessage">{errors.birthdate?.message}</p> */}

        <Controller
          control={control}
          name="birthdate"
          rules={{ required: true }} //optional
          render={({
            field: { onChange, name, value },
            formState: { errors }, //optional, but necessary if you want to show an error message
          }) => (
            <>
              <div>
                <DatePicker
                  placeholder=""
                  value={value || ""}
                  onChange={(date) => {
                    onChange(date?.isValid ? date : "");
                  }}
                />
              </div>
              {errors && errors[name] && errors[name].type === "required" && (
                <p className="errorMessage">Veuillez saisir une date valide</p>
              )}
            </>
          )}
        />
      </div>

      <div className="labelContainer">
        <label htmlFor="startDate">Start Date</label>
        {/* <input
          type="date"
          id="startDate"
          className={errors.startDate?.message ? "errorInput" : "input"}
          enterKeyHint="next"
          {...register("startDate", {
            required: "please provide this field",
          })}
        ></input> */}

        <Controller
          control={control}
          name="startDate"
          rules={{ required: true }} //optional
          render={({
            field: { onChange, name, value },
            formState: { errors }, //optional, but necessary if you want to show an error message
          }) => (
            <>
              <div>
                <DatePicker
                  placeholder=""
                  value={value || ""}
                  onChange={(date) => {
                    onChange(date?.isValid ? date : "");
                  }}
                />
              </div>
              {errors && errors[name] && errors[name].type === "required" && (
                <p className="errorMessage">Veuillez saisir une date valide</p>
              )}
            </>
          )}
        />

        <p className="errorMessage">{errors.startDate?.message}</p>
      </div>

      <fieldset>
        <legend>Address</legend>

        <div className="labelContainer">
          <label htmlFor="street">Street</label>
          <input
            className={errors.street?.message ? "errorInput" : "input"}
            id="street"
            type="text"
            placeholder="your street"
            enterKeyHint="next"
            {...register("street", {
              required: "please provide this field",
              pattern: {
                value: /^\s*\S+(?:\s+\S+){2}/,
                message: "please provide valid data",
              },
            })}
          />
          <p className="errorMessage">{errors.adress?.message}</p>
        </div>

        <div className="labelContainer">
          <label htmlFor="city">City</label>
          <input
            className={errors.city?.message ? "errorInput" : "input"}
            id="city"
            type="text"
            placeholder="your city"
            enterKeyHint="next"
            {...register("city", {
              required: "please provide this field",
              // pattern: {
              //   value:
              //     /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
              //   message: "please provide valid data",
              // },
            })}
          />
          <p className="errorMessage">{errors.city?.message}</p>
        </div>

        <div className="labelContainer">
          <label htmlFor="state">State</label>
          <Select
            className="select-input"
            placeholder="Select your state"
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.abbreviation}
            isClearable
            id="state"
            options={states}
            value={
              stateValue
                ? states.find((x) => x.name === stateValue)
                : stateValue
            }
            onChange={(option) => stateOnChange(option ? option.name : option)}
            {...restStateField}
          />
          <p className="errorMessage">{errors.state?.message}</p>
          {/* <Select
            options={states}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.abbreviation}
          /> */}
        </div>

        <div className="labelContainer">
          <label htmlFor="zip-code">Zip Code</label>
          <input
            className={errors.zipCode?.message ? "errorInput" : "input"}
            id="zipCode"
            type="text"
            placeholder="100001"
            enterKeyHint="next"
            {...register("zipCode", {
              required: "please provide this field",
              pattern: {
                value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                message: "please provide valid data",
              },
            })}
          />
          <p className="errorMessage">{errors.zipCode?.message}</p>
        </div>
      </fieldset>

      <div className="labelContainer">
        <label htmlFor="departments">Departments</label>
        <Select
          className="select-input"
          placeholder="Select your department"
          isClearable
          id="departments"
          options={departments}
          value={
            departmentValue
              ? departments.find((x) => x.label === departmentValue)
              : departmentValue
          }
          onChange={(option) =>
            departmentOnChange(option ? option.label : option)
          }
          {...restDepartmentField}
        />
        <p className="errorMessage">{errors.departments?.message}</p>
      </div>

      <button type="submit" className="submit ">
        Save
      </button>
      <DevTool control={control} />
    </form>
  );
};

export default Form;
