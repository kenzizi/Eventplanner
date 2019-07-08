import React,{useEffect} from "react";
import {connect} from 'react-redux'
import {getEventbyID} from '../../actions/event'
import store from '../../store'
const EventDetailInfo = ({cardID,event}) => {
  
  useEffect(() => {
    store.dispatch(getEventbyID(cardID))
  }, [] ) 
  
  console.log(event,"karim")
  // let bg = event[0].imgPath;
  // var sectionStyle = {
  //   backgroundImage: `url(${bg})`
  // };
  return (
    event.map((event)=>{
      let bg = event.imgPath;
  var sectionStyle = {
    backgroundImage: `url(${bg})`
  };
      return(
    <div className=" container">
    <div className="detail-container">
      <div className="detail-user-section">
        <img
          className="user-img"
          src={event.avatar}
          alt="pic"
        />
        <div>
          <h3 className="user-text-name">{event.eventName}</h3>
          <h3 className="user-text-mail">{event.userMail}</h3>
        </div>
      </div>
    </div>

    <div className="detail-card-section">
      <div className="style-details">
        <div className="detail-card-image-section" style ={sectionStyle} />
        <div className="detail-card-detail-section">
          <p className="detail-card-texts">{event.eventName}</p>
          <p className="detail-card-texts">{event.categorie}</p>
          <p className="detail-card-texts">{event.region}</p>
          <p className="detail-card-texts">{event.eventDesc} </p>
        </div>
      </div>
    </div>
  </div> )})
  );
};
const mapStateToProps = state => {
  return {
    event : state.event
  }
}

export default connect(mapStateToProps,{getEventbyID})(EventDetailInfo);
