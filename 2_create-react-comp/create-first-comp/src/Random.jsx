function Random(){

  let number = (Math.round(Math.random() *10)%6)+1;

  return <h1 style={{'background-color':'#456575'}}>Random number is: {number}</h1>
}

export default Random;