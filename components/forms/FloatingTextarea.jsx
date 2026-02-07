export function FloatingTextarea({ label, name }) {
  return (
    <div className="relative">
      <textarea
        required
        name={name}
        rows={4}
        className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg font-body text-sm md:text-base lg:text-[17px]  text-dark-500 focus:ring-2 focus:ring-yellow-700 outline-none resize-none"
      />
      <label
        className="
          absolute left-4 top-4 text-sm
          transition-all
          font-body
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-yellow-400
          peer-valid:top-2 peer-valid:text-xs text-dark-500
        "
      >
        {label}
      </label>
    </div>
  );
}
