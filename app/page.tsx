
export default function Home() {
  const Innercompo=()=>{
    return(
      <h1> hellodfgdrftgdftgdf sunil </h1>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <h1> hello next js am leraning here jjjjdgdsreftgdsretgsretg</h1>
      <DataName name="verma"/>
      <Innercompo/>
    </main>
  )
}

const DataName=(props)=>{
  return(
    <h1> hello sunil {props.name} </h1>
   
   
  )
}