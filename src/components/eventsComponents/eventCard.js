import React, { Component } from "react";
import { Avatar } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'
class EventCard extends Component {
  render() {
    const { tab, user } = this.props;
    let bg = tab.imgPath;
   // console.log('izebi',tab.avatar)
    var sectionStyle = {
      backgroundImage: `url(${bg})`
    };
console.log('event cardd')

    axios.post()
    return (
      <div className="col-md-5 mt-4 all-card-con ml-4">
      <div className="card-design-container ">
        <img src={bg} alt="404" className="event-image-design" />

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
        <Avatar className="user-image-card" src={tab.avatar} />

      </div>
      <div className="info-section-card">
        <div className="col-md-12">
        <Link to ={`/eventdetails/${tab._id}`}>
        <p className="card-title-design">{tab.eventName}</p></Link>
            <p>
            <span className="col-md-6"><i class="fas fa-calendar-week"> From {tab.time[0].startDate}  </i></span>
            <span className="col-md-6"><i class="fas fa-calendar-week"> To {tab.time[0].endDate} </i></span>
            
            </p>
            <p>
            <span className="col-md-6"><i class="fas fa-stopwatch"> From {tab.time[0].startHour}  </i></span>
            <span className="col-md-6"><i class="fas fa-stopwatch"> To {tab.time[0].endHour} </i></span>

            </p>

          <p className="card-desc-design col-md-12">
          {tab.eventDesc}
          </p>
          <p />
        </div>
      </div>
    </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  null
)(EventCard);

