import './SlotMatch.css';

const SlotMatch = (props) => {


  // const matchSlotFunc = () => {
  //   if (props.x == props.y && props.y == props.z) {
  //     return ("This is Match");
  //   }
  //   else {
  //     return ("This is Not Match");
  //   }
  // }

    return (
        <>
        
            <div className='emoji'>
                <div>{props.x} {props.y} {props.z}</div>
                {/* <h2>{matchSlotFunc()}</h2> */}
                <h4>{(props.x == props.y && props.y == props.z) ? "This is Match" : "This is Not Match" }</h4>
            </div>
            
        </>
    );
}

export default SlotMatch;