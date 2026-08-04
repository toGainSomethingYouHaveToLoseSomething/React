
function Hello(){
  let myName = 'seyam';
  let fullname = ()=>{
    return 'Mohammad Seyam Hossain';
  }
  return <h3>hello {myName} and my full name: {fullname()}</h3>
}

export default Hello;