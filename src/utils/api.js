import axios from "axios";
import { getQueriesForElement } from "@testing-library/react";

const Endpoint = "http://localhost:3030"


export default { 

    posts(url) {
      return {
        getOne: ({ id }) => axios.get(`${url}/${id}`),
        getAll: () => {return `${Endpoint}/${url}`},
        update: (toUpdate) =>  axios.put(url,toUpdate),
        create: (toCreate) =>  axios.put(url,toCreate),
        delete: ({ id }) =>  axios.delete(`${url}/${id}`)
      }
    },
    users(){
      return {
        getByid :(id) => axios.get(`${Endpoint}/users/${id}`),
        get :(username) => axios.get(`${Endpoint}/users?username=${username}`),
        update : (id,payload) => axios.put(`${Endpoint}/users/${id}`,payload)
      }
    },
    pending_request(){
      return {
        get : (id) => axios.get(`${Endpoint}/pending_requests/${id}`)
      }
    },
    forms(){
      return {

        get : (title) => axios.get(`${Endpoint}/forms?title=${title}`),
        //post :(payload) => axios.post(`${Endpoint}/forms`,payload)
      }
    },
    flowChart(url){
      return{

        get : (title) => {return `${Endpoint}/${url}?title=${title}`}
      }
    },
    menu(){
      return axios.get(`${Endpoint}/menu`)
      
    },
    getWorkFlow(url){
      return {
        get :(username,title) =>{ return `${Endpoint}/${url}?User=${username}&Title=${title}`},
        getByid : (id) => {return `${Endpoint}/${url}?id=${id}`}
      }
    },
    updateWorkFlow(url, id){
	return{
	 put : (payload) => axios.put(`${Endpoint}/${url}/${id}`,payload)
		
	}
	
    },

    saveMenu(url,id){
      return {
        put :(payload) => axios.put(`${Endpoint}/${url}/${id}`,payload)
      }
    },
    saveCustomFlowChart(url){
      return {
        post :(payload) => axios.post(`${Endpoint}/${url}`,payload)
      }
    },

    saveCustomForm(url){
      return {
        post :(payload) => axios.post(`${Endpoint}/${url}`,payload)
      }
    },
    workflow(url){
      return{

        post : (payload) => axios.post(`${Endpoint}/${url}`,payload)

      }
    },        
}
