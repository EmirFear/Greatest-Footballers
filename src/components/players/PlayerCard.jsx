import {useState} from "react"
import { Col, Container, Row } from "react-bootstrap"; 
import Card from "react-bootstrap/Card";
const PlayerCard = ({player}) => {
    const [show,setShow] = useState(false);
    // console.log(show)
    // console.log(player);
    return   <Col>
      <Card className="player-card" role="button" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img
            // onClick={() => setShow(!show)}
            variant="top"
            src={player.img}
            title={player.name}
            alt={player.name}
          />
        ) : (
          <>
            {/* <Fragment key=> Fragmentin avantajı key propunu alabilmesi ama boş brakırsak yazamayız */}
            <Card.Header>
              <Card.Title>{player.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {player.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">
                  {" "}
                  ⚽ {item}
                </li>
              ))}
            </ul>
            <span>{player.official_career}</span>
          </>
        )}
      </Card>
    </Col>
}

export default PlayerCard

//! propsu yorumdaki yöntemlerle gönderirsek aşağıdaki şekilde karşılama yapabiliriz.
// import {useState} from "react"
// import { Col, Container, Row } from "react-bootstrap"; 
// import Card from "react-bootstrap/Card";
// const playerCard = ({img,statistics,name,official_career}) => {
//     const [show,setShow] = useState(false);
//     return   <Col>
//       <Card onClick={() => setShow(!show)}>
//         {!show ? (
//           <Card.Img
//             // onClick={() => setShow(!show)}
//             variant="top"
//             src={img}
//           />
//         ) : (
//           <>
//             {/* <Fragment key=> Fragmentin avantajı key propunu alabilmesi ama boş brakırsak yazamayız */}
//             <Card.Header>
//               <Card.Title>{name}</Card.Title>
//             </Card.Header>
//             <ul className="m-auto">
//               {statistics.map((item) => (
//                 <li className="list-unstyled h5 text-start">
//                   {" "}
//                   ⚽ {item}
//                 </li>
//               ))}
//             </ul>
//             <span>{official_career}</span>
//           </>
//         )}
//       </Card>
//     </Col>
// }

// export default playerCard