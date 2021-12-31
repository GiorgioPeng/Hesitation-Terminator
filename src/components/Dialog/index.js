import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import TextField from '@material-ui/core/TextField';
import { useGlobalState } from '../../globalState'
import cyan from '@material-ui/core/colors/cyan';
import Ranker from '../Ranker'
export default function SimplePaper(props) {
    const { index } = props
    const [state, updateState] = useGlobalState()
    const cancel = () => {
        let tempOptions = state.options
        let indexOfindex = tempOptions.indexOf(index)
        tempOptions.splice(indexOfindex, 1)
        updateState('options', tempOptions)
        let tempRemoved = state.removed
        tempRemoved.push(index)
        updateState('removed', tempRemoved)
    }
    return (
        <Paper elevation={3}
            style={{
                padding: '10px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignContent: 'center',
                backgroundColor: cyan[Object.keys(cyan)[ index % Object.keys(cyan).length]]
            }}>
            <IconButton
                aria-label="close"
                color="secondary"
                size='middle'
                style={{ position: 'absolute', right: '0', top: '0' }}
                onClick={cancel}
            >
                <CancelPresentationIcon fontSize="inherit" />
            </IconButton>

            <TextField label={"备选项" + index} style={{marginTop:'20px'}} />
            <Ranker />
            <Ranker />
            <Ranker />
            <Ranker />
            <Ranker />
            <Ranker />
        </Paper>
    );
}
