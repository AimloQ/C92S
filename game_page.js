player1=localStorage.getItem("p_1");
player2=localStorage.getItem("p_2");
score1=0;
score2=0;
document.getElementById("p_1").innerHTMl=player1+":";
document.getElementById("p_2").innerHTML=player2+":";
document.getElementById("p1_score").innerHTMl=score1+":";
document.getElementById("p2_score").innerHTML=score2+":";
document.getElementById("p_ques").innerHTMl="Question turn-"+player1;
document.getElementById("p_ans").innerHTMl="Answer turn-"+player2;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("LowerCase = "+word);
    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide);
    console.log(charAt2);

    length_minus=word.length-1;
    charAt3=word.charAt(length_minus);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

ques_turn="player1";
ans_turn="player2";
function check()
{
    get_ans=document.getElementById("input_check_box").value;
    ans=get_ans.toLowerCase();
    console.log(ans);
    if (ans==word)
    {
        if (ans_turn=="player1")
        {
            score1=score1+1;
            document.getElementById("p1_score").innerHTML=score1;
        }

        else
        {
            score2=score2+1;
            document.getElementById("p2_score").innerHTML=score2;
        }
    }

    if (ques_turn=="player1")
    {
        ques_turn="player2";
        document.getElementById("p_ques").innerHTML="Question turn- "+player2;
    }

    else
    {
        ques_turn="player1";
        document.getElementById("p_ques").innerHTML="Question turn- "+player1;
    }

    if (ans_turn=="player1")
    {
        ans_turn="player2";
        document.getElementById("p_ans").innerHTML="Answer turn- "+player2;
    }

    else
    {
        ans_turn="player1";
        document.getElementById("p_ans").innerHTML="Answer turn- "+player1;
    }
    document.getElementById("output").innerHTML="";
}