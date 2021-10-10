const styles = ['Jazz', 'Blues'];
styles.push('Rock & Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
alert(styles.shift());
styles.unshift('Rap', 'Reggae');