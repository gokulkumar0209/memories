import * as api from '../api'

// Action Creators

const getPosts=()=>async(dispatch) =>{
    try{
        const {data}= await api.fetchPosts()
        // const diapatch
    }
    catch{

    }
    const action = {type:'FETCH_ALL',payload:[]}
    return action
}
