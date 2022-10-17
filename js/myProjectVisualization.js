function visualization() {
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const form = document.querySelector('.form');
    const myProject = document.querySelector('.myProject');
    setTimeout(function() {
        body.style.display = 'none';
        nav.style.display = 'none';
        form.style.display = 'none';
        myProject.style.display = 'none';
    }, 400);
    setTimeout(function() {
        body.style.display = 'block';
    }, 1200);
    setTimeout(function() {
        nav.style.display = 'block';
    }, 1800);
    setTimeout(function() {
        form.style.display = 'block';
    }, 2200);
    setTimeout(function() {
        myProject.style.display = 'block';
    }, 2800);

    setTimeout(function() {
        projectName.value = "";
        startDate.value = "";
        endDate.value = "";
        description.value = "";
        uploadImg.value = "";
        document.querySelector('.choose').style.backgroundColor = '#dedede';
        document.querySelector('.choose').innerHTML = 'choose';
        document.querySelector('.choose').style.color = '#777';
        document.querySelector('.linkLogo').setAttribute("src", "img/link.png");
        document.querySelector('.linkLogo').style.filter = 'drop-shadow(0 0 3px rgba(120, 120, 120, 0))';
        create.style.backgroundColor = '#ccc';
        create.style.cursor = 'default';
        document.querySelector('.checkbox .nodeJs').checked = false;
        document.querySelector('.checkbox .reactJs').checked = false;
        document.querySelector('.checkbox .vueJs').checked = false;
        document.querySelector('.checkbox .typeScript').checked = false;

        console.log(dataForm)
    }, 1500);
}


