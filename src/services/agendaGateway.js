import axios from "axios";
import { missingValue } from "./errorHandler";
//import { api } from "";
const api = {url: 'http://localhost:3001/api'}
export const getAllContacts = ()=>{
  return axios
    .get(`${api.url}/persons`)
    .then(response=>response.data)
}

export const createContact = (body)=>{
  missingValue(body.name, 'nombre')
  missingValue(body.number, 'numero')
  return axios
    .post(`${api.url}/persons`, body)
    .then(response=>response.data)
}

export const updateContact = (body,id)=>{
  missingValue(body.name, 'nombre')
  missingValue(body.number, 'numero')
  return axios
    .put(`${api.url}/persons/${id}`, body)
    .then(response=>response.data)
}

export const deleteContact = (id)=>{
  return axios
    .delete(`${api.url}/persons/${id}`)
    .then(response=>response.data)
}