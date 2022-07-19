const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        if(ninja.age<32) {
            return ( 
                <div className="ninja" key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                    <button onClick={() =>{deleteNinja(ninja.id)}}>Delete</button>
                </div>
             );
        }else {
            return null
        }  
    });
    
    return (
        <div>
            {ninjaList}
        </div>
    )
    
}
 
export default Ninjas;