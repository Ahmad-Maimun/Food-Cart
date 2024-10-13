/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <button  onClick={() => {props.onClick()}} className="btn btn-accent">Next</button>
  )
}

export default Button