
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#FFD166" : "white",
        
    }
    
    return (
        <button 
            style={styles}
            onClick={props.hold}
        >{props.value}</button>
    )
}