import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import LoginLogo from "../../components/login/LoginLogo";

import { useSetRecoilState } from "recoil";

import axios from "../../api/axios";
import { UserState } from "../../global/UserState";

function NaverRedirection() {
  console.log("NaverRedirection");

  const PARAMS = new URL(document.location).searchParams;
  const NAVER_CODE = PARAMS.get("code");
  
  const setUserState = useSetRecoilState(UserState);

  const request = axios
    .get(`/user/login/oauth/code/naver?code=${NAVER_CODE}`)
    .then((res) => {
      console.log(res);

      /* access Token 받고 전역 변수로 관리 */
      setUserState({
        nickname: res.data.nickname, 
        profile: res.data.profile, 
        accessToken: res.data.accessToken,
        email: res.data.email,
        domain: res.data.domain,
        isLoggedIn: true,
      });

      /* 성공시 홈화면으로 */
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      // window.location.href = "/login";
    });

  console.log(request);

  return (
    <div>
      <LoginLogo />
      <WaitForLogin>
        <div>
          <FontAwesomeIcon icon={faHourglassHalf} />
          &nbsp;&nbsp;&nbsp;로그인 중입니다.
        </div>
      </WaitForLogin>
    </div>
  );
}

const WaitForLogin = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  height: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default NaverRedirection;