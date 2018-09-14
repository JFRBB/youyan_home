import * as React from 'react';
// import './index.css';

// function getLanguageFromURL() {
// 	const regex = new RegExp('[\\?&]lang=([^&#]*)');
// 	const results = regex.exec(window.location.search);
// 	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }

export default class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'AAPL',
		interval: 'D',
		containerId: 'tv_chart_container',
		// datafeedUrl: "https://demo_feed.tradingview.com",
		libraryPath: '/charting_library/',
		// chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};


	componentDidMount() {
		let widgetOptions = {
			symbol: this.props.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new window.Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,
			locale: 'zh',
			disabled_features: [
        'use_localstorage_for_settings',
        'header_symbol_search','header_saveload',
        'timeframes_toolbar',
        'header_indicators',
        'context_menus',
				'left_toolbar',
        'header_screenshot',
        'header_undo_redo',
        'header_compare',
				'control_bar', //底部的导航按钮
				'header_resolutions', //默认分辨率
				// "header_widget", //头部菜单栏
				"volume_force_overlay",	//k线与销量分开
				'header_chart_type',	//选择图的类型的控件 -- 美国线 -- 空心线 -- 面积图
      ],
			enabled_features: ['study_templates','dont_show_boolean_study_arguments', 'seconds_resolution'],
			loading_screen: {backgroundColor: "#f6f6f6"},	//图表加载的等待动画
			charts_storage_url: "https://saveload.tradingview.com",
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
			overrides: {
				"volumePaneSize": "tiny", //底部柱状图--成交量高低
				"paneProperties.background": "#ffffff",	//图表背景
				"paneProperties.legendProperties.showLegend": false,	//收起图例
			},
			debug: true,
			custom_css_url:this.props.libraryPath+'/static/myChart.css',
		};

		let timeRange = [
			{name: '1min', value: '60S'},
			{name: '5min', value: '5'},
			{name: '15min', value: '15'},
			{name: '1hour', value: '60'},
			{name: '4hour', value: '240'},
			{name: '1day', value: 'D'},
			{name: '2day', value: '2D'},
			{name: '2week', value: '2W'},
			{name: '1mon', value: 'M'}
		]

		clearInterval(window.chartInterval);
		const widget = window.tvWidget = new window.TradingView.widget(widgetOptions);

		widget.onChartReady(() => {
			widget.chart().createStudy("Moving Average", false, false, [
					10 + parseInt(Math.random() * 10)
				], function (guid) {
					// console.log(guid);
				},
				{"plot.color.0" : "#FF0000"}
			);
			const button = widget.createButton()
					.attr('title', 'Add item')
					.addClass('apply-common-tooltip')
					.on('click', () => {
						widget.chart().createStudy("Moving Average", false, false, [
								10 + parseInt(Math.random() * 10)
							], function (guid) {
								console.log(guid);
							},
							{"plot.color.0" : "#FF0000"}
						);
					});
				button[0].innerHTML = '+MA';

				// 返回支持的分辨率数组 然后新建分辨率按钮
				widget.getIntervals().map((item, index) => {
					let button = widget.createButton()
							.attr('title', item)
							.addClass(item)
							.on('click', () => {
								widget.chart().setResolution(item, ()=>{
									console.log('success');
								})
							});
						button[0].innerHTML = item;
						return button;
				})
			});
	}

	componentWillUnmount(){
	}


	render() {
		return (
			<div
				id={ this.props.containerId }
				className='TVChartContainer'
        style={{height: '400px'}}
			></div>
		);
	}
}
