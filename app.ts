var twoDArray = [
    [['1'], ['2'], ['3']],
    [['4'], ['5'], ['6']],
    [['7'], ['8'], ['9']]
];

var apparea = <HTMLElement>document.getElementsByClassName("apparea")[0];


for (var i = 0; i < twoDArray.length; i++) {
   for (var p = 0; p < twoDArray.length; p++) {

      if(Number(twoDArray[i][p]) == 5){
         var nick = 'nickmid';
      }else{
         var nick = 'nick';
      }

      apparea.innerHTML = apparea.innerHTML + '<div class="nickwrap"> ' + '<img class="'+nick+'" src="https://www.placecage.com/260/2'+p+i+'"><br></div>';




       //console.log(twoDArray[i][p]);
   }
   apparea.innerHTML = apparea.innerHTML + '<div class="clearfix"></div>';
    ///console.log(twoDArray[i][0]);
}
