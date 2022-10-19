import { useContext } from 'react';
import { MyInformation ,MyFunction} from '../App'

let ConC = () => {

    let detailsArr = useContext(MyInformation);
    let func = useContext(MyFunction);

    let [firstname,lastname,age,perc] = detailsArr;


    return (
        <>
            <h1 style={{ color: 'red' }}>
                My Name is: {firstname} {lastname} and age is: {age} and percentage: {perc}% <br/> 
                Function Value: {func()}
            </h1>
        </>
    );
}

export default ConC;