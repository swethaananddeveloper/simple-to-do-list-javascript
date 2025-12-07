document.querySelector('#push').onclick = functional (){

    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a flask")
    }
    else{
        document.querySelector('#task').innerHTML
+=`
        <div class = "task">
            <span id="taskname">
${document.querySelector ('#newtask input').value}

            </span>
            <button class="delete">
            </div>
    }
    }