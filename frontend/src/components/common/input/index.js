export default function TodoInput({
  title,
  target,
  value,
  onDataHandler,
  placeholder,
  containerClass,
  inputClass,
  error,
}) {
  return (
    <div className={`${containerClass} flex flex-col items-start gap-1 w-full`}>
      <label className="text-lg font-medium text-gray-700">{title}</label>
      <input
        value={value}
        onChange={(e) => onDataHandler(target, e.target.value)}
        placeholder={placeholder}
        type={"text"}
        className={`${inputClass} bg-[#FAFAFA] border border-[#CBCBCB] outline-none rounded-md text-lg placeholder:text-sm py-2 px-1 w-full`}
      />
      {error && (
        <span className="text-sm font-medium text-red-700">{error}</span>
      )}
    </div>
  );
}
