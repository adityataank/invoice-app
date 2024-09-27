import React from "react";
import { cn } from "../lib/utils";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function Input(props) {
  const {
    label = "",
    type = "text",
    options = [],
    name = "",
    value = "",
    onChange = () => {},
  } = props;

  const handleSelectChange = (value) => {
    onChange({
      target: {
        name,
        value: value,
      },
    });
  };

  const handleDateChange = (value) => {
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  const inputClass =
    "border py-3 px-4 border-gray-300 outline-none rounded-md transition-colors hover:border-neutral-400 focus:border-primary-color";

  const INPUT_ELEMENT = {
    text: (
      <input
        value={value}
        name={name}
        onChange={onChange}
        spellCheck={false}
        className={inputClass}
        {...props}
      />
    ),
    textarea: (
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        spellCheck={false}
        className={cn("h-32 resize-none", inputClass)}
      />
    ),
    select: (
      <ReactSelect
        name={name}
        value={value}
        options={options}
        onChange={handleSelectChange}
        noOptionsMessage={() => (
          <Link to={"/clients/new"} className="underline text-blue-600">
            + Create a new client
          </Link>
        )}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: "50px",
            borderColor: state.isFocused && "#7b61ff",
            boxShadow: "none",
          }),
        }}
      />
    ),
    date: (
      <DatePicker
        value={value}
        clearIcon={false}
        onChange={handleDateChange}
        className={"h-[50px] w-full datePicker"}
        minDate={new Date()}
      />
    ),
  };
  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg font-medium">{label}</label>
      {INPUT_ELEMENT[type]}
    </div>
  );
}

export default Input;
