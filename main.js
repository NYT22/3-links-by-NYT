
const btnSwitch = documentquerySelection('#Switch');

btnSwitch.addEventListener('click', () => {
    document.body.classlist.toggle('dark');
    btnSwitch.classlist.toggle('active');
});


