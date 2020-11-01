var firstStagePassed = false;
var mindsetStagePassed = false;
var habitStagePassed = false;

function sendMessage(){
    var table = document.getElementById("chatBox");
    // Sending the messages
    var userMessage = document.getElementById("userMessage").value;
    document.getElementById("userMessage").value = "";
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    cell1.innerHTML = "<p id='userBox'><strong>You:</strong><br>" + userMessage + "</p>";
    cell1.id = "userMessageTable";
    cell1.style.textAlign = "right";
    
    
    var botRow = table.insertRow(-1);
    var botCell1 = botRow.insertCell(0);

    if (firstStagePassed == false){
        if (userMessage.toLowerCase().includes('procrastination')){
            firstStagePassed = true;
            // Yes or no, depending on which one is clicked, a specific function will be called, make sure to do this, Arub is currently putting in the responses, should just be a lot of if statements and checking if variables are true or not 
            botCell1.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Procrastination can certainly feel like a tough cylce to escape, so the first step is to take a breath and let go of self-critical thoughts. Everyone procrastinates, and while it is certainly tough, you can get out of this mindset with the right help! So what exacly seems to be the problem?<br><br><button id='wastingTime' onclick='wastingTime()'>I feel like I'm wasting time</button><br><button id='cantFocus' onclick='cantFocus()'>I just can't focus</button></p>";
        } else if (userMessage.toLowerCase().includes('productivity')){
            firstStagePassed = true;
            botCell1.innerHTML = "<p id='introtest'><strong>Peritia: </strong> <br>Being productive can feel extremely difficult at times. It's very important to have the right mindset, so let's start with that. Let me know when you're ready to proceed!<br><br><button id='mindset' onclick='mindsetHelp()'>Ok, let's work on mindset</button><br></p>";
        } else{
            botCell1.innerHTML = "<p id='introtest'><strong>Peritia: </strong> <br>Not a recognized command, please try again</p>";
        }
    } else if (mindsetStagePassed == true && habitStagePassed == false){
        var habitRow = table.insertRow(-1);
        var habitCell = habitRow.insertCell(-1);
        habitStagePassed = true;
        habitCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Awesome! How long everyday would you like to practice this for?</p>";

    } else if (habitStagePassed == true){
        document.getElementById("sendButton").disabled = true;
        
        var timeHabitRow = table.insertRow(-1);
        var timeHabitCell = timeHabitRow.insertCell(-1);
        console.log("It got here");
        timeHabitCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Sounds good! Make sure to write this down somewhere you'll see everyday. Then, in order to ensure that you are trying your best to build this habit, make sure you visit this webpage everyday. That way you can let me know if you're on track or not, and if you ever fall off, I'll be here to help you!</p>";
    }
}


function mindsetHelp(){

    document.getElementById("mindset").disabled = true;

    // Function if the user clicks to work on their mindset
    var table = document.getElementById("chatBox");
    var mindsetRow = table.insertRow(-1);
    var mindsetCell = mindsetRow.insertCell(-1);
    mindsetStagePassed = true;
    mindsetCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Being productive in the long term is all about habits - creating good ones and getting rid of bad ones. You can't always rely on willpower to get you through things. Slowly try to build good habits, because in the long term those are what will help you. <br><br><button id='habits' onclick='goodHabits()'>How do I build good habits?</button></p>";
}

function goodHabits(){
    document.getElementById("habits").disabled = true;

    var table = document.getElementById("chatBox");
    var goodHabitsRow = table.insertRow(-1);
    var goodHabitsCell = goodHabitsRow.insertCell(-1);
    
    goodHabitsCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Start off by picking just one habit, and focus on it. Set aside a specific time in the day - it could be first thing in the morning, maybe after lunch, or even in the evening. What matters is that you keep a routine and do it consistently. That is the hardest part, so it'll take time, and you might miss out on a few days here and there, but be patient with yourself! As long as you consistently put in effort, you will see yourself imrprove. Can you think of one habit that you can start with?<br><br><button id='hasHabit' onclick='hasHabit()'>I can</button><br><button id='noHabit' onclick='noHabit()'>I can't</button></p>"
}

function hasHabit(){
    document.getElementById("hasHabit").disabled = true;
    document.getElementById("noHabit").disabled = true;

    // This function will be called if the user selected they do have a habit to work on productivity with
    var table = document.getElementById("chatBox");
    var hasHabitRow = table.insertRow(-1);
    var hasHabitCell = hasHabitRow.insertCell(-1);

    hasHabitCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>What is it? Please type in your response</p>";
}

