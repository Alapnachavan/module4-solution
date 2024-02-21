//solution-module4 
var names = ["John", "Jane", "Michael", "Alice", "Jack"];
for (var i = 0; i < names.length; i++) {
    var currentName = names[i];
    if (currentName.charAt(0) === 'J' || currentName.charAt(0) === 'j') {
        console.log("Goodbye " + currentName);
    } else {
        console.log("Hello " + currentName);
    }
}
