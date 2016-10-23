
import Backbone from 'backbone';
import settings from '../settings';
import $ from 'jquery';

export default Backbone.Model.extend({

  login: function(data){

    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/${settings.appKey}/login`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (s) => {
        this.set({
          username: s.username,
          authtoken: s._kmd.authtoken,
          _id: s._id
        });
      }
    });
  },
  signup: function(data) {

    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}`,
      data: JSON.stringify({
        username: data.username,
        password: data.password
      }),
      contentType: 'application/json',
      success: (s) =>{
        this.set({
          username: s.username,
          authtoken: s._kmd.authtoken,
          _id: s._id
        });
      }
    });
  }
});
