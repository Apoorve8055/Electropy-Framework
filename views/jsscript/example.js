const exampleprogramfunction = () =>{
  var name = document.getElementById('electropyname').value;
  document.getElementById('electropyname').value = '';
  if(name.length == 0){
    Metro.dialog.create({
      title: "",
      content:"<h5 style='color:red'>Please Enter Your Name ('_') </h5>" ,
      closeButton: true
  });

  }else{
    var options = {
      scriptPath : path.join(__dirname, '/../pyscript/'),
      args : [name]
    }
    
    let pyshell = new PythonShell('example.py', options);
  
    pyshell.on('message', function(message) {
      Metro.dialog.create({
        title: "Your Python Script Response",
        content:`<span style="text-transform: capitalize;">${message}</span>` ,
        closeButton: true
    });
    })
  }
}
 
