### express사용 mysql(구글 클라우드) 사용한 api연결



### 간단정리
package.json => "scripts": {
    "start": "node server.js", 추가
var port = process.env.PORT || 3000;

heroku login
heroku create jamenada-mysql-host

git push heroku master

### 확인 : 
[https://jamenada-mysql-host.herokuapp.com](https://jamenada-mysql-host.herokuapp.com)

### 에러 체크 
heroku logs --tail
### 재시작
heroku start / stop / restart

## 대쉬보드
[https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps)

###환경변수



 

## 새로 연결
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/nothors2/mysql-host.git
git push -u origin master
