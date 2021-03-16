
export function button(props ) {
    return (
       <button type="submit">
        {(props.status === true) ? "Submit" : "Play again?"}   
       </button>
       ) 
}

export default Button