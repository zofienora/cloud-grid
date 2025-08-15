import { useEffect, useState } from "react";
import CloudOne from "../assets/cloud1.png";
import CloudTwo from "../assets/cloud2.png";
import CloudThree from "../assets/cloud3.png";


function getCols() {
  const w = window.innerWidth;
  if (w >= 1024) return 5; // desktop
  if (w >= 640)  return 4; // tablet
  return 3;                // phone
}

export default function Clouds() {
  const images = [
    CloudOne, CloudTwo, CloudThree,
    CloudOne, CloudTwo, CloudThree,
    CloudOne, CloudTwo, CloudThree,
    CloudOne, CloudTwo, CloudThree,
    CloudOne, CloudTwo, CloudThree
  ];

  const [cols, setCols] = useState(getCols());
  useEffect(() => {
    const onResize = () => setCols(getCols());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const rows = Math.ceil(images.length / cols);

  return (
    <div
      className="clouds-grid"
      style={{ "--cols": cols, "--rows": rows }}
    >
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Cloud ${i + 1}`} className="cloud" />
      ))}
    </div>
  );
}