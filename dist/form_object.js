$fn.formObject=function(){const a={};return $each($(this).serializaArray(),(e,n)=>{a[n.name]=n.value||""}),a};