import config from '../imports/config';
import publications from '../imports/publications';

//import routes from '../imports/lib/routes';
import Posts from '../imports/lib/collections'

Meteor.startup(() => {
  Posts.remove({});

  Posts.insert({
    _id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  
  Posts.insert({
  	_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'
  });
  
  Posts.insert({
  	_id: 'three', title: 'My Secret Post', category: 'private'
  });

  console.log(Posts.find({}).fetch())
});
