import * as React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import { useGlobalState } from '../../globalState'

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const [counter, setCounter] = React.useState(0)
    const addFactor = ()=>{
        let tempOptions = state.options
        tempOptions.push(counter)
        setCounter(counter+1)
        updateState('options', tempOptions)
    }
    return (
        <IconButton aria-label="adder" color="success" size='large' onClick={addFactor}>
            <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
    );
}
