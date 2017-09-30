// style for page change
document.getElementById('textChanger').onclick = function () {
    document.getElementById("about-me").innerHTML = "I am blessed with two handsome boys and a caring husband. Most of my free time is spent with my family. We love to travel and go places near and far. ";
};
//style for toggle interest button
$('#btnToggle').on('click', function () {
    $('.int').toggle();
});
//style for toggle hobby button
$('#btn_Toggle').on('click', function () {
    $('.hob').toggle();
});
//style for toggle resume button
$('#resume').on('click', function () {
    $('.box').toggle();
});
//style for toggle books i love button
$('#book').on('click', function () {
    $('.class5').toggle();
});