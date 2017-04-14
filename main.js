$(document).ready(function() {
  $('#test1').prop('checked',true);
  $('select').material_select();
  $('boat-type').on('click', (args) => {})

  $('button').on('click', () => {
    var factor=1;
    if ($('#test1')[0].checked) factor = 1.5;
    var a = $('select');
    var calc = a[0].value * a[1].value * factor;
    $('.amount').html(calc+'$');
  });
});
