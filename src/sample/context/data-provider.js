import { createContext } from "react";
import React from 'react'

export const DataContext = createContext([{
  icon: '',
  label: '',
  description: '',
  id: ''
}]);


const DataContextProvider = (props) => {

  const cardData = [
    {
      icon: 'fas fa-space-shuttle fa-4x',
      label: 'Guarantee It Will Not Expire',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem deleniti? Iusto fugiat, blanditiis consequuntur at similique, reprehenderit, molestias laboriosam molestiae error tenetur voluptates quae.',
      id: '5'
    },
    {
      icon: 'fas fa-box-open fa-4x',
      label: 'Many Service Options For You',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem deleniti? Iusto fugiat, blanditiis consequuntur at similique, reprehenderit, molestias laboriosam molestiae error tenetur voluptates quae.',
      id: '7'
    },
    {
      icon: 'fab fa-accusoft fa-4x',
      label: 'Branches Available in Many Cities',
      description: 'Culpa accusamus tempora temporibus veniam ullam, debitis voluptatum. Vel similique sint consequuntur. Iure fuga ratione omnis aliquid fugiat dolor ex aperiam saepe, vitae sit illo suscipit amet tempora nihil. Esse reprehenderit ',
      id: '9'
    }
  ];


  return (
    <DataContext.Provider value={cardData}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
