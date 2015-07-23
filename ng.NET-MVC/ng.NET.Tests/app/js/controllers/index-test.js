'use strict';

(function () {
    describe('When accessing the index html page', function () {
        var scope, controller, currentUserMock, loggedIn;

        beforeEach(function () {
            module('templateApp');

            inject(function ($rootScope, $controller, currentUser) {
                scope = $rootScope.$new();
                currentUserMock = sinon.stub(currentUser);
                loggedIn = true;
                currentUserMock.isLoggedIn.returns(loggedIn);
                controller = $controller('indexController', { $scope: scope });
            });
        });

        it('elements should appear when loggedIn is true', function () {
            expect(scope.isLoggedIn()).toBe(loggedIn);
        });
    });
})();