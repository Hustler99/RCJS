import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imgs/poert1.png";
import img2 from "../../imgs/port2.png";
import img3 from "../../imgs/port3.png";

export default function Port() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const x = document.getElementById("layer21");
    const y = document.getElementById("box21");
    const ims = document.querySelectorAll(".img");

    function showBox() {
      y.style.backgroundImage = `url(${selectedImage})`;
    }

    if (selectedImage) {
      x.classList.remove("d-none");
      showBox();
    }
  }, [selectedImage]);

  const getImgSrc = (src) => {
    setSelectedImage(src);
  };

  return (
    <>
      <div className="port-parent text-center">
        <div className="container parent-port">
          <div className="port-title mt-5">
            <h2>PORTFOLIO COMPONENT</h2>
            <div className="star1 me-3"></div>
            <FontAwesomeIcon
              icon={faStar}
              className=""
              style={{ color: "#2C3E50" }}
            />
            <div className="star2 ms-3"></div>
          </div>
          <div className="row gy-5 gx-4 pt-4">
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img1)}>
                <img id="img2" src={img1} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img2)}>
                <img id="img2" src={img2} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img3)}>
                <img id="img3" src={img3} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img1)}>
                <img id="img1" src={img1} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img2)}>
                <img id="img2" src={img2} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-4">
              <div id="img" className="img" onClick={() => getImgSrc(img3)}>
                <img id="img3" src={img3} className="w-100"></img>
                <div className="layer">
                  <div className="layer2">
                    <FontAwesomeIcon icon={faPlus} className="   " style={{ color: "#ffff" }} />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div id="layer21" className={`layer212 ${selectedImage ? "" : "d-none"}`}>
            <div id="box21" className="box">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}