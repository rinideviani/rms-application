import { applyMiddleware, compose, createStore} from 'redux';
import { reducer as searchReducer, reduxSearch } from 'redux-search';



const enhancer = compose (
applyMiddleware(...),
    reduxSearch({
    resourceIndexes:{
        employee: ['author',title]
    },
    
    resourceSelector:( resourceName, state)=>{
        return state.resources.get(resourceName)
    }
})

)