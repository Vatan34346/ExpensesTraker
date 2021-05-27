import './Card.css'

function Card(props)//children <Card></Card> wraping component
{
    const classes = 'card '+props.className;
    return <div className={classes}>{props.children}</div>
}


export default Card;