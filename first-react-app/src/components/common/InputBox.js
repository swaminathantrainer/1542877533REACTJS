import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        const { placeholder, onChangeEventHandler, style } = this.props;
        const { input, formStyle } = styles;
        const { value } = this.state;

        return (
            <form style={formStyle}>
                <input
                    style={{ ...input, ...style }}
                    type='text'
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => {
                        const val = event.target.value;
                        this.setState({
                            value: val
                        });
                        onChangeEventHandler(event);
                    }}
                />
            </form>
        );
    }
}

// const InputBox = ({ placeholder, onChangeEventHandler, style = {} }) => {
//     const { input, formStyle } = styles;

//     console.log(style);

//     return (
//         <form style={formStyle}>
//             <input
//                 style={{ ...input, ...style }}
//                 type='text'
//                 placeholder={placeholder}
//                 value=''
//                 onChange={(onChangeEventHandler)}
//             />
//         </form>
//     )
// };

const styles = {
    formStyle: {
        display: 'flex',
        flex: 1
    },

    input: {
        flex: 1,
        borderColor: '#d3d3d3',
        borderRadius: 5,
        padding: 5
    }
};

export default InputBox;