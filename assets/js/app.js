var records= document.getElementById('records');
var a = "";

var trabajadorLaboratoria = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
							  { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, 
							  { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, 
							  { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, 
							  { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];


 trabajadorLaboratoria.forEach(function(e){ a += "<ul><li>" + "<b>" + "Nombre: " +"</b>" + e.nombre + "</li>" +
													 "<li>"	+ "<b>" + "Apellido: " + "</b>" + e.apellido + "</li>" +
													 "<li>" + "<b>" + "Rol: " + "</b>" +  e.rol + "</li>" +
													 "<li>" + "<b>" +"Cumpleaños: " + "</b>" + e.cumpleanios + "</li></ul>";

														

														});

 records.innerHTML = a; 

 

