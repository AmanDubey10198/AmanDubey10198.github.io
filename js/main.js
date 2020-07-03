
const p1 = document.getElementById('project1');
const p2 = document.getElementById('project2');
const p3 = document.getElementById('project3');
const p4 = document.getElementById('project4');
const p5 = document.getElementById('project5');

const desc1 = "description of project 1";
const desc2 = "description of project 2";
const desc3 = "description of project 3";
const desc4 = `Web Development project for doing CRUD (Create Delete Update and Delete) on the menu, menuItems, employee and employeeTimesheet. Used Express for creating the API Routers and sqlite for the database.`;

const desc5 = `Face recognition and gender identification (FRAS). This machine learning based project is coded in python programming language with tensorflow as a backend for doing mathematical calculations. The trained model was giving an accuracy of over 98% on the testing dataset.`;

const d = document.getElementById('description');

p1.onmouseenter = () => {
    d.style.visibility = 'visible';
    d.innerHTML = desc1;  
};

p2.onmouseenter = () => {
    d.style.visibility = 'visible';
    d.innerHTML = desc2;  
};

p3.onmouseenter = () => {
    d.style.visibility = 'visible';
    d.innerHTML = desc3;  
};

p4.onmouseenter = () => {
    d.style.visibility = 'visible';
    d.innerHTML = desc4 + `To navigate to project<a href = "#"> click me!</a>`;  
};

p5.onmouseenter = () => {
    d.style.visibility = 'visible';
    d.innerHTML = desc5 + `To navigate to project<a href = "https://github.com/AmanDubey10198/FaceDetect"> click me!</a>`;
};

/*
const leavingProject = () => {
    d.hidden = true;
}

p1.onmouseleave = leavingProject;
p2.onmouseleave = leavingProject;
p3.onmouseleave = leavingProject;
p4.onmouseleave = leavingProject;
p5.onmouseleave = leavingProject;

*/
