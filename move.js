let mainimg=document.getElementById('mainimg');
function background(id,src)
{
switch(id)
{
    case 'blue':
        {
            document.body.style.backgroundColor="rgb(89, 155, 199)";
       mainimg.src=src;
            break;
        }
        case 'black':
            {
 document.body.style.backgroundColor="rgb(78, 75, 75)";
 mainimg.src=src;

 break;
            }
case 'white':
{       mainimg.src=src;
    document.body.style.backgroundColor="rgb(187, 175, 124)";

    break;
}
case 'red':
    {       mainimg.src=src;
        document.body.style.backgroundColor="#c82525";
        break;
    }
case 'gold':
    {
        mainimg.src=src;
        document.body.style.backgroundColor="#c79b53";
        break;
    }
}
}