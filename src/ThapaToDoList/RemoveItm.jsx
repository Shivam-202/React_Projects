
import './ToDoList.css';

const RemoveItem = (props) => {
  

    return (
        <>
            {

                <div className='itm'>
                    <button onClick={()=>{
                        props.onSelect(props.id);
                    }} className='rembtn'><i class="fa-solid fa-xmark"></i></button>
                    <li>{props.itemData}</li>
                </div>

            }


        </>
    );
}

export default RemoveItem;