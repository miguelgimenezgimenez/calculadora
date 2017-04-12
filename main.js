$(document).ready(function() {
  $('select').material_select();
  $('button').on('click', () => {
    const a = $('select');
    const calc = a[0].value * a[1].value * 1.5;
    console.log(calc);
  });
});
