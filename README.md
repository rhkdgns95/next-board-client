# next-board-client
- nextjs projects client.

## Todo
- [x] init project.
- [x] Create nextjs with typescript.
- [x] Custom App, appProvider.
- [x] Custom Layout.
- [x] Navigation.
- [x] Custom Server.
- [ ] Cookies.
- [] Login.

### Install
> yarn create next-app --example with-typescript <project_name>
> yarn add express
> yarn add js-cookie @types/js-cookie

### Todo Details


### Study
1. Nextjs에서의 Cookies get
: nextjs에서의 쿠키 설정은 2가지 상황으로 체크해야함.
: 첫째, Server측 렌더링일 경우, cookie는 req의 headers값을 가져오는 방법.
: 둘째, Client측 렌더링일 경우, cookie는 process.browser가 존재하는 js-cookie방법.
: 위 2가지 상황의 이유는 nextjs의 구동 방식을 이해하면 된다.
: nextjs는 SSR을 방식으로 웹이 처음 렌더링 될 때 혹은 새로고침 할때는 서버측 렌더링을 한다. 하지만, 이후의 next/link나 next/router를 통해 라우팅 동작은 클라이언트 측을 통해서 이루어지므로, 다음상태를 유의하면서 쿠키값을 잘 설정한다.
: [ Auth 1 ] - 로그인이 이미 되어있는 상황에서의 초기 렌더링 및 새로고침. (서버측 렌더링 상황)
: [ Auth 2 ] - 초기 렌더링 이후의 로그인하기. (클라이언트 측 렌더링 상황)

2.
