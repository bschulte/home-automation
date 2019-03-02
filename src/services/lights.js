import axios from 'axios';
import { hueUser, bridgeIp } from '../config';

const get = async (url, params) => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      params
    });
    if (response.status !== 200) {
      console.log('Status code not 200:', response);
    }

    return response.data;
  } catch (err) {
    console.log('Error with get request:', err);
    return false;
  }
};

const put = async (url, data) => {
  try {
    const response = await axios({
      method: 'PUT',
      url,
      data
    });
    if (response.status !== 200) {
      console.log('Status code not 200:', response);
    }

    return response.data;
  } catch (err) {
    console.log('Error with get request:', err);
    return false;
  }
};

export const getLights = async () => {
  const data = await get(`https://${bridgeIp}/api/${hueUser}/lights`);

  const lightsData = Object.entries(data).map(([id, lightData]) => ({
    ...lightData,
    id
  }));
  console.log(lightsData);

  return lightsData;
};

export const toggleLight = async (lightId, currentState) => {
  console.log('Toggling light id:', lightId);
  return put(`https://${bridgeIp}/api/${hueUser}/lights/${lightId}/state`, {
    on: !currentState
  });
};
