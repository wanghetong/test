import os
import glob

def allJsCss0():
    tv=os.listdir("./static")
    tv.sort()
    tm=[]
    tm.append([])
    tm.append([])
    
    for t1 in tv:
        if t1.endswith(".js"):
            tm[1].append(t1)
        elif t1.endswith(".css"):
            tm[0].append(t1)
    return tm
        



