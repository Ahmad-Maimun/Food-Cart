import Button from "./Button";

/* eslint-disable react/prop-types */
function FoodCart(props) {

    let {image, name} = props.data;

    
  return (
    <div className="w-full h-screen bg-red-100 flex justify-center items-center">
        <div className="w-4/12 bg-white p-4 rounded-md shadow-md">
            <img className="w-full h-52 object-cover" src={image} alt="" />
            <h2 className="text-2xl py-3 font-bold">{name}</h2>
            <div className="flex">
              {props.dataIndex == props.dataLength - 1 ? null : <Button onClick={props.onClick}>Next</Button>}
              <div className="ml-auto">{props.dataIndex == 0 ? "" : <Button onClick={props.prevHandler}>Previous</Button>}</div>
            </div>
        </div>
    </div>
  )
}

export default FoodCart