    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
     let popList = document.getElementById("todo-list")
    let arrayOfTodos = [
        {
        "userId": 5,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 10,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    console.log(arrayOfTodos[0].userId) // => 5
    console.log(arrayOfTodos[1].userId) // => 10
    
    const fetchTodos = () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        // .then( (response) => response.json())
        // .then( (json) => arrayOfTodos = json)
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log('response:', response)
    //   console.log('response.json():', response.json())
      return response.json()
    })
    .then((json) => {
      console.log('json:', json)
      arrayOfTodos = json
      console.log('arrayOfTodos:', arrayOfTodos)
    });

    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        console.log('arrayOfTodos IN POPULATE', arrayOfTodos)
        for (let i = 0; i < arrayOfTodos.length; i++) {
            const todo = arrayOfTodos[i];
            let parentElement = document.getElementById('todo-list')
            console.log('parentElement:', parentElement)
            let listItem = document.createElement('li')
            console.log('listItem:', listItem)
            let text = document.createTextNode(todo.title)
            console.log('text', text)
            listItem.appendChild(text)
            
            parentElement.appendChild(listItem)
           
        }
    };

    
        
        const filterTodos = () => {
            console.log('filterTODOS')
            // function clearBox(elementID)
            let newList = document.getElementById('todo-list').innerHTML = ""

            let inputElement = document.getElementById('id-input')

            let inputValue = document.querySelector('input').value;
            console.log(inputValue);

            for (let i = 0; i < arrayOfTodos; i++) {
                const todo = arrayOfTodos[i];
                console.log('todo.uderId:', todo.userId)
                let userId = document.createElement('LI')
                userId.innerHTML = todo.userId
                inputElement.appendChild(userId)
            }
            // clear elements on page
            // get input element by id
            // get input value
            // filter through array of todos to find userId === input.value
          
            // get ol parent element
            // create list item
            // create textNode and add filtered todo.title
            //append textNode to list item
            // append list item to parent element
          
          }

          const completedTodos = () => {
            console.log('completedTODOS')
            // function clearBox(elementID)
            let newList = document.getElementById('todo-list').innerHTML = ""

            let inputElement = document.getElementById('id-input')

            let inputValue = document.querySelector('input').value;
            console.log(inputValue);

            for (let i = 0; i < arrayOfTodos; i++) {
                const todo = arrayOfTodos[i];
                console.log('todo.uderId:', todo.userId)
                let userId = document.createElement('LI')
                userId.innerHTML = todo.userId
                inputElement.appendChild(userId)
            }
            // clear elements on page
            // get input element by id
            // get input value
            // filter through array of todos to find userId === input.value
          
            // get ol parent element
            // create list item
            // create textNode and add filtered todo.title
            //append textNode to list item
            // append list item to parent element
          
          }
          
          const incompletedTodos = () => {
            console.log('incompletedTODOS')
            // function clearBox(elementID)
            let newList = document.getElementById('todo-list').innerHTML = ""

            let inputElement = document.getElementById('id-input')

            let inputValue = document.querySelector('input').value;
            console.log(inputValue);

            for (let i = 0; i < arrayOfTodos; i++) {
                const todo = arrayOfTodos[i];
                console.log('todo.uderId:', todo.userId)
                let userId = document.createElement('LI')
                userId.innerHTML = todo.userId
                inputElement.appendChild(userId)
            }
            // clear elements on page
            // get input element by id
            // get input value
            // filter through array of todos to find userId === input.value
          
            // get ol parent element
            // create list item
            // create textNode and add filtered todo.title
            //append textNode to list item
            // append list item to parent element
          
          }
          
    






    