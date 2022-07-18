const Ninjas = ({ninjas}) => {
    // const {ninjas} =props;
    const ninjaList = ninjas.map(ninja => {
        if(ninja.age<25) {
            return ( 
                <div className="ninja" key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                </div>
             );
        }else {
            return null
        }
        
    });

    // const ninjaList = ninjas.map( ninja => {
    //     return ninja.age<25 ? (
    //         <div className="ninja" key={ninja.id}>
    //         <div>Name:{ninja.name}</div>
    //          <div>Age:{ninja.age}</div>
    //           <div>Belt:{ninja.belt}</div>
    //             </div>
    //      ) : null;
    // })
    return (
        <div>
            {ninjaList}
        </div>
    )
    
}
 
export default Ninjas;