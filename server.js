function A(){
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res('A')
    }, 2000);
  })
}

function B(){
  return new Promise((res, rej)=>{
    res('B')
  })
}

function C(){
  return new Promise((res, rej)=>{
    rej('C')
  })
}

Promise.allSettled([A(),B(),C()]).then((op)=>{
  console.log(op);
})