export default function TextInput({
  name,
  type,
  placeholder,
  handleOnChange,
  error,
}) {
  return (
    <div className="items-start form-control">
      <label className="label">
        <span className="label-text">{name}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full input input-bordered"
        onChange={handleOnChange}
      />
      <span className="px-1 mt-1 text-xs text-error">
        {error[name] && null}
      </span>
    </div>
  );
}
