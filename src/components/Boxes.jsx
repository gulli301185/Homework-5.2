
  const blocks = [
    {
      id: 'b1',
      block: 'yellow',
    },
    {
      id: 'b2',
      block: 'green',
    },
    {
      id: 'b3',
      block: 'color',
    },
    {
      id: 'b4',
      block: `${Math.random()}`,
    },
  ];


function Boxes(){
    return(
        <div>
            {blocks.map((el)=>{
                let color=el.block;

                if(color=="yellow" ){
                    return(
                   <div className="b1" key={el.id}></div> 

                    ) } else  if(color=="green"){
                    return(
                   <div className="b2" key={el.id}></div>    
                   
                    )} else if(color=="color"){
                     return(
                    <div className="b3"  key={el.id}></div>   

                     )} else  if(color=Number.isFinite(0)){
                      return(
                      <div className="b4"  key={el.id}></div>    
                     )} 
                })}
        </div>
    )
}


export default Boxes;