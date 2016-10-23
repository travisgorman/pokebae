import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import router from './router';
import settings from './settings';

$(document).ajaxSend(function( evt, xhr, jquerySettings ){

  xhr.setRequestHeader( 'Authorization', settings.basicAuth )

});


ReactDOM.render(router, document.getElementById( 'page' ))
