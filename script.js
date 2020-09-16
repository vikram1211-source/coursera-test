function menu()
{
	
	var print = document.getElementById('resp-menu');

	console.log(print);

	if(print.className == 'menu')
	{

		print.className += ' shrink-js ';
	}

	else
	{
		print.className = 'menu';
	}
	


}