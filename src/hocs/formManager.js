import React, { Component } from 'react';

export default function withForm(Cmp, initialState, schema){
    return class extends Component{
        state = {
            form: initialState,
            error: null
        }

        controlChangeHandlerFactory = name => e => {
            this.setState(({ form }) => {
                return { form: { ...form, [name]: newValue }}
            })
        }

        render() {
            return <Cmp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory}></Cmp>
        }
    }
}