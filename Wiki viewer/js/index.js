//code ini di ambil dari youtube
$('#search-form').submit(function(e){
	e.preventDefault();
});

function search(){
$("#display").empty();

	sq = $('#srch').val();

	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+sq+"&srnamespace=0&srwhat=text&titles=Main%20Page&callback=?", function(d) {

		$.each(d.query.search, function(i, item){
var wiki = '<div class="entry">'+
	'<div class="title">'+item.title+'</div>'+
	'<div class="snippet">'+item.snippet+'</div></div>';
			$("#display").append(wiki);
		});
	});
$('#srch').val('');
}