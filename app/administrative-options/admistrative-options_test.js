'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.admistrative-options'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('AdmistrativeOptionsCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
