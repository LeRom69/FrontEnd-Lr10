document.addEventListener('DOMContentLoaded', function () {
    restoreFormData();
});

function saveFormData() {

    var formElements = document.getElementById('myForm').elements;

    var formData = {};

    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== 'button') {
            formData[formElements[i].name] = formElements[i].value;
        }
    }

    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Дані збережено!');
}

function restoreFormData() {

    var savedData = localStorage.getItem('formData');

    if (savedData) {
        var formData = JSON.parse(savedData);

        for (var key in formData) {
            if (formData.hasOwnProperty(key)) {
                var element = document.getElementsByName(key)[0];

                if (element) {
                    element.value = formData[key];
                }
            }
        }
    }
}