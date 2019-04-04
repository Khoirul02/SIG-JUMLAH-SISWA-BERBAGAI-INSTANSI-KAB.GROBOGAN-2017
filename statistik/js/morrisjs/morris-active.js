// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2012',
            SD: 475353,
            SLTP: 209433,
            SMU: 105638,
            Mahasiswa:25828
        }, {
            period: '2013',
            SD: 477005,
            SLTP: 211887,
            SMU: 107777,
            Mahasiswa:26418
        }, {
            period: '2014',
            SD: 482850,
            SLTP: 214483,
            SMU: 109098,
            Mahasiswa:26472
        }, {
            period: '2015',
            SD: 561343,
            SLTP: 236783,
            SMU: 106502,
            Mahasiswa:29668
        }, {
            period: '2016',
            SD: 531572,
            SLTP: 197975,
            SMU: 163165,
            Mahasiswa:53282
        }, {
            period: '2017',
            SD: 482850,
            SLTP: 214483,
            SMU: 109098,
            Mahasiswa: 26742
        }],
        // },
        //  {
        //     period: '2018',
        //      SD: 0,
        //      SMP: 0,
        //      SMA: 0,
        //      Mahasiswa:0
        // }],
        xkey: 'period',
        ykeys: ['SD', 'SLTP', 'SMU', 'Mahasiswa'],
        labels: ['SD', 'SLTP', 'SMU', 'Mahasiswa'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#006DF0', '#933EC5', '#65b12d','#FF0000'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:2,
        hideHover: 'auto',
        lineColors: ['#006DF0', '#933EC5', '#65b12d','#FF0000'],
        resize: true
        
    });
	
Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '2010',
            CSE: 50,
            Accounting: 80,
            Electrical: 20
        }, {
            period: '2011',
            CSE: 130,
            Accounting: 100,
            Electrical: 80
        }, {
            period: '2012',
            CSE: 80,
            Accounting: 60,
            Electrical: 70
        }, {
            period: '2013',
            CSE: 70,
            Accounting: 200,
            Electrical: 140
        }, {
            period: '2014',
            CSE: 180,
            Accounting: 150,
            Electrical: 140
        }, {
            period: '2015',
            CSE: 105,
            Accounting: 100,
            Electrical: 80
        },
         {
            period: '2016',
            CSE: 250,
            Accounting: 150,
            Electrical: 200
        }],
        xkey: 'period',
        ykeys: ['CSE', 'Accounting', 'Electrical'],
        labels: ['CSE', 'Accounting', 'Electrical'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#006DF0', '#933EC5', '#65b12d'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#006DF0', '#933EC5', '#65b12d'],
        resize: true
        
    });