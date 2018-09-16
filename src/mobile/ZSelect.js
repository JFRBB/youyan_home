import React from 'react';
import './ZSelect.scss'
import PropTypes from 'prop-types';

/* 使用说明：
// <ZSelect
//   width={150}
//   options={[{name:'示例一1',value:'1'},{name:'示例二2',value:'2'},{name:'示例三3',value:'3'}]}
//   onSelect={(key, value)=>{console.log(key, value);}}/>
*/
class ZSelect extends React.Component{
  static defaultProps = {
    label:'',
    // 默认选项
    defaultOption:{name:'请选择',value:''},
    // 没有默认值
    noDefault:false,
    // 选中的名字
    optionName:"",
    // 默认值
    optionValue:"",
    // 菜单数据
    options:[{name:'示例一',value:'1'},{name:'示例二',value:'2'},{name:'示例三',value:'3'}],
    // 按钮类名
    className:'',
    // 行内样式
    width:140,
    optionHeight:35, // 默认高度为35
    dropMenuHeight:150,// 下拉框高度
    // 存在label时宽度
    labelWidth:160,
    marginBottom:0,
    // 点击事件
    onClick:()=>{},
    //下拉框出现的位置
    direction: 'bottom',
    // 把选中的属性传给父级
    onSelect:()=>{},
    readOnly:false,//只读
  }
  static propTypes = {
    label:PropTypes.node,
    noDefault:PropTypes.bool,
    optionName:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    defaultOption:PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
    options:PropTypes.array,
    className:PropTypes.string,
    width:PropTypes.number,
    optionHeight:PropTypes.number,
    marginBottom:PropTypes.number,
    dropMenuHeight:PropTypes.number,
    onClick:PropTypes.func,
    onSelect:PropTypes.func,
    direction: PropTypes.string,
    readOnly:PropTypes.bool,
  }


  constructor(props){
    super(props);

    this.state = {
      showSelect:false,
      // 默认选中第二个
      selected:-1,
      // 选中的名字
      optionName:'',
      // 选中的值
      optionValue:''
    }
  }

  componentDidMount(){
    this.handleChangeOption(this.props);
    let sView = this.refs.city_view;
    sView.addEventListener('touchmove', (e)=>{
      e.stopPropagation()
    }, false);
  }

  componentDidUpdate(preProps, preState){
    // 当optionName或optionValue, options有变化时，执行
    if ((preProps.optionName != this.props.optionName) || (preProps.optionValue != this.props.optionValue) || (preProps.options != this.props.options)) {
      this.handleChangeOption(this.props);
    }
  }

  // optionValue 和 optionname 至少取一个，当两者都有时优先选optionvalue，都没有时取默认值
  handleChangeOption(props){
    if (!props.options) return;
    let optionName = props.defaultOption.name;
    let optionValue = props.defaultOption.value;
    let selected = -1;
    if ((props.optionValue||'') != '') {
      props.options.filter((v, index)=>{
        if (v.value == props.optionValue) {
          optionName = v.name;
          optionValue = v.value;
          selected = index;
        }
      });
    }else if ((props.optionName||'') != '') {
      props.options.filter((v, index)=>{
        if (v.name == props.optionName) {
          optionName = v.name;
          optionValue = v.value;
          selected = index;
        }
      });
    }

    this.setState({
      optionName:optionName,
      optionValue:optionValue,
      selected:selected,
    });
  }

  renderList (){
    const {readOnly, optionHeight} = this.props;
    let list = this.props.options.map((option,index)=>{
      return(
        <li key={index}
          className={this.state.selected===index?'selected':''}
          data-value={option.value}
          style={{height:optionHeight, lineHeight:optionHeight + 'px'}}
          onClick={()=>{
            this.setState({
              showSelect:false,
              selected:index,
              optionName:option.name,
              optionValue:option.value
            });
            this.props.onSelect(option.name, option.value, option);
          }}>
          {option.name}
        </li>
      )
    })
    return (
      <ul className="drop-menu-list" style={{maxHeight:this.props.dropMenuHeight}}>
        {!this.props.noDefault && <li key="-1"
          className={this.state.selected=='-1'?'selected':''}
          data-value={this.props.defaultOption.value}
          style={{height:optionHeight, lineHeight:optionHeight + 'px'}}
          onClick={()=>{
            this.setState({
              showSelect:false,
              selected:-1,
              optionName:this.props.defaultOption.name,
              optionValue:this.props.defaultOption.value,
            });
            this.props.onSelect(this.props.defaultOption.name,this.props.defaultOption.value,this.props.defaultOption);
        }}>{this.props.defaultOption.name}</li>}
        {list}
      </ul>
    )
  }

  render(){
    const {readOnly, optionHeight, direction} = this.props;
    return(
      <div className="ZSelect" style={{marginBottom:this.props.marginBottom}}>
        <label style={{display:this.props.label?'inline-block':'none',width:this.props.labelWidth+'px'}}>{this.props.label}</label>
        <div className={this.props.className+' select-list'} onMouseLeave={()=>{this.setState({showSelect:false})}} style={{width:this.props.width+'px', height:optionHeight + 'px'}}>
          <div className={this.state.showSelect?'select-name on':'select-name'}
            style={{ opacity:readOnly ? 0.5 : 1}}
            onClick={()=>{
              if (readOnly) return;
              this.setState({showSelect:!this.state.showSelect});
            }}>
            <span className="current-name" style={this.state.optionName!=this.props.defaultOption.name?{color:'#333', height:optionHeight, lineHeight:optionHeight + 'px'}:{height:optionHeight, lineHeight:optionHeight + 'px'}}>
              {this.state.optionName}
            </span>
            <i className="icon-arr"></i>
          </div>
          <div ref="city_view" className={this.state.showSelect? (direction == 'top'?'drop-menu-top top-on':'drop-menu on'):'drop-menu'} style={direction == 'top' ? {bottom:optionHeight - 2} : {top:optionHeight + 2}}>
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }

}
export default ZSelect
