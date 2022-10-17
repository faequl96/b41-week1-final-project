const btnCreate = document.querySelector('.create');
const dataForm = [];

btnCreate.addEventListener('click', function() {
    const projectName = document.querySelector('.projectName');
    const startDate = document.querySelector('.startDate');
    const endDate= document.querySelector('.endDate');
    const description = document.querySelector('.description');
    const uploadImg = document.querySelector('.uploadImg');


    const obj = {}
    obj.projectName = projectName.value;
    obj.startDate = startDate.value;
    obj.endDate= endDate.value;
    obj.duration = calcDur(obj.startDate, obj.endDate); // myProjectCalDur.js : 1
    obj.description = description.value;
    obj.uploadImg = uploadImg.files;
    if(obj.uploadImg.length != 0) {
        obj.renderImg = URL.createObjectURL(obj.uploadImg[0]);
    } else {
        obj.renderImg = "";
    }
    
    if(document.querySelector('.nodeJs').checked) {
        obj.node = document.querySelector('.nodeJs').value;
        if(obj.node == 'Node JS') {obj.nodeJs = 'img/node.png'}
    } else {
        obj.node = "";
        obj.nodeJs = "";
    }
    if(document.querySelector('.reactJs').checked) {
        obj.react = document.querySelector('.reactJs').value;
        if(obj.react == 'React JS') {obj.reactJs = 'img/react.png'}
    } else {
        obj.react = "";
        obj.reactJs = "";
    }
    if(document.querySelector('.vueJs').checked) {
        obj.vue = document.querySelector('.vueJs').value;
        if(obj.vue == 'Vue JS') {obj.vueJs = 'img/vue.png'}
    } else {
        obj.vue = "";
        obj.vueJs = "";
    }
    if(document.querySelector('.typeScript').checked) {
        obj.ts = document.querySelector('.typeScript').value;
        if(obj.ts == 'TypeScript') {obj.typeScript = 'img/typescript.png'}
    } else {
        obj.ts = "";
        obj.typeScript = "";
    }




    if(obj.projectName != "" && obj.startDate != "" && obj.endDate != "" && obj.description != "" && obj.renderImg != "") {
        
        dataForm.push(obj);
        visualization(); // myProjectVisualization.js : 1

        setTimeout(function() {
            renderData(); // myProject.js : 74
        }, 1200);
        
    } else {
        alert('Silahkan isi field yang wajib diisi');
    }
    
})



