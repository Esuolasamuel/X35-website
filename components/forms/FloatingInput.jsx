export function FloatingInput({
  label,
  name,
  type = "text",
}) {
  return (
    <div className="relative">
      <input
        required
        name={name}
        type={type}
        className="peer w-full px-4 pt-6 pb-2 border border-gray-300 font-body  text-dark-500 rounded-md sm:rounded-md sm:rounded-md sm:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl md:rounded-xl lg:rounded-2xl md:rounded-xl lg:rounded-2xl md:rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-yellow-700 outline-none"
      />
      <label
        className="
          absolute left-4 top-4 text-dark-500 text-sm
          transition-all
          font-body
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-yellow-400
          peer-valid:top-2 peer-valid:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
