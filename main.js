const circles = document.querySelectorAll('.circle');
let inputs = document.querySelectorAll('input');
const ProgressBar = document.querySelector('.Progress-bar');
let descValue = document.querySelector('.desc-value');
const error = document.querySelector('.error');
const addTaskSection = document.querySelector('.add-task-section');



const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    task_1: {
        name: '',
        completed: false
    },
    task_2: {
        name: '',
        completed: false
    },
    task_3: {
        name: '',
        completed: false
    },
    task_4: {
        name: '',
        completed: false
    },
    task_5: {
        name: '',
        completed: false
    }
};


const commentMsg = [
    'Raise the bar by completing your goals!',
    'Well begun is first goal',
    'Well begun is half done',
    'Whoa! Just a step away, keep going!',
    'awesome! You just completed all the goals, time for chill :D'
];


let completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length;

ProgressBar.children[0].style.width = `${(completedGoalCount / inputs.length) * 100}%`;
ProgressBar.children[0].firstElementChild.innerText = `${completedGoalCount}/${inputs.length} completed`;
descValue.innerText = commentMsg[completedGoalCount];


circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        const checkFelidFilled = [...inputs].every((input) => {
            return input.value
        })
        if (checkFelidFilled) {
            circle.parentElement.classList.toggle('completed');
            const inputId = circle.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed;
            completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length;
            ProgressBar.children[0].style.width = `${(completedGoalCount / inputs.length) * 100}%`;
            ProgressBar.children[0].firstElementChild.innerHTML = `${completedGoalCount}/${inputs.length} completed`;
            descValue.innerText = commentMsg[completedGoalCount];
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
        } else {
            ProgressBar.classList.add('show-error');
            error.innerText = `Please set all the ${inputs.length} goals!`;
        }
    })
})

inputs.forEach((input) => {
    input.value = allGoals[input.id].name;

    if (allGoals[input.id].completed) {
        input.parentElement.classList.add('completed');
    }

    input.addEventListener('focus', () => {
        ProgressBar.classList.remove('show-error');
    })

    input.addEventListener('input', (e) => {
        if (allGoals[input.id].completed) {
            e.target.value = allGoals[input.id].name;
            return
        }
        allGoals[input.id].name = e.target.value

        localStorage.setItem('allGoals', JSON.stringify(allGoals));
    })
})