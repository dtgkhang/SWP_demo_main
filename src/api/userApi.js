import axiosPrivate from "./axiosPrivate";

const userApi = {
  getUser(id) {
    const url = `/api/accounts/${id}`;
    return axiosPrivate.get(url);
  },
  updateUser(id, data) {
    const url = `/api/accounts/${id}`;
    return axiosPrivate.patch(url, data);
  },
  checkLogin(data) {
    const url = `/api/auth/login`;
    return axiosPrivate.post(url, {data});
  },
  registerUser() {
    const url = `/api/auth/register`;
    return axiosPrivate.patch(url);
  },
  changePassword(id) {
    const url = `/api/accounts/change/${id}`;
    return axiosPrivate.patch(url);
  },getBooked(id){
    const url = `/api/booking/account/${id}`;
    return axiosPrivate.get(url);
  },requestRefund(id){
    const url = `/api/booking/RequestRefunded/${id}`;
    return axiosPrivate.get(url);
  },rateCompany(data){
    const url = `/api/feedbacks/create`;
    return axiosPrivate.post(url,data);
  },cancelRequestRefund(id){
    const url = `/api/booking/CancelRequestRefunded/${id}`;
    return axiosPrivate.get(url);
  }

};

export default userApi;
