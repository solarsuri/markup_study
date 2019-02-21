$("#alert-target").click(function () {
    toastr["info"]("I was launched via jQuery!")
});

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}