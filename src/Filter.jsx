const Filter = (props) => {
    return (
        < div > filter shown with <input onChange={props.handleNewFilter} value={props.newFilter} ></input></div >
    )
}
export default Filter