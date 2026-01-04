app.controller('loginController', function($scope, $location) {

  const userAgent = navigator.userAgent;
  const isMobile = /android|iphone|ipad|mobile/i.test(userAgent);

  if (isMobile) {
    $scope.userAgent = userAgent;
    $scope.state = "nosupport";
    return;
  }

  $scope.state = "first";

  // === PERSIST DATA LOGIN ===
  let saved = localStorage.getItem("realLogin");
  $scope.real = saved ? JSON.parse(saved) : {
    nik: generateRandomDigit(8),
    no_peserta: generateRandomDigit(10),
    pin_peserta: generateRandomAlphanumeric(),
    pin_sesi: generateRandomDigit(3)
  };

  if (!saved) {
    localStorage.setItem("realLogin", JSON.stringify($scope.real));
  }

  $scope.entry = {
    nik: "",
    no_peserta: "",
    pin_peserta: "",
    pin_sesi: ""
  };

  const modal = new bootstrap.Modal(
    document.getElementById('confirmationModal')
  );

  $scope.mulai = () => $scope.state = "login";
  $scope.login = () => modal.show();

  $scope.realLogin = function() {
    modal.hide();

    if ($scope.real.nik !== $scope.entry.nik)
      return $scope.error = "ERROR 001x NIK tidak sesuai";

    if ($scope.real.no_peserta !== $scope.entry.no_peserta)
      return $scope.error = "ERROR 002x No Peserta tidak sesuai";

    if ($scope.real.pin_peserta !== $scope.entry.pin_peserta)
      return $scope.error = "ERROR 005x PIN Peserta tidak sesuai";

    if ($scope.real.pin_sesi !== $scope.entry.pin_sesi)
      return $scope.error = "ERROR 008x PIN Sesi tidak sesuai";

    $scope.state = "start";
  };

  $scope.mulaiUjian = () => $location.path('/ujian');

  $scope.ulangiSimulasi = function() {
    localStorage.removeItem("realLogin");
    location.reload();
  };

});
