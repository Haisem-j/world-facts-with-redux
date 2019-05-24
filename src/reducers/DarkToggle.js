
export default (init=false, action) =>{
    if(action.type === 'DARK_MODE'){
        if(action.payload){
            return false;
        }else{
            return true;
        }
    }else{
        return init
    }
}