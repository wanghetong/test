#!/usr/bin/env python

import web
import os
import json
from settings import *
from common import *
import tools
#import juggernaut
#from gevent import monkey; monkey.patch_all()
#from gevent.pywsgi import WSGIServer
#from socketio.server import SocketIOServer



import time

urls = (
'/', 'Index'
        )

render = web.template.render('templates/')
db = web.database(dbn='postgres', user='postgres', pw='admin', db='template1')

web.config.debug = True



class Index:

    def GET(self,name=''):
        tv=allJsCss0()
        
        print tv
        return render.index(tv[0],tv[1])
        #return render.index("ok")
        
    def POST(self,name=''):
        data=web.input()
        
        qcmd="select * FROM todo WHERE todo.id='"+data.good+"'"
        try:
            todos = db.query(qcmd)
            
            temv=[]
            for td in todos:
                temv.append(td)
     
            tv=json.dumps(temv)
            return tv
        except Exception:
            return json.dumps([])
 
        
#'/(static)/(.*)', 'static',
#class static:
#    def GET(self, media, file):
#        try:
#            f = open(media+'/'+file, 'r')
#            return f.read()
#        except:
#            return '' # you can send an 404 error here if you want




application = web.application(urls, globals()).wsgifunc()


if __name__ == '__main__':
    web.application(urls,globals()).run()
                

#    WSGIServer(('', 8000), application).serve_forever()
    
    
#    SocketIOServer((SOCKETIO_HOST, SOCKETIO_PORT), \
#                   app, resource="socket.io").serve_forever()
