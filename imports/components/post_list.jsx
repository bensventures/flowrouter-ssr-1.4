import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Posts from '../lib/collections';

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title}) => (
        <li key={_id}>
          {title}
        </li>
      ))}
    </ul>
  </div>
);

export default createContainer(() => {
  DocHead.setTitle('My Blog');

  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, {sort: {_id: 1}}).fetch()
  };
} , PostList);
