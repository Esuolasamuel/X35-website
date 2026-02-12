export function FloatingInput({
  label,
  name,
  type = "text",
  required = false,
}) {
  return (
    <div className="relative w-full max-w-124.75 h-[46.5px]">
      <input
        required={required}
        name={name}
        type={type}
        placeholder=" "
        className="
          peer
          w-full h-full
          px-4 py-3.5
          border border-[#BDBDBD]
          rounded-md
          font-body text-base text-dark-500
          outline-none
          focus:ring-2 focus:ring-yellow-400/50
        "
      />

      <label
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          text-sm text-dark-500
          transition-all
          peer-focus:top-2 peer-focus:text-xs
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2
        "
      >
        {label}
      </label>
    </div>
  );
}
