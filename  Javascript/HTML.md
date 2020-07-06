출처:https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2

1. parsing HTML -> blocked(fetching js / executing js) -> parsing HTML
```
<!DOCTYPE html>
<html lang="en">
<łead>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="main.js"></script>
</łead>
<body>
  
</body>
</html>
```


2. parsing HTML -> fetching js -> executing js
```
<!DOCTYPE html>
<html lang="en">
<łead>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</łead>
<body>
  <div></div>
  <script src="main.js"></script>
</body>
</html>
```
페이지가 js에 의존적이라면 오래 기다린다.



3. asyn:parsing HTML(fetching js) -> blocked(executing js) -> parsing HTML
```
<!DOCTYPE html>
<html lang="en">
<łead>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script asyn src="main.js"></script>
</łead>
<body>
  <div></div>
</body>
</html>
```

시간 단축!!! -> DOM에 정의가 안되어 있을 때 js 실행 시 문제 발생


4. defer:parsing HTML(fetching js) -> executing js
```
<!DOCTYPE html>
<html lang="en">
<łead>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script defer src="main.js"></script>
</łead>
<body>
  <div></div>
</body>
</html>
```

js 파일을 다 받을 때 까지 HTML 파싱을 하지 않고 한번에 보여준다.
js 파일을 순서에 상관없이 동시에 다운받는다. 



5. Class
- template
- declare once
- no data


6. Object
- instance of a class
- created many times
- data in