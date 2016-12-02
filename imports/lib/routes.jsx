import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';

import BlogLayout from '../layouts/blog.jsx';
import PostList from '../components/post_list';

FlowRouter.route('/', {
  name: "home",
  action() {
    mount(BlogLayout, {
      content: <PostList />
    });
  }
});
