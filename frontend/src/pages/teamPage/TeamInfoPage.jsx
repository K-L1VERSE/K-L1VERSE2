import React, { useEffect, useState } from "react";
import { Category, Title } from "../../styles/main-styles/MainStyle";
import {
  TeamItem,
  TeamName,
  TeamWrap,
} from "../../styles/teamStyles/TeamStyle";
import TeamInfoItem from "../../components/team/TeamInfoItem";
import { getTeamInfo } from "../../api/team";

function TeamInfoPage() {
  const teamInfo = {
    teamId: 1,
    teamName: "울산 HD FC",
    description:
      "울산 HD FC는 1983년에 창단되어 울산광역시를 연고로 하는 K리그1 소속의 프로 축구단이다.  '호랑이'라는 별명을 가지고 있으며, 홈 스타디움은 Munsu Football Stadium(문수축구경기장)이다. 국내외에서 많은 성공을 거둔 팀으로서 아시아 클럽 챔피언십(현재 아시안 챔피언스 리그)에서 2회 우승한 바 있다. 또한 K리그 챔피언십에서 5회 우승하여 국내에서도 많은 성과를 보였다.",
    homepage: "https://www.uhfc.tv/",
    facebook: "https://www.facebook.com/ulsanfc",
    instagram: "https://www.instagram.com/uhdfc_1983/",
    youtube: "https://www.youtube.com/user/ULSANHYUNDAI",
    song: "",
    member: [
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
      {
        memberId: "1",
        teamId: "333",
        name: "강윤구",
        backNumber: "No.30",
        position: "mf",
        profile:
          "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20010059.jpg",
      },
    ],
  };

  const teams = [
    {
      id: 1,
      name: "울산",
    },
    {
      id: 2,
      name: "포항",
    },
    {
      id: 3,
      name: "제주",
    },
    {
      id: 4,
      name: "전북",
    },
    {
      id: 5,
      name: "서울",
    },
    {
      id: 6,
      name: "대전",
    },
    {
      id: 7,
      name: "대구",
    },
    {
      id: 8,
      name: "인천",
    },
    {
      id: 9,
      name: "강원",
    },
    {
      id: 10,
      name: "광주",
    },
    {
      id: 11,
      name: "수원",
    },
    {
      id: 12,
      name: "김천",
    },
  ];

  const [id, setId] = useState(1);
  useEffect(() => {
    // getTeamInfo(
    //   id,
    //   () => {},
    //   () => {},
    // );
  }, [id]);

  const clickId = (id) => {
    setId(id);
  };

  return (
    <div>
      <Category>
        <Title>⚽️ 팀정보</Title>
      </Category>
      <TeamWrap>
        {teams.map((team) => (
          <TeamItem
            focus={team.id === id}
            key={team.id}
            onClick={() => clickId(team.id)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/badge/badge${team.id}.png`}
              alt={team.name}
            />
            <TeamName>{team.name}</TeamName>
          </TeamItem>
        ))}
      </TeamWrap>
      <TeamInfoItem teamInfo={teamInfo} />
    </div>
  );
}

export default TeamInfoPage;