function noHabit(){
    document.getElementById("hasHabit").disabled = true;
    document.getElementById("noHabit").disabled = true;

    var table = document.getElementById("chatBox");
    var noHabitRow = table.insertRow(-1);
    var noHabitCell = noHabitRow.insertCell(-1);

    noHabitCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Think along the lines of school work, home obligations, extracurriculars and hobbies. Within these categories, has there ever been something that you'd like to improve? <br>Take your time to think - respond to me once you've thought of something!</p>"
}

function wastingTime(){
    document.getElementById("wastingTime").disabled = true;
    document.getElementById("cantFocus").disabled = true;

    var table = document.getElementById("chatBox");
    var wastingTimeRow = table.insertRow(-1);
    var wastingTimeCell = wastingTimeRow.insertCell(-1);

    wastingTimeCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Procrastination tends to be an avoidance behaviour for when you feel fear or dread, or have something to be anxious about. Sometimes, we tend to avoid something due to these feelings and don't recognize it conciously. <br><br>Fighting these feelings can be difficult, but there are a few effective ways to dissolve these feelings! <br><br>Which one would you like to learn about first? <br><br><button id='pomodoro' onclick='pomodoro()'>The Pomodoro Technique</button><br><button id='timer' onclick='timer()'>Using a Timer</button><br><button id='peakProductivity' onclick='productivity()'>Discovering Your Peak Productivity Time</button><br><button id='rewarding' onclick='rewarding()'>Rewarding Yourself</button><br><button id='distractions' onclick='distractions()'>Reducing Distractions</button></p>"
    document.getElementById("pomodoro").disabled = false;
    document.getElementById("timer").disabled = false;
    document.getElementById("peakProductivity").disabled = false;
    document.getElementById("rewarding").disabled = false;
    document.getElementById("distractions").disabled = false;

    console.log(document.getElementById("distractions").disabled == false);
}

function cantFocus(){
    document.getElementById("wastingTime").disabled = true;
    document.getElementById("cantFocus").disabled = true;

    var table = document.getElementById("chatBox");
    var cantFocusRow = table.insertRow(-1);
    var cantFocusCell = cantFocusRow.insertCell(-1);

    cantFocusCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>I'm so sorry to hear - I understand that it is stressful when you want to work, but your brain doesn't seem to agree. <br>In order to combat this, it can be useful to understand why we procrastinate. <br><br>We tend to procrastinate for two reasons.<br>1) We think our task is too large. When tasks we are trying to complete are too complicated or difficult, it can overwhelm us. This makes us not want to start the task at all. <br>2) We think our task is too small. This might seem odd - why would be procrastinate on something that's too easy? Essentially, we tend to enjoy challenging ourselves at least a little bit. If a task is too easy, it could be too boring for us to start! <br>Which category do you think you're in? <br><button id='tooEasy' onclick='tooEasy()'>Too Easy!</button><br><button id='tooHard' onclick='tooHard()'>Too Hard!</button></p>";
}

function tooEasy(){
    document.getElementById("tooEasy").disabled = true;
    document.getElementById("tooHard").disabled = true;
    document.getElementById("sendButton").disabled = true;

    var table = document.getElementById("chatBox");
    var tooEasyRow = table.insertRow(-1);
    var tooEasyCell = tooEasyRow.insertCell(-1);

    tooEasyCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>I can offer some great tips if you think the work you have to do is too easy! <br>1) Try to add more work to your project, whether it's an extra large task, or a couple of small things here and there. <br>2) Make it seem like you have more work by dividing the work into as many tasks as you possibly can. <br>3) Turn the work into a challenge by setting some sort of goal. For example, try to do the work in a certain amount of time. </p>"
}

function tooHard(){
    document.getElementById("tooEasy").disabled = true;
    document.getElementById("tooHard").disabled = true;
    document.getElementById("sendButton").disabled = true;

    var table = document.getElementById("chatBox");
    var tooHardRow = table.insertRow(-1);
    var tooHardCell = tooHardRow.insertCell(-1);

    tooHardCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>I can offer some great tips if you think the work you have to do is too hard! <br>1) Try to break down complicated long term tasks into smaller, more manageable chunks, with short breaks in between. <br>2) Another great way to deal with hard tasks is to garnify your work. This means to add things like different types of rewards to give yourself after compelting different parts of your work, much like how you would find in a video game! <br>3) If you would like, go back to the start of this 'Procrastination' section and choose the option 'I feel like I'm wastigint time.' There, I have detailed many different types of techniques that can help you decrease procrastination!</b></p>"
}

