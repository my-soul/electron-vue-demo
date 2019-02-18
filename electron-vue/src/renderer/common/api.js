import request from './request';

export const RTC_APP_ID = process.env.REACT_APP_TEST_APPID || 'd8lk7l4ed';

export const HOST = process.env.REACT_APP_TEST_HOST || 'https://api-demo.qnsdk.com';

export const PREFIX = '/v1/rtc';

export const API = {
  LIST_ROOM: `/rooms/app/${RTC_APP_ID}`,
  LIST_USERS: (appid, roomid) =>
    `${HOST}${PREFIX}/users/app/${appid || RTC_APP_ID}/room/${roomid}`,
  GET_APP_CONFIG: (appid) =>
    `${HOST}${PREFIX}/app/${appid || RTC_APP_ID}`,
  JOIN_ROOM_TOKEN: (roomid, userid, appid) =>
    `${HOST}${PREFIX}/token/app/${appid || RTC_APP_ID}/room/${roomid}/user/${userid}`,
  CREATE_ROOM_TOKEN: (roomid, userid, appid) =>
    `${HOST}${PREFIX}/token/admin/app/${appid || RTC_APP_ID}/room/${roomid}/user/${userid}`
};

export const getToken = (appid, roomid, userid) => {
  const api = userid === 'admin' ? API.CREATE_ROOM_TOKEN : API.JOIN_ROOM_TOKEN;
  // 此处服务器 URL 仅用于 Demo 测试！随时可能 修改/失效，请勿用于 App 线上环境！
  // 此处服务器 URL 仅用于 Demo 测试！随时可能 修改/失效，请勿用于 App 线上环境！
  // 此处服务器 URL 仅用于 Demo 测试！随时可能 修改/失效，请勿用于 App 线上环境！
  const requestURL = `${api(roomid, userid, appid)}?bundleId=demo-rtc.qnsdk.com`;
  return request(requestURL, 'GET');
};

export const FLV_PATH = (roomName) => `https://pili-hdl.qnsdk.com/sdk-live/${roomName}.flv`;

export const HLS_PATH = (roomName) => `https://pili-hls.qnsdk.com/sdk-live/${roomName}.m3u8`;
