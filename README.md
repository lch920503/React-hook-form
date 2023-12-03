# React-hook-form
유효성 검사: form 형식을 취하는 html 양식에서 error control과 같이 관리를 편하게 하기 위해서 사용

장점
- 비제어 컴포넌트 방식이기 때문에 렌더링 이슈는 없음
- props drilling이 없음
- 데이터가 계속 동기화되므로 분산되지 않아 관리가 편함

기능
- register (form 유효성 확인)
- handleSubmit (form 제출)
- formState (form의 전체 상태 양식 확인)
- watch (form의 실시간 입력값 확인)
- defaultValues (form에서 정한 value의 초기값)
- setError (form 에서 error 처리하는 방식을 custom)
- required (form에 추가된 입력값의 요구사항을 작성하고 메세지를 넣는 용도)
