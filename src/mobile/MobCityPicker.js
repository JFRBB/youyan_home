import React from 'react';
import PropTypes from 'prop-types';
import Select, {Option, OptGroup} from 'rc-select';
import 'rc-select/assets/index.css';
import  "./cityCode.js";
import ZSelect from './ZSelect';
import "./MobCityPicker.scss";
const chinaCode = window.chinaCode;

class CityPicker extends React.Component {

  static defaultProps = {
    width: 500,
    level: 3
  };

  static propsTypes = {
    width: PropTypes.number,
    level: PropTypes.number,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    let city = chinaCode[0].childRen;
    let area = chinaCode[0].childRen[0].childRen;
    this.state = {
      province: chinaCode,
      city,
      area,
      provinceId: this.props.provinceId||"",
      cityId: this.props.cityId||"",
      areaId: this.props.areaId||"",
    }
  }

  componentDidMount() {
    //console.log(chinaCode)
    this.handleReceiveProps(this.props);
  }

  componentWillReceiveProps(next){
    if(next.provinceId!=this.state.provinceId||next.cityId!=this.state.cityId||next.areaId!=this.state.areaId){
      this.handleReceiveProps(next);
    }
  }

  handleReceiveProps(next){
    let filterProvince = chinaCode.filter(v=>v.id==next.provinceId)[0];
    let city = (next.provinceId&&filterProvince)?filterProvince.childRen:chinaCode[0].childRen;
    let filterCity = city.filter(v=>v.id==next.cityId)[0];
    let area = (next.cityId&&filterCity)?filterCity.childRen:chinaCode[0].childRen[0].childRen;
    this.setState({
      city,
      area,
      provinceId: next.provinceId?next.provinceId+"":"",
      cityId: next.cityId?next.cityId+"":"",
      areaId: next.areaId?next.areaId+"":"",
    })
  }

  provinceChange = (value) => {
    console.log(value?'aaa':'bbb');
    if(value){
      if(this.refs.city)this.refs.city.state.value=[];
      let province = [...this.state.province].filter(v=>v.id==value)[0];
      let city = province.childRen;
      let area = city[0].childRen;
      this.setState({
        city,
        area,
        provinceName: province.name,
        cityName: "",
        areaName: "",
        provinceId: value,
        cityId: "",
        areaId: "",
      }, ()=>{this.props.onSelect(this.state);});
    }else{
      this.setState({
        provinceName: '',
        provinceId: '',
        cityName: "",
        cityId: "",
        areaName: "",
        areaId: "",
      }, ()=>{this.props.onSelect(this.state);})
    }

  };

  cityChange = (value) => {
    if(value){
      if(this.refs.area)this.refs.area.state.value=[];
      let city = [...this.state.city].filter(v=>v.id==value)[0];
      let area = city.childRen;
      this.setState({
        area,
        cityName: city.name,
        areaName: "",
        cityId: value,
        areaId: "",
      }, ()=>{this.props.onSelect(this.state);});
    }else{
      this.setState({
        cityName: "",
        cityId: "",
        areaName: "",
        areaId: "",
      }, ()=>{this.props.onSelect(this.state);})
    }

  };

  areaChange = (value) => {
    if(value){
      let area = [...this.state.area].filter(v=>v.id==value)[0];
      this.setState({
        areaName:  area.name,
        areaId: value,
      }, ()=>{this.props.onSelect(this.state);});
    }else{
      this.setState({
        areaName:  '',
        areaId: '',
      }, ()=>{this.props.onSelect(this.state);});
    }

  };


  render() {
    let { province, city, area} = this.state;
    let provinceId = this.state.provinceId ? {value:this.state.provinceId} : {};
    let cityId = this.state.cityId ? {value:this.state.cityId} : {};
    let areaId = this.state.areaId ? {value:this.state.areaId} : {};
    return (
      <div style={{ width: this.props.width }} className={this.props.className}>
        <ZSelect
          className="cityPicker"
          placeholder="省"
          name="province"
          defaultOption={{name: '省', value: 0}}
          optionValue={provinceId.value}
          optionHeight={this.props.optionHeight}
          optionName={this.state.provinceName}
          onSelect={(name, value)=>this.provinceChange(value)}
          options={
            province.map( v =>{
              return {name:v.name, value:v.id};
            })
          }
        />
        {this.props.level!=1 &&
          <ZSelect
            ref="city"
            className="cityPicker"
            placeholder="市"
            optionHeight={this.props.optionHeight}
            name="city"
            defaultOption={{name: '市', value: 0}}
            noDefault={this.state.provinceId?false:true}
            optionValue={cityId.value}
            optionName={this.state.cityName}
            onSelect={(name, value)=>this.cityChange(value)}
            options={ this.state.provinceId ?
              city.map( v =>{
                return {name:v.name, value:v.id};
              })
              :[{name: '请选择', value: 0}]
            }
          />
        }
        {this.props.level == 3 &&
          <ZSelect
            ref="area"
            className="cityPicker"
            placeholder="区"
            optionHeight={this.props.optionHeight}
            name="area"
            defaultOption={{name: '区', value: 0}}
            noDefault={this.state.cityId?false:true}
            optionValue={areaId.value}
            optionName={this.state.areaName}
            onSelect={(name, value)=>this.areaChange(value)}
            options={ this.state.cityId?
              area.map( v =>{
                return {name:v.name, value:v.id};
              })
              :[{name: '请选择', value: 0}]
            }
          />
        }
      </div>
    )
      ;
  }
}


CityPicker.propTypes = {
  data: PropTypes.object,
};

export default CityPicker;
