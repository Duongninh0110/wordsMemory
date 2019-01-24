import React from 'react';

class InputWord extends React.Component {
    state = { word: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.word);
        // console.log( this.state.word);
    }

    componentWillReceiveProps(newProps) {
        
        let wordArr = this.state.word.split('-');
        // console.log(wordArr);
       let len = wordArr.length -1;
       console.log(len)
       let lastWord = wordArr[len];
       // // console.log('te',lastWord)
       console.log(newProps.lWord)
       if(newProps.lWord===lastWord) {
        alert('your word is same as last word');
       }
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    Enter previous words and your new word:
                    <input 
                    type="text" 
                    value={ this.state.word }
                    onChange={e => this.setState( { word: e.target.value })}
                    />
                </form>
            </div>
            );
    }
}

export default InputWord;