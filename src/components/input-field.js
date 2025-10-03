export default function InputField({
  name,
  onChange,
  onBlur,
  value,
  type,
  placeholder,
  borderStyle = "solid",
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      className="text-[18px] leading-[21px] font-medium  focus:outline-none placeholder:text-[18px] placeholder:leading-[21px] placeholder:font-medium placeholder:text-[#7E7E7E] w-full"
    />
  );
}
