import axios from "axios";
import * as userService from "./user.service";
import * as userRepo from "../db/user.repo";
// export const kakaoStart = () => {
//   const baseUrl = "https://kauth.kakao.com/oauth/authorize?";
//   const config = {
//     client_id: process.env.KAKAO_KEY,
//     redirect_uri: process.env.KAKAO_REDIRECT,
//     response_type: "code",
//     scope: "profile_nickname,profile_image,account_email",
//   };
//   const query = new URLSearchParams(config).toString();
//   const finalUrl = `${baseUrl}${query}`;
//   console.log("๐ฅ ๋์ํญ๋ชฉ ์ป์๋ค");
//   return finalUrl;
// };

type AuthConfig = {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
};
export const kakaoAuth = async (code: string) => {
  const baseUrl = "https://kauth.kakao.com/oauth/token";
  const config: AuthConfig = {
    grant_type: "authorization_code",
    client_id: process.env.KAKAO_KEY,
    redirect_uri: process.env.KAKAO_REDIRECT,
    code,
  };
  const params = new URLSearchParams(config).toString();
  try {
    const accessToken = await axios
      .post(baseUrl, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => res.data.access_token);
    console.log(accessToken);
    if (accessToken) {
      console.log("๐ฅ ์ก์ธ์ค ํ ํฐ์ด ์กด์ฌํจ!");
      const apiUrl = "https://kapi.kakao.com/v2/user/me";
      const kakao_account = await axios
        .get(apiUrl, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          return res.data.kakao_account;
        });
      if (kakao_account.profile.has_email === false) {
        throw new Error("์ด๋ถ์ ์นด์นด์ค๊ณ์ ์ ์ด๋ฉ์ผ์ด ์์ ใ ใ ");
      }
      const username = kakao_account.profile.nickname;
      const avatarUrl = kakao_account.profile.profile_image_url;
      const email = kakao_account.email;
      const overlapUser = await userService.individualInfo(email);
      console.log("์ฌ๊ธฐ๊น์ง์ค๋?");
      if (!overlapUser) {
        const joinData = {
          username,
          avatarUrl,
          email,
          howToLogin: "sosial",
        };
        await userRepo.createIndiUser(joinData);
        // ๋ก๊ทธ์ธ ์งํ ํ ๋ฆฌํด
      }
      try {
        const result = await userService.login(email);
        return result;
      } catch (err) {
        throw new Error(err);
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error(`500, `);
  }
};
