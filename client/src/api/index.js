import axios from 'axios'

const url= "http://192.168.0.112:5000/posts"

export const fetchPosts=()=>{axios.get(url)}