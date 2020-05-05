
var myArray = ['a', 2, true]
console.log(myArray)


var myArray = ['a', 2, true]
console.log(myArray[2])


var myArray = []
myArray[0] = ['index 0']
myArray[1] = ['index 1']
myArray[2] = ['index 2']
console.log(myArray)


var myArray = []
myArray[0] = ['index 0']
myArray[1] = ['index 1']
myArray[2] = ['index 2']
myArray[5] = ['index 5']
console.log(myArray)


var myArray = ['a', 2, true]
myArray[1] = undefined
console.log(myArray)


var myArray = ['index 0', 'index 1', 'index 2']
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}


var arr = ['Tea', 'Coffee', 'Milk']
console.log(arr.join())


var arr = ['Tea', 'Coffee', 'Milk']
console.log(arr.join(' - '))


var arr = ['Tea', 'Coffee', 'Milk']
arr.push('Boba')
console.log(arr.join(' - '))


var arr = ['Tea', 'Coffee', 'Milk']
arr.pop()
console.log(arr.join(' - '))


var arr = ['Tea', 'Coffee', 'Milk']
arr.unshift('Lemon')
console.log(arr.join(' - '));


var arr = ['Tea', 'Coffee', 'Milk']
arr.shift()
console.log(arr.join(' - '))
