import './Test1.css'

function Test1(props) {
  return (
    <div>
    <h1>{props.personObj.id}</h1>
    <p>{props.personObj.name}</p>
    </div>
  )
}

export default Test1