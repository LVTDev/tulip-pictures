import React from 'react'
import FooterForm from './FooterForm'

const Contactanos = ({lang}:{lang: string}) => {
  return (
   <div className="flex font-poppins max-w-[900px] mx-auto mt-[70px]">
      <div className="w-1/2">
        <p className="text-verde text-sm font-semibold">CONTÁCTANOS</p>
        <p className="text-[48px] font-bold">Déjanos tu mensaje</p>
        <p>
          Gracias a las personas que nos compartieron sus historias. Ellos
          confiaron en nosotros y estamos muy agradecidos.
        </p>
      </div>
      <div className="w-1/2">
        <FooterForm lang={lang} />
      </div>
    </div>  )
}

export default Contactanos