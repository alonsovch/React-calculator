import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import './Calculator.css'; 


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expression: "", //save the operation
        };
    }
    whenNumberKeyPressed= (event) => {
        let inputString = this.state.expression + event.currentTarget.value;
        this.setState({ expression: inputString });
    };
    whenResetBtnPressed = () => {
        this.setState({ expression: '' });
    };
    whenOperationKeyPressed = (event) => {
        let inputString = this.state.expression;
        if(inputString !== '' && inputString.length > 0) {
            let lastIndexChar = inputString.charAt(inputString.length - 1);
            if (lastIndexChar !== event.currentTarget.value && lastIndexChar.match(/^([0-9])$/)) {
                inputString = this.state.expression + event.currentTarget.value;
                this.setState({ expression: inputString });

            }
        }
    };

    calculateFinalValue = () => {
        let inputExpression = this.state.expression;
        if (inputExpression !== '' && inputExpression.length > 0) {
            let lastIndexChar = inputExpression.charAt(inputExpression.length -1);
            if (!lastIndexChar.match(/^([0-9])$/)) {
                inputExpression = inputExpression.substring(0, inputExpression.length -1);
            }
            let finalOutput = eval(inputExpression);
            this.setState({ expression: finalOutput.toString() })
        }
    };

    //operations
    render() {
        return(
            <React.Fragment>
                <table>
                    <tr>
                       <td colSpan='4'>
                           <TextField //material-ui
                           type = 'text'
                           id = 'standard-full-width'
                           fullWidth
                           value ={this.state.expression}
                           margin='normal'
                           style ={{ fontSize: '50px' }}
                           />
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='7'
                            onClick={this.whenNumberKeyPressed}
                            >
                                7
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='8'
                            onClick={this.whenNumberKeyPressed}
                            >
                                8
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='9'
                            onClick={this.whenNumberKeyPressed}
                            >
                                9
                            </Button>
                        </td>
                        <td>
                        <Button
                            variant='contained'
                            color='primary'
                            value='/'
                            onClick={this.whenOperationKeyPressed}
                            >
                                <span>&#247;</span>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='4'
                            onClick={this.whenNumberKeyPressed}
                            >
                                4
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='5'
                            onClick={this.whenNumberKeyPressed}
                            >
                                5
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='6'
                            onClick={this.whenNumberKeyPressed}
                            >
                                6
                            </Button>
                        </td>
                        <td>
                        <Button
                            variant='contained'
                            color='primary'
                            value='*'
                            onClick={this.whenOperationKeyPressed}
                            >
                                ×
                            </Button>
                        </td>
                    </tr>
                    <tr>  
                        <td>
                            <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='1'
                            onClick={this.whenNumberKeyPressed}
                            >
                                1
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='2'
                            onClick={this.whenNumberKeyPressed}
                            >
                                2
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='3'
                            onClick={this.whenNumberKeyPressed}
                            >
                                3
                            </Button>
                        </td>
                        <td>
                        <Button
                            variant='contained'
                            color='primary'
                            value='-'
                            onClick={this.whenOperationKeyPressed}
                            >
                                -
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                            variant='contained'
                            color='primary'
                            onClick={this.whenResetBtnPressed}
                            >
                                AC
                            </Button>
                        </td>
                        <td>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            value='0'
                            onClick={this.whenNumberKeyPressed}
                            >
                                0
                            </Button>
                        </td>
                        <td>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={this.calculateFinalValue}
                            >
                                =
                            </Button>
                        </td>
                        <td>
                        <Button
                            variant='contained'
                            color='primary'
                            value='+'
                            onClick={this.whenOperationKeyPressed}
                            >
                                +
                            </Button>
                        </td>
                    </tr>
                </table> 
            </React.Fragment>
        )
    }
    


}
export default Calculator;