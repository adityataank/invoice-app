function LineItemInput({
  name = "",
  value,
  type = "",
  handleChange = () => {},
  readOnly = false,
}) {
  const onChange = (e) => {
    if (e) {
      const name = e.target.name;
      const value = e.target.value;
      if (type === "number") {
        if (/^\d+$/.test(value) || value === "") {
          handleChange({ name, value });
        }
      } else {
        handleChange({ name, value });
      }
    }
  };

  return (
    <input
      readOnly={readOnly}
      name={name}
      value={value}
      onChange={onChange}
      inputMode="numeric"
      type="text"
      className="w-full h-8 border border-gray-500 rounded-md outline-1 outline-primary-color px-4"
    />
  );
}

export default LineItemInput;
