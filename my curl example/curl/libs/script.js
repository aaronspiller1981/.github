	$(document).ready(function() {
	

	
	$('#num1').click(function() {
		
		$.ajax({
			url: 'libs/geos.php',
			type: 'POST',
			datatype: 'json',
		
			success: function(result) {
				
				
				console.log(result);
				
				
					
					$('#results3').html(result['data']['languages']);
					$('#results1').html(result['data']['countryName']);
					$('#results2').html(result['data']['countryCode']);
				
				
				error: function errors(jqXHR, textStatus, errorThrown) {
					console.log('error');
				} 
			}
		
		});
	});
	$('#num2').click(function() {
		
		$.ajax({
			url: 'libs/wiki.php',
			type: 'POST',
			datatype: 'json',
		
			success: function(result) {
				
				
				console.log(result);
				
				
					
					$('#wikiresult').html(result['data'][0]['summary']);
				
				error: function errors(jqXHR, textStatus, errorThrown) {
					console.log('error');
				} 
			}
		
		});
	});
		$('#num3').click(function() {
		
		$.ajax({
			url: 'libs/earth.php',
			type: 'POST',
			datatype: 'json',
			
			success: function(result) {
				
				
				console.log(result);
				
				
					
					$('#quakeresult').html(result['data'][0]['datetime']);
					$('#quakeresult1').html(result['data'][0]['magnitude']);
					$('#quakeresult2').html(result['data'][0]['depth']);
				
				error: function errors(jqXHR, textStatus, errorThrown) {
					console.log('error');
				} 
			}
		
		});
	});
	
	});