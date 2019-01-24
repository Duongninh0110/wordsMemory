import React from 'react';
import InputWord from './InputWord';
import ListWords from './ListWords';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: true,
            words: [],
            latestWord:'',
        }
    }

    componentWillMount() {
       alert('Game is loading');
    }
    componentDidMount() {
       alert('Rule: Please type in previous word and your new word. Words seperated by (-)')
    }
    componentWillReceiveProps(newProps) {
        console.log('receivv props');
       let len = this.state.words.length -1;
       let lastWord = this.state.words[len];
       console.log('te',lastWord)
       console.log(newProps.lWord)
       if(newProps.lWord===lastWord) {
        alert('your word is same as last word');
       }
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    // componentWillUpdate(nextProps, nextState) {
    //    console.log('Component WILL UPDATE!');
    // }
    // componentDidUpdate(prevProps, prevState) {
    //    console.log('Component DID UPDATE!')
    // }
    // componentWillUnmount() {
    //    console.log('Component WILL UNMOUNT!')
    // }

    checkCorrect = (arr1, arr2) => {
        let result = arr1.every((e,i) => e === arr2[i]);
        return result;
    }

    onKeyIn = (word) => {

        //setState require time to complete 
        // (console.log after setState is when the process not compeleted, so console log in render)
        // this.setState({words: newWords},()=>{
        // console.log(this.state.words);
        // });
        
        let answer = word.split('-');

        // console.log(this.state.words);

        let result = this.checkCorrect(this.state.words, answer)
        // console.log(result);

        this.setState({result: result});
        

        let len = answer.length-1
        // console.log(answer);
        this.setState({latestWord: this.state.words[this.state.words.length-1]});

        this.setState({words: [...this.state.words, answer[len]]});
    }

    render() {
        console.log(this.state.words)
        return (
            <div>
            <h1>Words Memory Game</h1>
            <InputWord inpWords={this.state.words} lWord={this.state.latestWord} onSubmit={this.onKeyIn}/>
            <h2>{this.state.result ? 'the answer is correct' : 'That is incorrect answer'}</h2>
            <ListWords words={this.state.words}/>
            </div>

            );
    }
}


export default App;