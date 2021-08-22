
// task 1
function show(array){
    console.log(array)
}

var array =  [];

array = ['fruits', 'vegetables', 'fbread', 'milk', 'juice'];

show(array.length);
show('POP()');
show(array);
show(array.pop());
// task 2
var styles = [];
styles = ['Djaz', 'Bluz']
show(styles);
styles.push('Rok-n-Rol');
show(styles);
styles.splice(-2,1,'Klasika');
show(styles);
// show('SHIFT()');
show(styles);
show(styles.shift());
show(styles);
styles.unshift('Rep', 'Reggi')
show(styles);

// task 3
function find(arr, value) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}

var arr = [1, 2, 3, 5, 9];
console.log(arr);
console.log(find(arr, 5));
console.log(find(arr, 'value'));
find();

// task 4
function filterRange(array, a, b) {
	var Array = [];
	for(var i = 0; i < array.length; i++){
		if ((array[i] >= a) & (array[i] <= b)){
			Array.push(array[i]);
		}
	}
	return Array;
}

var array = [1, 5, 56, 8, 9, 76];
console.log(filterRange(array, 2, 9));
//console.log(array);
line();