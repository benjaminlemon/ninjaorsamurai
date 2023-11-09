export const getNinjaTally = function () {
  if (localStorage.getItem('ninjaTally')) {
    return localStorage.getItem('ninjaTally');
  }
};

export const getSamuraiTally = function () {
  if (localStorage.getItem('samuraiTally')) {
    return localStorage.getItem('samuraiTally');
  }
};

export const initiateLocalStorage = function () {
  if (!localStorage.getItem('samuraiTally')) {
    let samuraiTally = 0;
    localStorage.setItem('samuraiTally', samuraiTally);
  }

  if (!localStorage.getItem('ninjaTally')) {
    let ninjaTally = 0;
    localStorage.setItem('ninjaTally', ninjaTally);
  }
};

export const setNinjaTally = function (value) {
  localStorage.setItem('ninjaTally', value);
};

export const setSamuraiTally = function (value) {
  localStorage.setItem('samuraiTally', value);
};
