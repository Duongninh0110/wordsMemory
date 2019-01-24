import React from 'react';

class ListWords extends React.Component {

    render() {
        const listWord = this.props.words.map((word,index) => {
            return <div key={index} >{word}</div>
        });
        return (<div>
                correct answer is:
                <br/>
                {listWord}</div>);
    }
}

export default ListWords;