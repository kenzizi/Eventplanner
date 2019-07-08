import React, { Component } from "react";
import { DatePicker, List } from "antd";
import { Dropdown } from "semantic-ui-react";
import { getEvents } from "../../actions/event";
import {getCategories} from "../../actions/categories";
import { connect } from "react-redux";
import Cardevent from "./eventCard";
import moment from "moment";

const dateFormatList = ["YYYY-MM-DD", "DD-MM-YY"];

const countryOptions = [
  { text: "Ariana", key: "Ariana", value: "Ariana" },
  { text: "Béja", key: "Béja", value: "Béja" },
  { text: "Ben Arous", key: "Ben Arous", value: "Ben Arous" },
  { text: "Bizerte", key: "Bizerte", value: "Bizerte" },
  { text: "Gabès", key: "Gabès", value: "Gabès" },
  { text: "Gafsa", key: "Gafsa", value: "Gafsa" },
  { text: "Jendouba", key: "Jendouba", value: "Jendouba" },
  { text: "Kairouan", key: "Kairouan", value: "Kairouan" },
  { text: "Kasserine", key: "Kasserine", value: "Kasserine" },
  { text: "Kebili", key: "Kebili", value: "Kebili" },
  { text: "kef", key: "kef", value: "kef" },
  { text: "Mahdia", key: "Mahdia", value: "Mahdia" },
  { text: "Manouba", key: "Manouba", value: "Manouba" },
  { text: "Medenine", key: "Medenine", value: "Medenine" },
  { text: "Monastir", key: "", value: "" },
  { text: "Nabeul", key: "Nabeul", value: "Nabeul" },
  { text: "Sfax", key: "Sfax", value: "Sfax" },
  { text: "Sidi Bouzid", key: "Sidi Bouzid", value: "Sidi Bouzid" },
  { text: "Siliana", key: "Siliana", value: "Siliana" },
  { text: "Sousse", key: "Sousse", value: "Sousse" },
  { text: "Tataouine", key: "Tataouine", value: "Tataouine" },
  { text: "Tozeur", key: "Tozeur", value: "Tozeur" },
  { text: "Tunis", key: "Tunis", value: "Tunis" },
  { text: "Zaghouan", key: "Zaghouan", value: "Zaghouan" }
];
const categoriesOptions = [
  { text: "Camping", key: "Camping", value: "Camping" },
  { text: "Dinner", key: "Dinner", value: "Dinner" },
  { text: "Jogging", key: "Jogging", value: "Jogging" },
  { text: "Meeting", key: "Meeting", value: "Meeting" },
  { text: "Coding", key: "Coding", value: "Coding" }
];

const { RangePicker } = DatePicker;

class avaiblableEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enddate: "",
      startdate: "",
      selectedRegion: "",
      selectedCategorie: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handleEndDate = (value, dateString) => {
    console.log("end date", dateString);
    this.setState({
      enddate: dateString
    });
  };
  handleStartDate = (value, dateString) => {
    console.log("start date", dateString);
    this.setState({
      startdate: dateString,
      enddate :dateString
    });
  };

  handleChange = (event, data) => {
    const { value } = data;
    const { text } = data.options.find(o => o.value === value);
    this.setState({
      selectedRegion: text
    });
  };
  handleCatChange = (event, data) => {
    const { value } = data;
    const { text } = data.options.find(o => o.value === value);
    this.setState({
      selectedCategorie: text
    });
  };
  componentWillMount = () => {
    this.props.getEvents();
    this.props.getCategories()
  };

  render() {
    const { eventList, searchfilter } = this.props;

 


    const Filter = eventList.filter(
      el =>
        el.eventName
          .toLowerCase()
          .includes(searchfilter.toLowerCase().trim()) &&
        el.region
          .toLowerCase()
          .includes(this.state.selectedRegion.toLowerCase().trim()) &&
        el.categorie
          .toLowerCase()
          .includes(this.state.selectedCategorie.toLowerCase().trim()) &&
        el.time[0].startDate.slice(8,10).includes(this.state.startdate.slice(8,10)) &&
        el.time[0].endDate.slice(8,10).includes(this.state.enddate.slice(8,10)) 
    );
    return (
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <div className="row filters">
              <div className="col-md-12">
                <DatePicker
                  defaultValue={moment(moment(), dateFormatList[0])}
                  format={dateFormatList}
                  onChange={this.handleStartDate}
                />
                <DatePicker
                  defaultValue={moment(moment(), dateFormatList[0])}
                  format={dateFormatList}
                  onChange={this.handleEndDate}
                />

                <Dropdown
                  className="col-md-12 mt-4"
                  placeholder="Select Region"
                  fluid
                  search
                  selection
                  options={countryOptions}
                  onChange={this.handleChange}
                />
                <Dropdown
                  className="col-md-12 mt-4"
                  placeholder="Event Categorie"
                  fluid
                  search
                  selection
                  options={this.props.categories}
                  onChange={this.handleCatChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="cards-list ">
              <div className=" rere">
                <List
                itemLayout="grid"
                dataSource={Filter}
                pagination={{
                  onChange: page => console.log(page),
                  pageSize: 6
                }}
                renderItem={item => (
                  <Cardevent className="ml-2" tab={item} />
                )}
              />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    eventList: state.event,
    searchfilter: state.SearchFilter,
    categories:state.categories
  };
};

export default connect(
  mapStateToProps,
  { getEvents,getCategories }
)(avaiblableEvents);
