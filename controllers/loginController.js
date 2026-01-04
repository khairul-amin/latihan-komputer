app.controller('loginController', function($scope, $location) {

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop|mobile/i.test(userAgent);

  if(isMobile) {
    $scope.userAgent = userAgent;
    $scope.state = "nosupport";
  } else {
    $scope.state = "first";
  }

  var confirmationModal = new bootstrap.Modal(
    document.getElementById('confirmationModal')
  );

  function generateRandomDigit(n) {
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    let remaining = '';
    for (let i = 0; i < n; i++) remaining += Math.floor(Math.random() * 10);
    return (firstDigit + remaining).toString();
  }

  function generateRandomAlphanumeric() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let r = '';
    for (let i = 0; i < 4; i++) {
      r += chars[Math.floor(Math.random() * chars.length)];
    }
    return r;
  }

  $scope.real = {
    nik: generateRandomDigit(8),
    no_peserta: generateRandomDigit(10),
    pin_peserta: generateRandomAlphanumeric(),
    pin_sesi: generateRandomDigit(3)
  };

  $scope.entry = {};

  $scope.mulai = () => $scope.state = "login";
  $scope.login = () => confirmationModal.show();

  $scope.realLogin = function() {
    confirmationModal.hide();

    if($scope.real.nik != $scope.entry.nik)
      return $scope.error = "ERROR NIK tidak sesuai";
    if($scope.real.no_peserta != $scope.entry.no_peserta)
      return $scope.error = "ERROR No Peserta tidak sesuai";
    if($scope.real.pin_peserta != $scope.entry.pin_peserta)
      return $scope.error = "ERROR PIN Peserta tidak sesuai";
    if($scope.real.pin_sesi != $scope.entry.pin_sesi)
      return $scope.error = "ERROR PIN Sesi tidak sesuai";

    $scope.state = "start";
  };

  $scope.mulaiUjian = () => $location.path('/ujian');
});
