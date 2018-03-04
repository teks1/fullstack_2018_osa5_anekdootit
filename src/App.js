import React from 'react';

const compareAnecdotes = (a, b) => {
  return a.votes - b.votes
}

class App extends React.Component {
  addAnecdote = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    this.props.store.dispatch({type: 'NEW', content: event.target.anecdote.value})
    event.target.anecdote.value = ''
  }
  render() {
    const anecdotes = this.props.store.getState()
    anecdotes.sort(function(a, b) {
      return b.votes - a.votes;
    });
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={e => this.props.store.dispatch({ type: 'VOTE', data: anecdote})}>
                vote
              </button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App