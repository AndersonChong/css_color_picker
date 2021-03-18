const Display = ({ color, degree, gradientType }) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass =
    gradientType === "linear-gradient"
      ? `${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`
      : `${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  const onClick = (e) => {
    console.log("icon clicked");
  };

  return (
    <div className="relative h-60-screen bg-black rounded-lg">
      <div
        className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition"
        style={{ backgroundImage: gradientClass }}
      >
        <div className="relative h-full">
          <svg
            onClick={onClick}
            className="absolute right-4 bottom-4 w-12 hover:scale-125 transform transition cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Display;
