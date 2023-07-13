import { Link } from "react-router-dom"
import "./PersonajesCard.css"


export const PersonajesCard = ({ personaje }) => {

  const imgURL = `${personaje.image}`
  const el = document.getElementsByTagName('img')
  const height = el.clientHeight
  const width = el.clientWidth
  // const imagen = el.addEventListener('mousemove', (evt) => {
  //   const { layerx, layerY } = evt

  //   const yRotation = (
  //     (layerx - width / 2) / width
  //   ) * 20
  //   const xRotation = (
  //     (layerY - height / 2) / height
  //   )

  //   const string = `
  //       perspective(500px)
  //       scale(1.1)
  //       rotatX(${xRotation}deg)
  //       rotate(${yRotation}deg)
  //     `
  //   el.style.transform = string
  // })

  // el.addEventListener('mouseout', () => {
  //   el.style.transform = `
  //   perspective(500px)
  //   scale()
  //   rotateX(0)
  //   rotateY(0)`
  // })
  return (

    <li className="personajesCard">
      <Link to={`/personaje/${personaje.id}`}>
        <img className="characterImage" src={imgURL} alt={personaje.name} />
        <div className="principal">
          <div className="box">
            <div className="inner">
              <span className="texto">{personaje.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
