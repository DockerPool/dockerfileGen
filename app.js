/**
 * Created by waitfish on 15/6/14.
 */
var Dockerfilegen = angular
    .module('Dockerfilegen', [
        'restangular'
    ]);
Dockerfilegen.controller('mainCtrl', function ($scope) {
    $scope.dockerparam = {
        baseimage: 'ubuntu 14.04',
        maintainer: 'maintainer',
        expose: '',
        cmd: ''
    }

    $scope.gen = function (data) {
        $scope.result =
            "# Dockerfile generated\n#\n# VERSION 0.1\n\n"
            + "FROM: " + data.baseimage + "\n"
            + "MAINTAINER:" + data.maintainer + "\n"
            + "EXPOSE:" + data.expose + "\n"
            + "CMD: " + data.cmd
    }


    $scope.reset = function () {
        $scope.dockerparam = {
            baseimage: 'ubuntu 14.04',
            maintainer: 'maintainer',
            expose: '',
            cmd: ''
        }
        $scope.result =
            "# Dockerfile generated\n#\n# VERSION 0.1\n\n"
            + "FROM: " + "\n"
            + "MAINTAINER:" + "\n"
            + "EXPOSE:" + "\n"
            + "CMD: "
    }

})