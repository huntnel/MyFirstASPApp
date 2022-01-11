// JavaScript source code
$('#calcGrades').click(function () {
    var total = parseFloat($('#assignment').val()) + parseFloat($('#group').val(), 10) + parseFloat($('#quiz').val(), 10) + parseFloat($('#exam').val(), 10) + parseFloat($('#intex').val(), 10);
    total = total * 100;
    letterGrade = '';
    if (total >= 94) {
        letterGrade = 'A';
    }
    else if (total >= 90) {
        letterGrade = 'A-';
    }
    else if (total >= 87) {
        letterGrade = 'B+';
    }
    else if (total >= 84) {
        letterGrade = 'B';
    }
    else if (total >= 80) {
        letterGrade = 'B-';
    }
    else if (total >= 77) {
        letterGrade = 'C+';
    }
    else if (total >= 74) {
        letterGrade = 'C';
    }
    else if (total >= 70) {
        letterGrade = 'C-';
    }
    else if (total >= 67) {
        letterGrade = 'D+';
    }
    else if (total >= 64) {
        letterGrade = 'D';
    }
    else if (total >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'F';
    }
    alert('Your final grade is ' + total + '%.\r\nYou recieved an ' + letterGrade + ' in the class.');
})