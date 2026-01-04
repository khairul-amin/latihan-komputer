app.controller('loginController', function($scope, $location) {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    isMobile = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop|mobile/i.test(userAgent);

    if(isMobile) {
      $scope.userAgent = userAgent;
      $scope.state = "nosupport";
    } else {
      $scope.state = "first";
    }
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    
    $scope.real = {
        "nik": generateRandomDigit(8),
        "no_peserta": generateRandomDigit(10),
        "pin_peserta": generateRandomAlphanumeric(),
        "pin_sesi": generateRandomDigit(3)
    }

    $scope.entry = {
        "nik": "",
        "no_peserta": "",
        "pin_peserta": "",
        "pin_sesi": "",
    }
    $scope.mulai = function() {
        $scope.state = "login";
    }

    $scope.login = function() {
        confirmationModal.show();
    };

    $scope.realLogin = function() {
        
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.hide();

        
        if($scope.real.nik != $scope.entry.nik) {
            $scope.error = "ERROR 001x NIK/No Peserta tidak sesuai"
            return;
        }

        if($scope.real.no_peserta != $scope.entry.no_peserta) {
            $scope.error = "ERROR 001x NIK/No Peserta tidak sesuai"
            return;
        }

        if($scope.real.pin_peserta != $scope.entry.pin_peserta) {
            $scope.error = "ERROR 005x PIN Peserta tidak sesuai"
            return;
        }

        if($scope.real.pin_sesi != $scope.entry.pin_sesi) {
            $scope.error = "ERROR 008x PIN Sesi tidak sesuai"
            return;
        }

        $scope.state = "start"
    }


    $scope.ulangi = function() {
      $location.path('/login');
    }

    $scope.mulaiUjian = function() {
        $location.path('/ujian');
    }
});
