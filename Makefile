clean:
	echo clean temp files *****************
	rm -rf build

test:
	clear
	echo running mocha test *****************
	mocha routes/*.js

start:
	echo running node app.js at 127.0.0.1:3000 ***************
	npm start

# 解决test start db 名字冲突的问题
# GNU默认makefile target是一个文件因此他会先检测同级目录下是否已存在这个文件，如果存在，则会abort掉make 进程，
# 但目标不是文件的话，则会出现up to date的情况，这种情况需要.PHONY来避免问题的出现，
# phony的意思是“赝品”，在这里可以形象的理解成“不是文件”。
.PHONY: test db start
