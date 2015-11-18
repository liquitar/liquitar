<?php 
	try{
		$dir="basic";
		//echo filetype("php");
		if(is_dir($dir)){
		if($dh=opendir($dir)){
				while(($file=readdir($dh))!=false){
					$filePath = $dir.$file;
					echo $filePath."<br/>";
				}
				closedir($dh);
			}
			
		}else{
			echo "dir is not a directory";
		}
		
	}catch(Exception $e){
		echo "程序出错了";
		exit();
	}
?>