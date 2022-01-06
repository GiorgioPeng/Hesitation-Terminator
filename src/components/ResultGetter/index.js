import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useGlobalState } from '../../globalState'

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const calc = () => {
        let scores = state.scores
        let result = scores.map((e, i) => {
            if (state.options.indexOf(i) === -1) {
                return -1
            }
            let sum = 0
            e.forEach(element => {
                sum += element
            });
            return sum
        })
        result = result.filter(e => e !== -1)
        let bestIndex = result.indexOf(Math.max(...result))
        updateState('bestIndex', state.options[bestIndex])
    }
    const reset = ()=>{
        updateState('bestIndex', -1)
    }
    return (
        <>
            <Button color="success" onClick={calc} variant="contained" style={{
                'position': 'fixed',
                'opacity': '0.8',
                'bottom': '30px',
                'width': '100px',
                'z-index':'999',
                'left': 'calc(50vw - 70px)'
            }}>结果计算</Button>
            <Button color="secondary" onClick={reset} variant="contained" style={{
                'position': 'fixed',
                'opacity': '0.8',
                'bottom': '30px',
                'width': '100px',
                'z-index':'999',
                'left': 'calc(50vw + 70px)'
            }}>重置结果</Button>
        </>
    );
}
