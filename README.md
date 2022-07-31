<img src = "https://user-images.githubusercontent.com/47416686/182015000-1c3e308c-dd8c-48bf-93be-15bf6fb558f7.png" width="50%" height="30%">

### 프로젝트 설명

<aside>
👉🏻 정해진 요구 사항에 맞게 간단한 퀴즈 웹앱을 만들었습니다.
</aside>

<br/>

### 기술 스택

- React
- Typescript
- Recoil
- Mui
- apexcharts(시각화 라이브러리)

### 진행 과정

1. **화면 제작**
- 요구 사항을 보고 피그마를 사용하여 화면을 제작했습니다.

<img src = "https://user-images.githubusercontent.com/47416686/182015116-9e027281-3bae-4d50-b3ee-e218b16e3f5f.png" width="100%" height="30%">

2. **프로젝트 관리**
- [트렐로](https://trello.com/invite/b/xTVWmxCg/e3707119dd4b76273e1d3adad64f3eeb/quiz-webapp)를 사용해서 실제 프로젝트를 하는 것처럼 관리했습니다.
- 실제 지라를 사용한다고 생각하고 진행했습니다.
- `master` - `develop` - `feature` or `bug` 브랜치로 구분하여 개발을 진행했습니다.

<img src = "https://user-images.githubusercontent.com/47416686/182015174-91aead7d-43c1-4ee3-88d5-24ba79f60da6.png" width="100%" height="30%">

3. **프로젝트** **폴더 구조**
<img src = "https://user-images.githubusercontent.com/47416686/182015201-1c5982f0-60b4-4c40-8123-b8355fafaa76.png" width="40%" height="30%">

- `apis`: 백엔드 api 폴더
- `components`: 화면에 보여지는 UI 폴더
- `hooks`: 커스텀 hook 모아 놓은 폴더
- `layouts`: 화면 전체 레아이웃 폴더
- `pages`: 페이지를 모아 놓은 폴더
- `states`: 전역 상태 관련 폴더
- `styles`: app 스타일 관련 폴더
- `types`: 타입 지정해서 따로 관리하는 폴더
- `utils`: 자주 사용쓰이는 함수들을 모아놓은 폴더

4.  **구현 내용**
- 사용자는 [퀴즈 풀기] 버튼을 클릭해서 퀴즈를 풀수 있다.
 <img src = "https://user-images.githubusercontent.com/47416686/182015236-e4ff1271-5d8b-46da-afca-7574430174f0.png" width="60%" height="30%">
    
- 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
 <img src = "https://user-images.githubusercontent.com/47416686/182015261-898cc65d-87ad-4946-af3e-062865103d1e.png" width="60%" height="30%">

- 사용자는 답은을 선택하면 다음 문항을 볼수 있다.
    - 답안 선택 후 다음 문항 버튼을 볼 수 있다.
    - 답안이 맞았는지 틀렸는지 바로 알수 있다.
    - 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
    
<img src = "https://user-images.githubusercontent.com/47416686/182015324-c50f2d0e-1970-4cb9-80b8-dea82f024b99.png" width="60%" height="30%">
<img src = "https://user-images.githubusercontent.com/47416686/182015349-b764dcb2-b84c-45ea-8c07-69d840c6de15.png" width="60%" height="30%">

    
- 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
    - 퀴즈를 마칠 때까지 소요된 시간
    - 정답 개수
    - 오답 수
    - 정 오답에 대한 비율을 차트로 표기
    - 다시 풀기
    - 오답 노트
<img src = "https://user-images.githubusercontent.com/47416686/182015421-c2cd13dd-5ca0-40cd-bf17-821a5bac5df2.png" width="60%" height="30%">    

<img src = "https://user-images.githubusercontent.com/47416686/182015478-604b44b7-c3c1-4cb3-b9f1-29cd4ed87c07.png" width="60%" height="30%">
<img src = "https://user-images.githubusercontent.com/47416686/182015487-8522ee99-dbee-41a5-b38b-6a13e4cdd792.png" width="60%" height="30%">

5. **테스트 코드 작성**
    - 일부 컴포넌트에만 테스트 코드 작성을 진행했습니다.
    
  ```tsx
    // QuizIntroduction.test.tsx
    describe('퀴즈 소개 컴포넌트를 렌더링한다.', () => {
      test('제목과 버튼이 있습니다.', () => {
        render(<QuizIntroduction />)
    
        const title = screen.getByText('📝 퀴즈를 풀어볼까요??')
    
        const button = screen.getByRole('button', {
          name: '퀴즈 풀기',
        })
    
        expect(title).toBeInTheDocument()
        expect(button).toBeInTheDocument()
      })
    })
    
    describe('버튼 기능을 테스트합니다.', () => {
      test('버튼을 눌렀을 때, 퀴즈 문제풀기 페이지로 이동합니다.', () => {
        render(<QuizIntroduction />)
    
        const button = screen.getByRole('button', {
          name: '퀴즈 풀기',
        }🔍)
    
        userEvent.click(button)
    
        expect(screen.queryByText('/퀴즈 풀기/i')).not.toBeInTheDocument()
      })
    })
  ```
 
6. **결과물**
    
    <aside>
    👉🏻 github page를 통해서 결과물을 볼수 있는 URL을 만들었습니다.
    
    </aside>
    
   [🔍 바로가기](https://wjdxor133.github.io/Quiz-webapp/)

<br/>
  
