import React from 'react'

const Moveis = props => {
  return (
    <div>
      
      <span>
        {' '}
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.image}`}
        />{' '}
      </span>
      <section className='indevidual'>
        <h3 className=" Head">{props.title}</h3>
        <h2>{props.overview}</h2>
      </section>
    </div>
  )
}

export default Moveis
 