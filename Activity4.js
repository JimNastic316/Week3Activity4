function buildList(list) 
{
    // empty array
    var result = [];
    
    for (var i = 0; i < list.length; i++) 
    {
     
        // array of functions 
        result.push
        ( 
        	// stores separate execution contexts for each loop
          (function(k)
          {
          		// code cite
              // similar video on youtube 
              // https://youtu.be/S_mQVH8TIoI
              return function()
              {
              	// display current value of j
                //console.log(j);
                var item = 'item' + list[k];
                alert(item + ' ' + list[k])
              }
          }(i))
           
        );
    }
    
    // return array 
    return result;
}
 
// method testlist invokes fnlist 
function testList() 
{
    
    // fnlist is what buildList returns
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) 
    {
        fnlist[j]();
    }
}



testList();

/*
function buildList(list) 
{
    // empty array
    var result = [];
    
    for (var i = 0; i < list.length; i++) 
    {
         var item = 'item' + list[i];
        //console.log('item ', list[i]);
        
        // array of functions 
        result.push
        ( 
        	// function to dispay item number and value in array
          function() 
          {
          	alert(item + ' ' + list[i])
          } 
        );
    }
    
    // return array 
    return result;
}
 
// method testlist invokes fnlist 
function testList() 
{
    
    // fnlist is what buildList returns
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) 
    {
        fnlist[j]();
    }
}




*/