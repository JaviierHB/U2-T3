var fs = require ("fs");

fs.readFile('alumnos.csv', 'utf8',(err,data)=>{
    if(err)
    throw err;
    var texto = data.split('\n');
    console.log(texto);
    for(var i=0; i<texto.length; i++){
        console.log('No. : '+(i+1))
        var parte = texto[i].split(',');
        console.log("No.Control: "+parte[0]);
        console.log("Nombre: "+parte[1]);
        console.log("Calificacion: "+parte[2]);
        console.log("_____________________________________________________________");
    }
    
});
