export default function Die(props) {
    const styles={
        'backgroundColor':props.isHeld?"#59E391":"white"
    }
    function hold(){
        console.log(props.id)
    }
    return (
        <button style={styles} onClick={hold}>{props.value}</button>
    )
}