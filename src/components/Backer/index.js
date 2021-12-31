import * as React from 'react';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import IconButton from '@material-ui/core/IconButton';
import { useGlobalState } from '../../globalState'

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const backer = () => {
        let tempRemoved = state.removed
        if (tempRemoved.length == 0)
            return

        let tempFactor = state.options
        let tempElement = tempRemoved.pop()
        tempFactor.push(tempElement)
        tempFactor.sort((a, b) => a - b)
        updateState('options', tempFactor)
        updateState('removed', tempRemoved)
    }
    return (
        <IconButton aria-label="backer" color="primary" size='large' onClick={backer}>
            <SettingsBackupRestoreIcon fontSize="inherit" />
        </IconButton>
    );
}
