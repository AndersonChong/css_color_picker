import Template from "./Template";

const Gallery = ({ color, degree, gradientType }) => {
  // return <div className="grid grid-cols-4 gap-4"></div>;
  return (
    <div className="relative h-24 bg-black rounded-lg">
      <div className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition bg-white"></div>
    </div>
  );
};

export default Gallery;
