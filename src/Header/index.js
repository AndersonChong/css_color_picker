const Header = ({ title, color }) => {
  const shadowClass = `relative h-24 ${color} border-2 border-black rounded-lg`;

  return (
    <div className={shadowClass}>
      <div className="absolute h-full w-full -top-2 -left-2 bg-white border-2 border-black rounded-lg hover:translate-x-1 hover:translate-y-1 transition transform flex justify-center items-center">
        <h1 className="text-3xl font-jetbrains-mono">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
