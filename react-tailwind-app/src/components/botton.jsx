const base = "px-4 py-2 rounded font-semibold transition";
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

function Button({ children, variant = "primary", onClick }) {
  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
