import { Button } from 'bootstrap'
import React from 'react'

export const Pagination = ({prev, next, onPrevious,onNext}) => {

const handleAnterior = () => {
onPrevious();
}

const handleSiguiente = () => {
   onNext(); 
}


  return (
    <nav className='my-5'>
        <ul className='pagination justify-content-center'>
            {
                prev ?
                <li className='page-item'>
                <button className='page-link' onClick={handleAnterior}>Anterior</button>
            </li> :
            null
            }
            { next ?
            <li className='page-item'>
                <button className='page-link' onClick={handleSiguiente}>Siguiente</button>
            </li>  :
            null}
        </ul>
    </nav>
  )
}
export default Pagination
