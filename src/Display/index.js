const Display = ({ color }) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass = `linear-gradient(to right, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  return (
    <div className="relative h-60-screen bg-black rounded-lg">
      <div
        className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition"
        style={{ backgroundImage: gradientClass }}
      >
        {""}
      </div>
    </div>
  );
};

export default Display;
