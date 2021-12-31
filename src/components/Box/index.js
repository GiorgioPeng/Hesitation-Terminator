import * as React from 'react';
import Box from '@material-ui/core/Box'
import Dialog from '../Dialog'
import { useGlobalState } from '../../globalState'
export default function SimplePaper() {
    const [state, updateState] = useGlobalState()

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 256,
                    // height: 256,
                },
            }}
        >
            {state.options.map((e) => {
                return <Dialog key={e} index={e} />
            })}
        </Box>
    );
}
