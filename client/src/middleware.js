export function loggerMiddleware(next) {
  return action => {
    console.log(action);
    let logText = document.createTextNode(JSON.stringify(action));
    let par = document.createElement('p');
    par.appendChild(logText);
    document.getElementById('log').appendChild(par);
    next(action);
  };
}
