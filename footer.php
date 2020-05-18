<!-- build:js scripts/app.angular.js -->

	<script src="libs/js/moment-with-locales.js"></script>
<!-- jQuery -->
  <script src="libs/jquery/jquery/dist/jquery.js"></script>
<!-- Bootstrap -->
  <script src="libs/jquery/tether/dist/js/tether.min.js"></script>
  <script src="libs/jquery/bootstrap/dist/js/bootstrap.js"></script>


  <script src="libs/jquery/PACE/pace.min.js"></script>
<!-- Angular -->
  <script src="libs/angular/angular/angular.js"></script>
  <script src="libs/angular/angular-animate/angular-animate.js"></script>
  <script src="libs/angular/angular-resource/angular-resource.js"></script>
  <script src="libs/angular/angular-sanitize/angular-sanitize.js"></script>
  <script src="libs/angular/angular-touch/angular-touch.js"></script>

  <!-- router -->
  <script src="libs/angular/angular-ui-router/release/angular-ui-router.js"></script>
  <!-- storage -->
  <script src="libs/angular/ngstorage/ngStorage.js"></script>
  <!-- utils -->
  <script src="libs/angular/angular-ui-utils/ui-utils.js"></script>
  <!-- lazyload -->
  <script src="libs/angular/oclazyload/dist/ocLazyLoad.js"></script>

  <script src="libs/angular/angular-file-upload/angular-file-upload.js"></script>


<!-- App -->


<script>
    var loadScript=function(url,scriptContainer,overWrite)
{
	scriptContainer=scriptContainer?scriptContainer:"scriptContainer";
	var scrpt=document.createElement("script");
	scrpt.type="text/javascript";
	scrpt.src=url;
	
	var scriptElement=document.getElementById(scriptContainer)
	if(overWrite)
	{
		scriptElement.innerHTML="";
	}
	scriptElement.appendChild(scrpt);
	
}
var excuteService=function(q,http,url,param,method,hidePace)
	{
        hidePace=hidePace?hidePace:false;
		var dfd = q.defer();
		var success=function(data)
		{
			dfd.resolve(data);
		}
        http[method](url, param).success(success);
		
		if(!hidePace && Pace)
		  {
			  Pace.restart();
		  }
		
		return dfd.promise;
	}
var simulateService=function(q,param)
	{
		var dfd = q.defer();
		//var success=function(data)
		{
			dfd.resolve(param);
		}
		return dfd.promise;
	}
</script>