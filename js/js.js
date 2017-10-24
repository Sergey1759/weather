window.onload = function() {

var left =  document.getElementById('left');
var right = document.getElementById('right');
var sub1 =  document.getElementById('sub-1');
var sub2 =  document.getElementById('sub-2');
var sub3 =  document.getElementById('sub-3');




    

var buf;
var arr = [sub1,sub2,sub3];

// var a = window.getComputedStyle(document.getElementById('sub-1')).getPropertyValue('display');
//    alert(a);

left.onclick = function(){
    for (var i = 0; i < 3; i++){
 var a = window.getComputedStyle(arr[i]).getPropertyValue('display');
    if (a != 'none'){
        buf = 'sub'+(i+1);
    }
    }
    function addLe1(){
        sub1.style.display = 'none';
        sub1.style.animationName = '';
        sub3.style.animationName = '';
    }
     function addLe2(){
        sub2.style.display = 'none';
        sub2.style.animationName = '';
        sub1.style.animationName = '';
    }
     function addLe3(){
        sub3.style.display = 'none';
        sub3.style.animationName = '';
        sub2.style.animationName = '';
         
    }
    if(buf == 'sub1'){   
        sub3.style.display = 'block';
        
        sub3.style.animationName = 'opacit';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '.5s';
        
        sub1.style.animationName = 'margleft';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '.5s';
        
        setTimeout(addLe1,450);
       
        
    } else if(buf == 'sub2'){
         sub1.style.display = 'block'; 
        
        sub1.style.animationName = 'opacit';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '.5s';
        
        sub2.style.animationName = 'margleft';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '.5s';
        
        setTimeout(addLe2,450);
       
    } else if(buf == 'sub3'){
         sub2.style.display = 'block';
        
        sub2.style.animationName = 'opacit';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '.5s';
        
        sub3.style.animationName = 'margleft';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '.5s';
        
        setTimeout(addLe3,450); 
        
    }
}

right.onclick = function(){
    for (var i = 0; i < 3; i++){
 var a = window.getComputedStyle(arr[i]).getPropertyValue('display');
    if (a != 'none'){
        buf = 'sub'+(i+1);
       // alert(buf);
    }
    }
    
      function addRigh1(){
        sub1.style.display = 'none';
        sub1.style.animationName = '';
        sub2.style.animationName = '';
    }
     function addRigh2(){
        sub2.style.display = 'none';
        sub2.style.animationName = '';
        sub3.style.animationName = '';
    }
     function addRigh3(){
        sub3.style.display = 'none';
        sub3.style.animationName = '';
        sub1.style.animationName = '';
         
    }
     
    if(buf == 'sub1'){
        sub2.style.display = 'block'; 
        
        sub2.style.animationName = 'opacit';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '.5s';
        
        sub1.style.animationName = 'margright';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '.5s';
        
        setTimeout(addRigh1,450);
        
    } else if(buf == 'sub2'){
        sub3.style.display = 'block'; 
        
        sub3.style.animationName = 'opacit';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '.5s';
        
        sub2.style.animationName = 'margright';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '.5s';
        
        setTimeout(addRigh2,450);
        
    } else if(buf == 'sub3'){
        sub1.style.display = 'block'; 
        
        sub1.style.animationName = 'opacit';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '.5s';
        
        sub3.style.animationName = 'margright';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '.5s';
        
        setTimeout(addRigh3,450);
    }
}
i = 0;
};