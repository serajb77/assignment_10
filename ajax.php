<?php
	if(isset($_POST['send']))
		{
			$flag=$_POST['lblflag'];
			$val1=$_POST['lblval1'];
			$val2=$_POST['lblval2'];
			switch($flag)
			{
				case 1: //-------- / ---------
					 echo($val1/$val2);
					 break;
				   
			   case 2: //--------  + ---------
					echo($val1+$val2);
					 break;
				   
			   case 3: //--------  - ---------
					echo($val1-$val2);			 
					 break;
				   
			   case 4: //--------  + ---------
					 echo($val1*$val2);	
					 break;
				   
				   
				   
			}
		}
?>