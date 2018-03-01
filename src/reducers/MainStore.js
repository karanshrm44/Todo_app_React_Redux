
let initalState={
value:'karan',
arr:[]
}
const MainStore=(state=initalState,action)=>{

    if(action.type==="ADD")
    {
        return {
            ...state,
            value:action.value
        }
    }
    if(action.type==="DISPLAY")
    {
      const  newArray=[...state.arr];
      const  newarray=newArray.concat(state.value);
        return {
            ...state,
            value:'',
            arr:newarray
        }
    }

    if(action.type==="REMOVE")
    {
        const newArray=[...state.arr];
        const newarray=newArray.filter((item,index)=>action.value!==index)
        return {
            ...state,
            value:'', 
            arr:newarray
        }
    }

    return state;
}


export default MainStore;