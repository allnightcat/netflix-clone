## 넷플릭스 클론

### 페이지 구성

1. Main page  
    a. header: Netflix logo와 유저 이미지가 있다. Netflix logo를 누르면 Main Page로 이동한다.  
    b. banner : 하나의 영화를 랜덤하여 보여준다. Play 버튼과 More Information 버튼이 있으며, Play 버튼을 누르면 동영상이 해당 영화의 예고편 영상이 재생된다. (예고 동영상 없을 수 있음)   
    c. 각 영화 리스트 : 트랜드, 로맨스, 호러, 다큐맨터리, 코메디 등 영화 장르별 리스트가 보여진다. 클릭 시 상세 정보를 모달로 확인할 수 있다.  
    d. footer: 넷플릭스 copyright & 정책 등 클론. 클릭해도 link 이동이 없다.  
2. Search Page    
    a. Main Page에서 영화 검색란에 검색어를 입력하면 관련 영화를 찾을 수 있다.  
    b. 키워드 연속 입력이 끝나면 관련 검색어로 영화 api가 호출된다.
3. Detail Page  
    a. 상세 정보 페이지  
    b. Search page에서 영화 하나를 클릭 시 볼 수 있는 페이지이다.  
    c. 현재는 영화 이미지만 넣어두었다. 

### 사용 기술
1. HTML5, CSS3, JavaScript 기본 사용
2. React-App 활용
3. Movie api를 받아서 영화 리스트를 보여주었음. (https://www.themoviedb.org/)
