const jamming = `This project is a React web application. It uses React components, 
                passing state, and requests with the Spotify API to build a website 
                that allows users to search the Spotify library, create a custom 
                playlist, then save it to their Spotify account.To navigate to project 
                <a href="http://exuberant-wind.surge.sh/">click me!</a>`;

const hideAndSeek = `This project uses HTML, CSS and JavaScript to create a fun game 
                    in which you have to open doors without find the robot till the 
                    last door. This game uses JavaScript to give all the interactivity 
                    to the webpage.To navigate to project <a href="../HideAndSeekGame/index.html">click me!</a>`;

const expresso = `Web Development project for doing CRUD (Create Delete Update and 
                Delete) on the menu, menuItems, employee and employeeTimesheet. Used 
                Express for creating the API Routers and sqlite for the database.To 
                navigate to project <a href="https://github.com/AmanDubey10198/WEB_DEVELOPMENT/tree/master/expresso">click me!</a>`;

const fras = `Face recognition and gender identification (FRAS). This machine learning 
            based project is coded in python programming language with tensorflow as a 
            backend for doing mathematical calculations. The trained model was giving 
            an accuracy of over 98% on the testing dataset.To navigate to project 
            <a href="https://github.com/AmanDubey10198/FaceDetect">click me!</a>`;

const contentDict = {
    jamming,
    hideAndSeek,
    expresso,
    fras,
    default: "Select project to view"
}

const main = () => {
    $("#project-description-content").html(contentDict["default"]);

    $(".project-title").on('click', (e) => {
        const selected = e.target.id;
        $("#project-description-content").html(contentDict[selected]);
    });
    
    
};

$(document).ready(main);
