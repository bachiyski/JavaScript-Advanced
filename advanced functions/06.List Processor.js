function solve(){
    let state = []

    function add (str){
         state.push(str)
    }
    function remove (str){
        for (const name of state) {
            if(name === str){
            state = state.remove()
        }
    }
        
    }
    function print (){
        console.log(state.join(','));
    }

    return{
        add,
        remove,
        print
    }
}  
let proc = solve();['add pesho', 'add george', 'add peter', 'remove peter','print']
proc.add('pesho');
proc.add('george');
proc.remove('peter');
proc.add('peter');
proc.print()