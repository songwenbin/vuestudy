import axios from "axios";
import { notifaction } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notifaction.error({
        message: status,
        description: statusText
      });
      return Promise.reject(error);
    });
}

export default request;
