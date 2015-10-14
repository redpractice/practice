function quickSort(array){
	if(array.length<=1){
		return array;
	}
	var lesser=[];
	var greater=[];
	var pivot=array[0];
	for(var i=1,l=array.length;i<l;i++){
		if(array[i]<pivot){
			lesser.push(array[i])
		}else{
			greater.push(array[i])
		}
	}
	return quickSort(lesser).concat(pivot,quickSort(greater));
}

