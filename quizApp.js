
var questions=[{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What five letter word is the motto of the IBM Computer company?","correct_answer":"Think","incorrect_answers":["Click","Logic","Pixel"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Nvidia&#039;s headquarters are based in which Silicon Valley city?","correct_answer":"Santa Clara","incorrect_answers":["Palo Alto","Cupertino","Mountain View"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What was the name given to Android 4.3?","correct_answer":"Jelly Bean","incorrect_answers":["Lollipop","Nutella","Froyo"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"On which day did the World Wide Web go online?","correct_answer":"December 20, 1990","incorrect_answers":["December 17, 1996","November 12, 1990","November 24, 1995"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Generally, which component of a computer draws the most power?","correct_answer":"Video Card","incorrect_answers":["Hard Drive","Processor","Power Supply"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In the server hosting industry IaaS stands for...","correct_answer":"Infrastructure as a Service","incorrect_answers":["Internet as a Service","Internet and a Server","Infrastructure as a Server"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In programming, the ternary operator is mostly defined with what symbol(s)?","correct_answer":"?:","incorrect_answers":["??","if then","?"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In computing terms, typically what does CLI stand for?","correct_answer":"Command Line Interface","incorrect_answers":["Common Language Input","Control Line Interface","Common Language Interface"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"The name of technology company HP stands for what?","correct_answer":"Hewlett-Packard","incorrect_answers":["Howard Packmann","Husker-Pollosk","Hellman-Pohl"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What does RAID stand for?","correct_answer":"Redundant Array of Independent Disks","incorrect_answers":["Rapid Access for Indexed Devices","Range of Applications with Identical Designs","Randomized Abstract Identification Description"]}]

generateQuiz()      //function ko phly is lye call kr rhy ha tak jsy hi hmari html file chaly to foran question ki list load hojae

function generateQuiz()
{
    var ulQuestion=document.getElementById('ulForQuestions')
    for(var i=0;i<questions.length;i++)
    {
        // console.log(questions[i])
        //step1
        var createLi=document.createElement('LI')
        createLi.id='li-id'
        var questTitle=document.createElement('H3')
        questTitle.innerHTML=questions[i].question    //.question aik function ha question array ka jis trh .value, .innerHTML h wse hi  
        createLi.appendChild(questTitle)
        ulQuestion.appendChild(createLi)

        // step2
        var options=questions[i].incorrect_answers
        options.push(questions[i].correct_answer)
        // console.log(options)
        for(var j=0;j<options.length;j++)
        {
            var createRadioBTN=document.createElement('INPUT')
            createRadioBTN.type='radio'
            createRadioBTN.id='radio-id'
            createRadioBTN.setAttribute('name',i)
            createRadioBTN.value=options[j]
            createLi.appendChild(createRadioBTN)

            //option ki value ko input k tag k agy rkhny k lye span bnaengy <input type='radio' name=1,2....>option value
            var createSPAN=document.createElement('SPAN')
            createSPAN.innerHTML=options[j]
            createLi.appendChild(createSPAN)

            var lineBreaker=document.createElement('BR')
            createLi.appendChild(lineBreaker)
        }
        ulQuestion.appendChild(createLi)

    }
}

function getResult()
{
    var correctANSWERS=[]
    var radioValue=[]
    
    for(var i=0;i<questions.length;i++)
    {
        
         correctANSWERS.push(questions[i].correct_answer) 
         var radioVALUES=document.getElementsByName(i)
         for(var j=0;j<radioVALUES.length;j++)
         {
            if(radioVALUES[j].checked)
            {
                radioValue.push(radioVALUES[j].value)
            }
         }
    }
    console.log(radioValue)        
    console.log(correctANSWERS)

    //for score
    var sum=0
    var totalNum=50
    for(var i=0;i<questions.length;i++)
    {
        if(radioValue[i]==correctANSWERS[i])
        {
            sum=sum+5
        }
    }
    var percentage=(sum*100) / totalNum
    alert('Your Score is ==> '+ percentage + '%')
} 

 