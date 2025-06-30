function Card({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

export default Card;
