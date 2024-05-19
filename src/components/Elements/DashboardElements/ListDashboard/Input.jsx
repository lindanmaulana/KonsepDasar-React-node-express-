const Input = (props) => {
  const { type, placeholder, handleChange, name } = props;
  return <input type={type} name={name} placeholder={placeholder} className="px-2 py-1 text-black rounded-sm outline-green-600" onChange={handleChange}/>;
};

export default Input;
