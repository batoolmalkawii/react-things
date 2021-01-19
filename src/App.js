import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <h1>Books App</h1>
      <h3>My Favorite Book is: {props.fBook}</h3>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className={props.cls}>
      <small>{props.text}</small>
    </footer>
  )
}


function Book(props) {
  return (
    <li>
      <h4>Name: {props.book.name}</h4>
      <h4>Description: {props.book.description}</h4>
    </li>
  )
}


function BookList(props) {
  return (
    <main className="main">
      <h3>Number of books {props.bookList.length}</h3>
      <ul>
        {props.bookList.map(book => <Book book={book} />)}
      </ul>
    </main>
  )
}


class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.title}
          <input type="text" onChange={this.handleChange}></input>
        </label>

        <input type="submit" value="Recommend" />
      </form>
    )
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onBookCreate(this.state);
  }
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [
        {
          key: 1,
          name: "What lies Beneath",
          description: "also a movie"
        },
        {
          key: 2,
          name: "The Uncommon Type",
          description: "a book with stories"
        },
        {
          key: 3,
          name: "Eat, Pray, Love",
          description: "a book about life"
        },
      ],

      fBook: "Eat, Pray, Love",
      counter: 0
    };
    this.handleCreateBook = this.handleCreateBook.bind(this);
  }


  handleCreateBook(book) {
    let allBooks = this.state.books;
    allBooks.push({ id: 4, name: book.name, description: book.description });
    this.setState({ books: allBooks });
  }

  render() {
    return (
      <div className="App">

        <Header fBook={this.state.fBook} />
        <BookList bookList={this.state.books} />
        <h1>Recommend a Book? </h1>
        <BookForm title="Enter Name:" onBookCreate={(book) => this.handleCreateBook(book)} />
        <Footer cls="footer" text="@copyright Batool" />
      </div>
    );
  }
}

export default App;

