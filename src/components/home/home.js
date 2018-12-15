import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import News from './news';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      const posts = res.data;
      this.setState({
        posts,
      });
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.posts.map((posts, index) => {
          return (
            <div className="col-md-3">
              <Link to={`/home/${posts.id}`}>
                <News key={index} title={posts.title} body={posts.body} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
