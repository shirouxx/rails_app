$(function(){
  var i= 1;
  setInterval(function(){
    var x = i++;
    var m = Math.floor(x/60)+"分";
    var s = (x%60)+"秒";
    var past = "経過";
    var time=0;
    if(x%60==0){
      time=m+past;
    } else if(x%60<60 && x/60>1){
      time=m+s+past;
    } else{
      time=s+past;
    }
    $("#timer").html(time);
  },1000);
});

// <p>jQuery稼働テスト(未稼働)</p>
// <p>jQuery稼働テスト</p>
// <script type="text/javascript">
//   $(document).ready(function() {
//     $("p").text("jQuery稼働テスト(稼働中)");
//   });
