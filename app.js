var app = angular.module('ShoppingApp',[]);

app.controller('ProductsController',function($scope){
	/*$scope.images = ["red.jpg","amber.png","green.png"];
	$scope.red=function(){
		$scope.x=$scope.images[0];
	}
	$scope.amber=function(){
		$scope.x=$scope.images[1];
	}
	$scope.green=function(){
		$scope.x=$scope.images[2];
	}

	$scope.slides=["phone1.jpg","phone2.jpg","phone3.jpg","phone4.jpg","phone5.jpg","phone6.jpg"];
	$scope.ind=0;
	$scope.net=function(){
    if ($scope.ind>=$scope.slides.length-1){
        $scope.ind=0;
        }
        else
    { console.log($scope.slides.length);
        {$scope.ind=$scope.ind+1;
    }
    }};

$scope.prev=function(){
        if ($scope.ind==0){
            $scope.ind=$scope.slides.length-1;
            }
            else
        { console.log($scope.slides.length-1);
            {$scope.ind=$scope.ind-1;
        }
        }};*/
        $scope.colors = ["brown","cyan","yellow","green","blue","pink"];
        
        $scope.random=function(){
            return 0.5-Math.random();
            $scope.show= $scope.colors[Math.floor(Math.random() * $scope.colors.length)];
            console.log($scope.show);
            
           
            
        }
        
        
        $scope.x=false;
        $scope.y=true;
        $scope.z=true;
        $scope.p=true;

        $scope.cak=function(){
        	$scope.x=true;
         
            $scope.y=false;
        

        }
        $scope.frut=function(){
        	$scope.x=true;
         
            $scope.z=false;
        

        }
        $scope.back=function(){
        	$scope.x=false;
         
            $scope.y=true;
            $scope.z=true;
            $scope.p=true;
        

        }
        $scope.cak1=function(c){
        $scope.p=false;	
        $scope.y=true;
		$scope.pic=c;
        console.log($scope.pic);
	}
	$scope.cak2=function(c){
		$scope.p=false;	
        $scope.y=true;
		$scope.pic=c;
	}
	$scope.frut1=function(c){
		$scope.p=false;	
        $scope.z=true;
		$scope.pic=c;
	}
	$scope.frut2=function(c){
		$scope.p=false;	
        $scope.z=true;
		$scope.pic=c;
	}
         
         



});