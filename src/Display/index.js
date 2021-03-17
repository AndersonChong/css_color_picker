const Display = ({ color }) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass = `linear-gradient(to right, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  return (
    <div className="h-60-screen">
      <div
        className="h-full p-2 rounded-xl"
        style={{ backgroundImage: gradientClass }}
      >
        <div className="h-full p-2 bg-white rounded-lg">
          <div
            className="h-full rounded-lg"
            style={{ backgroundImage: gradientClass }}
          >
            {""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
