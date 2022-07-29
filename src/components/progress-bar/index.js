import React from "react";
import img from "assets/progress.jpg";
import product1 from "assets/progress/img1.webp";
import product2 from "assets/progress/img2.webp";
import product3 from "assets/progress/img3.webp";
import product4 from "assets/progress/img4.webp";
const productData = [
  {
    id: 1,
    img: `${product1}`,
    title: "Tandoori",
    num: "174",
  },
  {
    id: 2,
    img: `${product2}`,
    title: "Lollipop",
    num: "524",
  },
  {
    id: 3,
    img: `${product3}`,
    title: "Breast",
    num: "175",
  },
  {
    id: 4,
    img: `${product4}`,
    title: "Strips",
    num: "300",
  },
];
const ProgressBar = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <img src={img} alt="" />
      </div>
      <div className="px-5 py-6 bg-primary text-[27px]">
        <h3 className="mb-4 font-medium text-white">Feel the Sound of Taste</h3>
        <p className="text-white font-light leading-[1.7] text-lg text-justify">
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, sit amet adipiscing.
        </p>
        <div className="grid grid-cols-4 mt-6">
          {productData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-start gap-y-3"
            >
              <div className="relative mb-4 cursor-pointer">
                <img src={item.img} alt="" />
              </div>
              <div className="text-4xl font-semibold text-white">
                {item.num}
              </div>
              <span className="text-lg font-medium text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
