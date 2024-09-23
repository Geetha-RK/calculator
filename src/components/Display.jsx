export default function Display({ displayValue }){
    return(
        <>
        <input className='display' type="text" value={displayValue} readOnly/>
        </>
    )
}