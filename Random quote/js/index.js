//js ini di ambil dari google,dan belajar di youtube sambil di ajari teman kaka tingkat
const quotes = [
	{ 
		
		"quote" : "ketika cinta.", 
		
	},
	{
		"quote" : "ditolak.", 
		
	},
	{
		"quote" : "mati saja. ;-(", 
	
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  
 
}
$(".twit").click(function() {
                 $(this).attr("href","https://twitter.com/intent/tweet?text="+quotation.innerText);
                 
                 });

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)