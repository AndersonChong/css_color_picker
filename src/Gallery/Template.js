const Template = ({ color, degree, gradientType }) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass =
    gradientType === "linear-gradient"
      ? `${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`
      : `${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  return (
    <div className="relative bg-black rounded-lg w-full aspect-h-1 aspect-w-1">
      <div
        className="absolute -top-2 -left-2 bg-white rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition"
        style={{ backgroundImage: gradientClass }}
      >
        {""}
      </div>
    </div>
  );
};

export default Template;
