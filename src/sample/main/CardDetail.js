import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/data-provider';

const CardDetail = () => {
  const ctx = useContext(DataContext);
  const { id } = useParams();

  const data = ctx.find((item) => item.id === id);

  return (
    <div>
      <h1>{data.label}</h1>
      <h3>{data.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi possimus corrupti odio similique, sunt ex consequuntur! Sapiente veritatis neque voluptas iusto, expedita perferendis quas eum maiores nemo, beatae esse sed optio doloremque ut quam voluptates inventore fugiat eius autem delectus accusantium fugit. Quas maiores reprehenderit magnam blanditiis enim assumenda, soluta, perferendis eos dolorem dolores esse iure totam mollitia quam possimus, aspernatur fugit repudiandae cum tempore recusandae facere. Aliquid quibusdam illo ipsum ea quod repellendus unde id blanditiis nobis neque sapiente excepturi laborum rerum magnam dignissimos ad aliquam odit provident dolorum est, cumque tenetur consequatur? Dignissimos nisi alias atque veniam cumque!</h3>
    </div>
  )
}

export default CardDetail
