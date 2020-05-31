import { createStore, combineReducers } from 'redux';

function AdminSide(oldData,newData){
    console.log(newData);
    return 'I am Admin Side'
}
let myData={
    loggedUser:[],
    users:[]
}

function UserSide(oldData = myData,newData) {
    let newState = JSON.parse(JSON.stringify(oldData));
    if(newData.type == 'USER_SIGNUP'){
        
        newState.users.push(newData.payload)
        
    }else if(newData.type == 'USER_LOGIN'){
        let userFound = newState.users.find((user)=>{
            if(user.username == newData.payload.username && user.password == newData.payload.password){
                return true;
            }
        });
        if(userFound){
            newState.loggedUser = userFound;
            // newData.component.props.history.push('/dashboard');
        }else{
            alert('User Not Found');
            
        }
        
     }else if (newData.type=='USER_LOGOUT') {
         newState.loggedUser = null;
         newData.component.props.history.push('/login')
     }

    return newState;
}
let MultipleReducer = combineReducers({AdminSide,UserSide});
let myStore = createStore(MultipleReducer);
export default myStore;