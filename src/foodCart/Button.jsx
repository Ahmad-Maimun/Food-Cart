/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <button  onClick={() => {props.onClick()}} className="btn btn-accent">{props.children}</button>
  )
}

export default Button