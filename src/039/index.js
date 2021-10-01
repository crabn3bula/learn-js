function checkSpam(str) {
  const loweredStr = str.toLowerCase()
  return loweredStr.includes('viagra') || loweredStr.includes('xxx');
}

function outputResult(result) {
  return alert(result ? 'spam found' : 'spam not found');
}

outputResult(checkSpam('buy ViAgRA now'));
outputResult(checkSpam('free xxxxx'));
outputResult(checkSpam("innocent rabbit"));