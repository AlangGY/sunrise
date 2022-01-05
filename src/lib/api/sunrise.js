import { request } from './axios';

const getGeolocationPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });

const sunRiseAPI = {
  getSunriseDate: async () => {
    try {
      const {
        coords: { latitude, longitude }
      } = await getGeolocationPosition();
      const data = await request.get(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`
      );
      return data;
    } catch (e) {
      console.error(e);
      alert(
        '위치정보를 얻지 못했습니다. 네트워크 상태를 확인하거나, 위치정보 설정을 활성화 해주세요'
      );
    }
  }
};

export { sunRiseAPI };
