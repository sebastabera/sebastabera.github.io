$(document).ready(function() {
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      var table1 = [
					[5, 50],
					[20, 40],
					[75, 10]
				];

	var table = [
          ['Navegador', 'Usuarios por día'],
          ['IE6', 0],
          ['IE7', 0],
          ['IE8', 0]
        ];
	var aux = 0;
      function drawChart() {

      	for (var i = 0; i < table1.length; i++) {
      		table[i+1][1] = table1[i][aux];
      	};
      	if (aux == 0) {
      		aux == aux++;
      	}else{
      		aux = 0;
      	}

        var data = google.visualization.arrayToDataTable(table);

        var options = {
          title: 'Usuarios Internet Explorer',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    $('#cambioValores').click(function(){
		drawChart();	 	
	});
	
	
});


