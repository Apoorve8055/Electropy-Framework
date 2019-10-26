// Close Window function
const Quit = () =>{
   var win = remote.getCurrentWindow();
   win.close();
}

//For About -Apoorv menu
const whoami = () =>{
   shell.openExternal("http://apoorvverma.in");
}

