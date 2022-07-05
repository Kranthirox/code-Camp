var number = [1, 2, 3, 4, 5, 6];

function add(array) {
    let sum =''
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        ele =parseInt(array[i])
        sum =sum+ele
        console.log(sum);
    }
}

add(number)