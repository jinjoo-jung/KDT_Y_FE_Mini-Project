# 미니 프로젝트 : 숙박 예약 API 서비스 
### 프로젝트 기간 : 11/20(월) ~ 12/01 (금), 2주간

### **구현 사항**

- 주문 결제 페이지 , api 연결
    - 주문할 숙소 정보 결제 페이지로 가져오기
    - 이용자 , 예약자 정보 동일하면 예약자 정보 가져오기
    - 이용자 정보, 결제 방식, 필수 체크박스 선택 후 결제 가능
- 주문 내역 상세 페이지 , api 연결
    - 결제 완료 →  주문 완료 상세 페이지
    - 결제 금액, 결제 수단, 이용자, 예약자 정보 보여주기
- 주문 내역 목록 페이지, api 연결
    - 사용자가 숙소 결제한 날짜 기준으로 숙소 목록 띄어주기
    - 상세보기 클릭시 상세 페이지로 이동
      
<hr>

### 숙소 예약 정보 조회 가져와서 결제 진행 & 결제 완료되면 예약 내역 페이지
![결제페이지](https://github.com/jinjoo-jung/KDT_Y_FE_Mini-Project/assets/85981963/0ab9bc51-409d-41e3-92fb-988131824df8)

### 결제(예약)했던 숙소 목록 조회
![예약 내역 목록](https://github.com/jinjoo-jung/KDT_Y_FE_Mini-Project/assets/85981963/f3708946-7677-48b8-adae-2b687f66a38e)

### 장바구니에 담은 숙소 2개 결제하는 페이지
 ![결제페이지2](https://github.com/jinjoo-jung/KDT_Y_FE_Mini-Project/assets/85981963/e3252608-ae61-484b-bc83-65385a30c99d)

<hr>

### 트러블 슈팅
1. Next.js
SSR을 사용한 SEO를 위한 Next.js를 사용한 프로젝트가 이번이 처음이라서 그런지, 서버 컴포넌트와 클라이언트 컴포넌트 간의 렌더링의 차이점이나 props전달하는 방식들을 헤맸던 것 같습니다. 그러다 보니 서버 컴포넌트에서 useState, useEffect를 사용하게 됐고 결과 ‘use client’를 작성하라는 에러 메세지를 마주하면서 다시 서버컴포넌트와 클라이언트의 차이점을 제대로 공부하고 코드를 작성해야겠다고 생각했습니다. 
이후 lifecycle hooks같은 상호작용성을 포함하는 컴포넌트라면 그것을 클라이언트 컴포넌트로 만들고, 그렇지 않으면 서버컴포넌트로 관리를 하는 방식으로 코드를 작성하면서 next.js를 왜 사용하는지, 어떤 부분에서 사용해야하는지 등 문제를 해결해나가며 배울 수 있었습니다.

2. ChunkError
<img width="483" alt="스크린샷 2023-12-01 오전 5 30 50" src="https://github.com/jinjoo-jung/KDT_Y_FE_Mini-Project/assets/85981963/75e5e049-8130-4f61-a788-abb61c987ab0">

이 부분은 완전히 해결하지 않은 상태이지만 겪은 문제이기에 적었습니다. 직역하면 Chunk 파일을 불러오지 못해서 발생하는 에러라고 합니다. 사용자의 브라우저에서 캐싱이 되었거나, 이전 버전의 페이지가 계속 열려있던가 하는 등의 이류로 인해 지금은 존재하지 않는 이전 저번의 chunk 파일을 요청하게 되면서 ChunkError가 발생하는 현상인데, 이 에러가 계속 뜨면서 화면이 보이지 않는 것이 아니라 열 번 중 한번꼴로 발생하고 새로고침하면 브라우저 화면은 잘 작동을 해서 정확한 에러 발생 이유는 찾지 못 했습니다. 어떤 이유로 에러가 발생하는지 대충 이해는 했지만 정확하게 해결을 한 것은 아니라서 더 찾아보고 문제를 해결해 나갈 예정입니다.

<hr>

### 회고

이번 프로젝트는 숙박 예약 서비스로, 제가 맡았던 부분인 숙소 결제 페이지와 주문 내역 목록 페이지간의 상호작용을 원활하게 하기위한 컴포넌트 구조를 나누고  코드를 작성하도록 노력하였습니다.
next.js 프레임워크를 프로젝트에 처음으로 사용하면서 기존과는 달리 서버사이드렌더링을 통해 코드를 짜고 구조가 달라진 부분이 어렵다고 느껴졌지만 좋은 팀원분들을 만나서 next.js에 대해서 더 많이 배울 수 있었고,  백엔드분들과 협업하면서 API 문서를 보고 데이터 구조를 잡고, 데이터 정보를 가져오기까지 같이 소통하고 수정하는 과정을 거치면서 협업의 중요성도 다시 한 번 느낄 수 있었던 프로젝트였습니다.



