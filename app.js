function findSum(){
	var len = arguments.length;	/* len variable stores the length of the arguments array*/
	var i, sum =0;				/* sum variable is to store the clculated sum of the values passed to this method*/
	for(i=0;i<len;i++) {
		sum += arguments[i];
	}
	return sum;
}

var totalSum = findSum(4,5,8); /* findSum method is called by passing the arguments.Returned value is stored in totalSum*/
console.log(totalSum);
console.log(totalSum);