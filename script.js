
function nameSearch()
{

	var arrName = [];
		
		for(var i = 0 ; i < 8 ; i++)
 		{
 			arrName[i] = prompt('Please Enter 8 names');

 			if(arrName[i].charAt(0) == 'j' || arrName[i].charAt(0) == 'J' )
 			{
 				console.log('GoodBye' + " " + arrName[i]);
 			}
 			else
 			{
 				console.log('Hello' + " " + arrName[i]);	
 			}
 		}

} 
