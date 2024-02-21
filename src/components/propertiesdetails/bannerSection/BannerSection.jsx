import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./bannerSection.css";
const BannerSection = () => {
  // banner slider add
  const nextDom = () => {
    showSlider("next");
  };
  const prevDom = () => {
    showSlider("prev");
  };

  let timeRunning = 1000;
  let runTimeOut;

  const showSlider = (type) => {
    const listItemDom = document.querySelector(".carousel .list");
    const itemSlider = document.querySelectorAll(".carousel .list .item");
    const itemThumbnail = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );
    const thumbnailDom = document.querySelector(".carousel .thumbnail");
    const carouselDom = document.querySelector(".carousel");

    if (type === "next") {
      listItemDom.appendChild(itemSlider[0]);
      thumbnailDom.appendChild(itemThumbnail[0]);
      carouselDom.classList.add("next");
    } else {
      const positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
      thumbnailDom.prepend(itemThumbnail[positionLastItem]);
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);
  };

  return (
    <div className="carousel">
      {/* list item */}
      <div className="list">
        {/* img 1 */}
        <div className="item">
          <img className="" src="https://i.ibb.co/ZTMkx9C/images.jpg" alt="" />
          <div className="content ">
            <div className="title lg:text-7xl md:text-4xl font-bold ">
              PROPERTY DETAILS
            </div>
            <div className="topic lg:text-5xl lg:pb-5 lg:pt-5 md:text-3xl font-bold  ">
              HOMIFY ESTATE
            </div>
            <div className="des lg:pb-5  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo natus pariatur esse eius odit commodi, iusto
              accusamus voluptatum harum!
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>FOLLOW</button>
            </div>
          </div>
        </div>
        {/* img 2 */}
        <div className="item">
          <img src="https://i.ibb.co/4sVt9HZ/images-1.jpg" alt="" />
          <div className="content">
            <div className="title lg:text-7xl md:text-4xl font-bold ">
              DESIGN SLIDER
            </div>
            <div className="topic lg:text-5xl lg:pb-5 lg:pt-5 md:text-3xl font-bold ">
              HOMIFY ESTATE
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo natus pariatur esse eius odit commodi, iusto
              accusamus voluptatum harum!
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>FOLLOW</button>
            </div>
          </div>
        </div>
        {/* img 3 */}
        <div className="item">
          <img src="https://i.ibb.co/41sPFP3/images-2.jpg" alt="" />
          <div className="content">
            <div className="title lg:text-7xl md:text-4xl font-bold ">
              DESIGN SLIDER
            </div>
            <div className="topic lg:text-5xl lg:pb-5 lg:pt-5 md:text-3xl font-bold ">
              HOMIFY ESTATE
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo natus pariatur esse eius odit commodi, iusto
              accusamus voluptatum harum!
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>FOLLOW</button>
            </div>
          </div>
        </div>
        {/* img 4 */}
        <div className="item">
          <img src="https://i.ibb.co/xh0kjhq/images-3.jpg" alt="" />
          <div className="content">
            <div className="title lg:text-7xl md:text-4xl font-bold ">
              DESIGN SLIDER
            </div>
            <div className="topic lg:text-5xl lg:pb-5 lg:pt-5 md:text-3xl font-bold ">
              HOMIFY ESTATE
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quo natus pariatur esse eius odit commodi, iusto
              accusamus voluptatum harum!
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>FOLLOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        {/* img 1 thumbnail  */}
        <div className="item">
          <img src="https://i.ibb.co/4sVt9HZ/images-1.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        {/* img 2 thumbnail  */}
        <div className="item">
          <img src="https://i.ibb.co/41sPFP3/images-2.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        {/* img 3 thumbnail  */}
        <div className="item">
          <img src="https://i.ibb.co/xh0kjhq/images-3.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
        {/* img 4 thumbnail  */}
        <div className="item">
          <img src="https://i.ibb.co/ZTMkx9C/images.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">Description</div>
          </div>
        </div>
      </div>

      {/* arrows */}
      <div className="arrows">
        <button onClick={prevDom} id="prev">
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button onClick={nextDom} id="next">
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default BannerSection;
