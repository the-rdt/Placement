//JS file for IIIT  Jabalpur placement

let myChart1 = document.getElementById('myChart1').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let secondBatch = new Chart(myChart1, {
	type: 'bar',
	data: {
		labels: ['Students Eligible','Highest Package(LPA)','No.of On-Campus recruitment'],

		datasets: [
			{
				
                data : [173,15,35],
				//backgroundColor:'green',
				backgroundColor: [
                    '#03254c',
                    '#1167b1',
					'#2a9df4',
					'#1AC9E6'
                ],
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
			
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					stacked: false,
					gridLines: {
						display: true,
						color: 'rgba(255,99,132,0.2)',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

let myChart3 = document.getElementById('myChart3').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let firstBatch = new Chart(myChart3, {
	type: 'bar',
	data: {
		labels: ['Students Eligible','Highest Package(LPA)','No.of On-Campus recruitment'],
		datasets: [
			{
				labels: ['Students Eligible','Highest Package(LPA)','No.of On-Campus recruitment'],
				data : [173,15,35],
				//backgroundColor:'green',
				backgroundColor: [
					'#03254c',
                    '#1167b1',
					'#2a9df4',
					'#1AC9E6'
                ],
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					stacked: false,
					gridLines: {
						display: true,
						color: 'rgba(255,99,132,0.2)',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

let myChart5 = document.getElementById('myChart5').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.display = false;

let thirdBatch = new Chart(myChart5, {
	type: 'bar',
	data: {
		labels: ['Highest Package(LPA)','Avg Packg by top 20 comp(LPA)','Average Package(LPA)','Students with package >10LPA'],
		datasets: [
			{
				
				data : [173,15,35],
				//backgroundColor:'green',
				backgroundColor: [
                    '#03254c',
                    '#1167b1',
					'#2a9df4',
					'#1AC9E6'
                ],
				boderWidth: 4,
				borderColor: '#777',
				hoverBorderWidth: 2,
				hoverBorderColor: '#000',
			},
		
		],
	},
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					stacked: false,
					gridLines: {
						display: true,
						color: 'rgba(255,99,132,0.2)',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						display: false,
					},
				},
			],
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: '#000',
			},
		},
	},
});

