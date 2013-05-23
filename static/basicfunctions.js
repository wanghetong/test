/**
 * Created with JetBrains WebStorm.
 * User: pitybea
 * Date: 5/23/13
 * Time: 6:43 PM
 * To change this template use File | Settings | File Templates.
 */
function genli(objs)
{
    var to='';
    for(var tt in objs)
    {
        to+= '<li>'+objs[tt].title+'</li>';
    }
    return to;
}