if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}