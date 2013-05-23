#!/usr/bin/env python

import web
import os
#import juggernaut
#from gevent import monkey; monkey.patch_all()
#from gevent.pywsgi import WSGIServer
#from socketio.server import SocketIOServer



import time

urls = ('/(static)/(.*)', 'static',
'/', 'Index'
        )



render = web.template.render('templates/')
db = web.database(dbn='postgres', user='postgres', pw='admin', db='template1')


web.config.debug = True



  
my_form = web.form.Form(
                web.form.Textbox('', class_='textfield', id='textfield'),
                )
def make_text(string):
    return string + "ok"

class Index:

    def GET(self,name=''):
        todos = db.select('todo')
        form = my_form()
        return render.index(todos,form,"a good example")

    def POST(self,name=''):
        form = my_form()
        form.validates()
        s = form.value['textfield']
        return make_text(s)

class static:
    def GET(self, media, file):
        try:
            f = open(media+'/'+file, 'r')
            return f.read()
        except:
            return '' # you can send an 404 error here if you want




application = web.application(urls, globals()).wsgifunc()


if __name__ == '__main__':
    web.application(urls,globals()).run()
                

#    WSGIServer(('', 8000), application).serve_forever()
    
    
#    SocketIOServer((SOCKETIO_HOST, SOCKETIO_PORT), \
#                   app, resource="socket.io").serve_forever()
