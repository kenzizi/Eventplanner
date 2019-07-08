import React from "react";
import IMG from "../../images/event-exxample.jpeg";
import { Avatar } from "antd";


const CardDesign = () => {
  return (
    <div className="col-md-4 mt-4 all-card-con">
      <div className="card-design-container ">
        <img src={IMG} alt="404" className="event-image-design" />

        <svg className="card__svg" viewBox="0 0 800 500">
          <path className="svg-background"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            stroke-width="3"
            fill="transparent"
          />
        </svg>
        <Avatar className="user-image-card" src={IMG} />

      </div>
      <div className="info-section-card">
        <div className="col-md-12">
          <p className="card-title-design">name</p>
            <p>
            <span className="col-md-6"><i class="fas fa-calendar-week"> From 10-11-1995  </i></span>
            <span className="col-md-6"><i class="fas fa-calendar-week"> To 10-11-1995 </i></span>
            
            </p>
            <p>
            <span className="col-md-6"><i class="fas fa-stopwatch"> From 10:00  </i></span>
            <span className="col-md-6"><i class="fas fa-stopwatch"> To 10:00 </i></span>

            </p>

          <p className="card-desc-design col-md-12">
            loremloremlor emloreml oremloremlorem loremloremloremlore
            mloremlorlo remlo remloremem{" "}
          </p>
          <p />
        </div>
      </div>
    </div>
  );
};
export default CardDesign;
