import * as React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import { useGlobalState } from '../../globalState';
import Tooltip from '@material-ui/core/Tooltip';

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const [counter, setCounter] = React.useState(0)
    const addFactor = () => {
        let tempOptions = state.options
        tempOptions.push(counter)
        setCounter(counter + 1)
        updateState('options', tempOptions)

        let tempScores = state.scores
        tempScores.push([])
        updateState('scores', tempScores)
    }
    return (
        <Tooltip title="添加令人踌躇的选项" placement="top">
            <IconButton aria-label="adder" color="success" size='large' onClick={addFactor}>
                <AddCircleOutlineIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
    );
}
