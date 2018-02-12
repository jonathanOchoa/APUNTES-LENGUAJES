////////// APUNTES GIT ////////////////////////////

// configura usuario e email
	$ git config --global user.name ""
	$ git config --global user.email 

//inicializa el proyecto
	git init					

//muesta el estado
	git status      			

//añade todo o 
	git add -A     
//añade solo un archivo 			
	git add index.html      	

//añade un comentario a lo que se guardo
git commit -m "comentario"	

// modificar un commit
	//primero vamos a la version que queremos modificar
	git commit --amend .m "nuevo commit"
	git push origin master -f // corsamos que se suban los cambios porque de la manera normal github no nos deja

//tag: con esto le asignamos versiones detalladas a nuestros commit
	//v0.9 seria la version, podemos poner 1.0, 2.7, etc.
	//los ultimos nmvres el el id del commit al que le queremos asignar el tag
	git tag -a v0.9 -m "comentario que queramos" 735d46b82a2381028ca95d2c29af3b1e80bbe333

	//para subir el tag a github es de otra forma
	git push origin v0.9 // en v0.9 iria la version que pusimos
	
	//para subir varios tag a la vez
	git push origin --tags

//muestra las verciones
	git log 					

//se mueve entre verciones
	git checkout "codigo"		

//muestra las ramas de nuestro proyecto
	git branch					

//añade una rama al proyecto
	git branch "nombre"			

//se mueve entre las ramas del proyecto
	git checkout "nombre"		

/*
absorbe todos los cambios de la otra rama y los añade en la rama que estamos ej: pasamos a MASTER todos los cambios de TESTEO
  esto sirbe para crear una rama para testear y la otra para tener el proyecto original, asi si falla el testeo no afecta al original y luego si funciona lo
  pasamos a la rama principal
*/
	git merge testeo			

// eliminar una rama
	git branch -D testeoColores	

// creamos una ramoa y nos movemos a ella a la vez
	git checkout -b texto	

// conectar la carpeta de github con git
	git remote add arigin https://github.com/jonathanOchoa/wunderlist.git // la urf del repositirio

// para ver si se unieron
	git remote -v	

// para eliminar la conexion
	git remote remove origin	

// ahora que esta conectado para subir los archivos a github
	// esto nos pedira nuestro usuario de github
	git push origin master // master o el nombre de la rama que tenga	

//SIEMPRE QUE CREEMOS UN COMMIT HAY QUE VOLVER A SUBIRLO A GITHUB PARA QUE SE ACTUALICE

//WORKFLOWS -> PARA TRABAR EN EQUIPO CON VARIAS PERSONAS
// mejor ver https://www.youtube.com/watch?v=VMInoluaZ9o&list=PL9xYXqvLX2kMUrXTvDY6GI2hgacfy0rId&index=7							
//mejor no usar					
	git reset 								