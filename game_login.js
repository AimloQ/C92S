function addU()
{
    player1=document.getElementById("p_1").value;
    player2=document.getElementById("p_2").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location.replace("game_page.html");
}