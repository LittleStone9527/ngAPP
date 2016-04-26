'use strict';

describe('Controller: MyDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('ngAppApp'));

  var MyDialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyDialogCtrl = $controller('MyDialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyDialogCtrl.awesomeThings.length).toBe(3);
  });
});