function renderData() {
    // document.querySelector('.container').innerHTML = "";

    for(let i = 0; i < dataForm.length; i++) {
        if(i == dataForm.length - 1) {
            document.querySelector('.container').innerHTML += `
                <div class="card card${i+1}">
                    <div class="maxSizeImg">
                        <img src="${dataForm[i].renderImg}" alt="" class="imgContent">
                    </div>
                    <div class="judulCard">
                        <div class="kotakJudul">
                            <h3>${dataForm[i].projectName}</h3>
                        </div>
                        <div class="durasi">
                            <div>
                                <p>Duration :</p>
                            </div>
                            <div>
                                <p>${dataForm[i].duration}</p>
                            </div>
                        </div>
                    </div>
                    <div class="isiCard">
                        <p>${dataForm[i].description}</p>
                    </div>
                    <div class="techCheck">
                        <img src="${dataForm[i].nodeJs}">
                        <img src="${dataForm[i].reactJs}">
                        <img src="${dataForm[i].vueJs}">
                        <img src="${dataForm[i].typeScript}">
                    </div>
                    <div class="editDelete">
                        <div class="edit">Edit</div>
                        <div class="delete">Delete</div>
                    </div>
                </div>
            `
            if(dataForm[i].nodeJs != 'img/node.png') {
                document.querySelector(`.card${i+1} .techCheck img:nth-Child(1)`).style.display = 'none';
            }
            if(dataForm[i].reactJs != 'img/react.png') {
                document.querySelector(`.card${i+1} .techCheck img:nth-Child(2)`).style.display = 'none';
            }
            if(dataForm[i].vueJs != 'img/vue.png') {
                document.querySelector(`.card${i+1} .techCheck img:nth-Child(3)`).style.display = 'none';
            }
            if(dataForm[i].typeScript != 'img/typescript.png') {
                document.querySelector(`.card${i+1} .techCheck img:nth-Child(4)`).style.display = 'none';
            }
            
        } 
    }

    
    for(let i = 0; i < dataForm.length; i++) {
        if(i == dataForm.length - 1) {
            document.querySelector('.projectDetail').innerHTML +=`
                    <div class="projectBox project${i+1}" style="display: none;">
                        <div class="judul">
                            <h1>${dataForm[i].projectName}</h1>
                        </div>
                        <div class="projectMetas">
                            <div class="heroImg">
                                <img src="${dataForm[i].renderImg}">
                            </div>
                            <div class="projectInfo">
                                <div class="duration">
                                    <h3>Duration</h3>
                                    <div class="startEndDate">
                                        <img src="img/calendar.png">
                                        <p>${dataForm[i].startDate} - ${dataForm[i].endDate}</p>
                                    </div>
                                    <div class="durationInfo">
                                        <img src="img/stopwatch.png">
                                        <p>${dataForm[i].duration}</p>
                                    </div>
                                </div>
                                <div class="techno">
                                    <h3>Technology</h3>
                                    <div class="techGrid">
                                        <div class="node">
                                            <img src="${dataForm[i].nodeJs}">
                                            <p>${dataForm[i].node}</p>
                                        </div>
                                        <div class="vue">
                                            <img src="${dataForm[i].vueJs}">
                                            <p>${dataForm[i].vue}</p>
                                        </div>
                                        <div class="react">
                                            <img src="${dataForm[i].reactJs}">
                                            <p>${dataForm[i].react}</p>
                                        </div>
                                        <div class="typeScript">
                                            <img src="${dataForm[i].typeScript}">
                                            <p>${dataForm[i].ts}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="projectContents">
                            <p>${dataForm[i].description}</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae similique alias obcaecati quas aut atque voluptatem quibusdam consequatur repudiandae sequi distinctio aliquid magnam, nemo, sapiente quo non rem deserunt quis praesentium vero quasi eum voluptates qui? Unde, similique, alias obcaecati accusamus voluptatum atque necessitatibus asperiores voluptates, quo perferendis perspiciatis!
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum accusamus velit aliquid officia aspernatur omnis asperiores nam ab non nihil sed temporibus, eos odio, est provident libero quas. Placeat, consequatur. Voluptatem quo temporibus quisquam iste nostrum voluptas, itaque sunt perferendis tempore. Blanditiis, placeat accusamus. Illo iste harum autem tempora aut et maxime facilis, dolorem, voluptates, nesciunt maiores vitae sapiente eligendi eum labore quasi dolore! Fugiat, officiis perspiciatis voluptas nostrum fuga quidem aperiam quam quibusdam, ullam a reprehenderit tempore laborum impedit, maxime et. Consectetur amet corrupti ea ipsum, architecto inventore obcaecati blanditiis alias corporis quidem harum. Quas ullam magnam alias dolorum?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi facilis quisquam fugit aliquid eaque nulla consequatur sequi. Suscipit ducimus deleniti cumque accusamus illo debitis voluptates, obcaecati veritatis, eum nesciunt temporibus, itaque ratione et deserunt quibusdam dicta at in numquam corrupti nostrum iure facilis! Molestias ipsum dolore est quaerat. Reprehenderit odit, harum molestiae nam distinctio hic repellendus natus culpa? Commodi.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum accusamus velit aliquid officia aspernatur omnis asperiores nam ab non nihil sed temporibus, eos odio, est provident libero quas. Placeat, consequatur. Voluptatem quo temporibus quisquam iste nostrum voluptas, itaque sunt perferendis tempore. Blanditiis, placeat accusamus. Illo iste harum autem tempora aut et maxime facilis, dolorem, voluptates, nesciunt maiores vitae sapiente eligendi eum labore quasi dolore! Fugiat, officiis perspiciatis voluptas nostrum fuga quidem aperiam quam quibusdam, ullam a reprehenderit tempore laborum impedit, maxime et. Consectetur amet corrupti ea ipsum, architecto inventore obcaecati blanditiis alias corporis quidem harum. Quas ullam magnam alias dolorum?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae similique alias obcaecati quas aut atque voluptatem quibusdam consequatur repudiandae sequi distinctio aliquid magnam, nemo, sapiente quo non rem deserunt quis praesentium vero quasi eum voluptates qui? Unde, similique, alias obcaecati accusamus voluptatum atque necessitatibus asperiores voluptates, quo perferendis perspiciatis!
                            </p>

                        </div>
                    </div>
            `
            

            if(dataForm[i].nodeJs != 'img/node.png') {
                document.querySelector(`.project${i+1} .techGrid .node`).style.display = 'none';
            }
            if(dataForm[i].reactJs != 'img/react.png') {
                document.querySelector(`.project${i+1} .techGrid .react`).style.display = 'none';
            }
            if(dataForm[i].vueJs != 'img/vue.png') {
                document.querySelector(`.project${i+1} .techGrid .vue`).style.display = 'none';
            }
            if(dataForm[i].typeScript != 'img/typescript.png') {
                document.querySelector(`.project${i+1} .techGrid .typeScript`).style.display = 'none';
            }
        }

    }

    if(dataForm.length == 1) {
        myProjectDetail1(); // myProjectDetail.js 1
    } else if(dataForm.length == 2) {
        myProjectDetail2(); // myProjectDetail.js 60
    } else if(dataForm.length == 3) {
        myProjectDetail3(); // myProjectDetail.js 166
    } else if(dataForm.length == 4) {
        myProjectDetail4(); // myProjectDetail.js 319
    } else if(dataForm.length == 5) {
        myProjectDetail5(); // myProjectDetail.js 519
    } else if(dataForm.length == 6) {
        myProjectDetail6(); // myProjectDetail.js 766
    } else if(dataForm.length == 7) {
        myProjectDetail7(); // myProjectDetail.js 1060
    } else if(dataForm.length == 8) {
        myProjectDetail8(); // myProjectDetail.js 1401
    } else if(dataForm.length == 9) {
        myProjectDetail9(); // myProjectDetail.js 1789
    }

}

