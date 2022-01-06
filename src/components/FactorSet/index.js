import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import Chip from '@material-ui/core/Chip';

import { useGlobalState } from '../../globalState'

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const modifyFactor = (value) => {
        updateState('factors', value)
    }
    return (
        <Autocomplete
            style={{ width: '500px' }}
            multiple
            options={[]}
            id="tags-filled"
            freeSolo
            value={state.factors}
            onChange={(event, value) => modifyFactor(value)}
            renderTags={(value, getTagProps) => {
                return value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="filled"
                    label="添加能够辅助决策的方面/因素"
                    placeholder="因素"
                />
            )}
        />
    );
}
