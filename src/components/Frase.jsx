import { Container, Image } from "react-bootstrap"

const Frase = ({personaje}) => {

  
  const { character, image, quote } = personaje;

  return (
    <>  
        <Container className="border border-danger p-3 my-3">

            <h2 className="text-center border-bottom border-black pb-2">{character}</h2>

            <Image src={image} className="img-fluid text-center w-50 " />

            <p className="bg-white p-3">{quote}</p>
        </Container>
    </>
  )
}

export default Frase