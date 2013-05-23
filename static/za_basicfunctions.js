function genli(objs)
{
    var to='';
    for(var tt in objs)
    {
        to+= '<li>'+objs[tt].title+'</li>';
    }
    return to;
}