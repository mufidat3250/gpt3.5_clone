'use client'
import {entity} from 'simpler-state'


export const modalEntity = entity<{openModal:boolean}>({openModal:false})

export const closeModal = (data:boolean)=>{
    modalEntity.set((val)=> ({...val, openModal:data}))
}