function pomodoro(){
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;

    var table = document.getElementById("chatBox");
    var pomodoroRow = table.insertRow(-1);
    var pomodoroCell = pomodoroRow.insertCell(-1);

    pomodoroCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>The Pomodoro, or 'Tomato' Technique is where you break your studying into small, manageable chunks. Between each chunk you take a short break. <br>A good chunk size to start with is 25 minutes of work with a 5 minute break<br><br>Try this! <br>1) Find a task you want to do - it can be anything!<br>2) Set a timer on your phone for 25 minutes.<br>3) Just get to work! You don't have to be fast-paced - as long as you're completing stuff, you're doing good!<br>4) Every time your brain starts to wander, bring yourself back in the moment and think 'It's just 25 minutes, I can do this!' Mindset is key - make sure you are hyping yourself up!<br>5) After your 25 minutes are up, take your 5 minute break and reward yourself any way you like. </p>";
    again();
}

function again(){
    var table = document.getElementById("chatBox");
    var moreRow = table.insertRow(-1);
    var moreCell = moreRow.insertCell(-1);

    moreCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>Would you like to see more techniques? <br><button id='yes' onclick='yes()'>Yes</button><br><button id='no' onclick='no()'>No</button></p>";
}
function timer(){
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;

    var table = document.getElementById("chatBox");
    var timerRow = table.insertRow(-1);
    var timerCell = timerRow.insertCell(-1);

    timerCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>One of the simplest things you can do is to use a timer - It can be a great way to keep yourself motivated. It's also very satisfying to see that timer tick down! There are many amazing apps available from the Play Store and App Store that can act as timers, along with the default clock apps. If you don't like your default timer app, a great app to check out is <i>Forest!</i></p>";
    again();
}

function productivity(){
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;

    var table = document.getElementById("chatBox");
    var productivityRow = table.insertRow(-1);
    var productivityCell = productivityRow.insertCell(-1);

    productivityCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>You might have heard of the terms 'Night Owl' and 'Morning Lark' - but did you know that there is scientific evidence of a biological different between these two groups? <br>Morning Larks should schedule their work in the morning. Try waking up a little earlier than normal, sit down with a big glass of water and get to work. See if this works better for you! <br>Night Owls should schedule their work in the afternoon, since that's when they work best. Just make sure to leave about an hour or so of time for yourself to wind down before you sleep, and that you're not working late into the night - that can be a tricky line to balance! Try this out and see if this option works better for you! <br>Once you try out both options, you'll be able to identify the time(s) at which you work best, and thus you'll be able to schedule your work to take place at your peak productivity time!</p>";
    again();
}

function rewarding(){
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;

    var table = document.getElementById("chatBox");
    var rewardingRow = table.insertRow(-1);
    var rewardingCell = rewardingRow.insertCell(-1);

    rewardingCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>This is a tip for the next time you get into the flow of things! Remember to reward yourself, whether it be watching some YouTube, listening to some music, playing some games - whatever your idea of a good time is! <br>As good as our brains are at working, even the hardest workers need a break. Make sure to take frequent but reasonable breaks. If you can, go for a walk! It's scientifically proven that exercise leads to the excretion of hormones that will help you work better.</p>";
    again();
}

function distractions(){
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;

    var table = document.getElementById("chatBox");
    var distractionsRow = table.insertRow(-1);
    var distractionsCell = distractionsRow.insertCell(-1);

    distractionsCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>The most common cause of procrastination is distractions! This often comes from the belief that 'multitasking' can be more productive. In reality, you're just overwhelming your brain, disallowing it from giving each task its best effort. <br> It's important to get rid of the things that distract you. Contrary to popular belief that doesn't just mean your phone or other sorts of technology - you might be an avid guitar player, or perhaps you like doing magic tricks. Whatever it is, putting these distractions away can greatly improve your productivity! <br>If it takes your mind away from the task at hand, you need to put it away!</p>";
    again();
}

function yes(){
    // If the user would like to see further options
    wastingTime();
}

function no(){
    document.getElementById("yes").disabled = true;
    document.getElementById("no").disabled = true;
    document.getElementById("sendButton").disabled = true;
    document.getElementById("pomodoro").disabled = true;
    document.getElementById("timer").disabled = true;
    document.getElementById("peakProductivity").disabled = true;
    document.getElementById("rewarding").disabled = true;
    document.getElementById("distractions").disabled = true;
    // If the user would not like to see any of the further options
    var table = document.getElementById("chatBox");
    var noRow = table.insertRow(-1);
    var noCell = noRow.insertCell(-1);

    noCell.innerHTML = "<p id='introtest'><strong>Peritia: </strong><br>I hope you found one or more of these techniques useful, and remember, you can always search the web if you feel like you need a technique that better suits you!</p>";
}

